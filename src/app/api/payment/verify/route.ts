import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { order } from "@/lib/schema";
import { eq } from "drizzle-orm";

const CASHFREE_BASE =
  process.env.CASHFREE_MODE === "sandbox"
    ? "https://sandbox.cashfree.com/pg"
    : "https://api.cashfree.com/pg";

export async function GET(request: NextRequest) {
  const cashfreeOrderId = new URL(request.url).searchParams.get("order_id");

  if (!cashfreeOrderId) {
    return NextResponse.json({ error: "order_id is required" }, { status: 400 });
  }

  try {
    // ── Fetch order status from Cashfree ───────────────────────────────────
    const cfRes = await fetch(`${CASHFREE_BASE}/orders/${cashfreeOrderId}`, {
      headers: {
        "x-client-id": process.env.CASHFREE_CLIENT_ID!,
        "x-client-secret": process.env.CASHFREE_CLIENT_SECRET!,
        "x-api-version": "2023-08-01",
      },
      // Always fetch fresh from Cashfree
      cache: "no-store",
    });

    const cfOrder = await cfRes.json();

    if (!cfRes.ok) {
      return NextResponse.json(
        { error: cfOrder.message || "Failed to fetch order from Cashfree" },
        { status: 400 },
      );
    }

    // Map Cashfree statuses → our statuses
    const statusMap: Record<string, string> = {
      PAID: "paid",
      ACTIVE: "pending",
      EXPIRED: "failed",
      CANCELLED: "failed",
    };
    const paymentStatus = statusMap[cfOrder.order_status] ?? "pending";

    // ── Update our order record ────────────────────────────────────────────
    const [updated] = await db
      .update(order)
      .set({
        paymentStatus,
        cashfreePaymentId: cfOrder.cf_order_id?.toString() ?? null,
        updatedAt: new Date(),
      })
      .where(eq(order.cashfreeOrderId, cashfreeOrderId))
      .returning();

    return NextResponse.json({
      status: paymentStatus,
      orderId: updated?.id ?? null,
      cashfreeOrderId,
      amount: cfOrder.order_amount,
      customerName: updated?.customerName ?? null,
      customerEmail: updated?.customerEmail ?? null,
      addressSnapshot: updated?.addressSnapshot ?? null,
      itemCount: Array.isArray(updated?.items) ? (updated.items as unknown[]).length : null,
    });
  } catch (error) {
    console.error("Payment verify error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
