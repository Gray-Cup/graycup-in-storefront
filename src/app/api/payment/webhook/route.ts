import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { order } from "@/lib/schema";
import { eq } from "drizzle-orm";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const timestamp = request.headers.get("x-webhook-timestamp");
    const receivedSig = request.headers.get("x-webhook-signature");
    const rawBody = await request.text();

    // ── Verify Cashfree signature ──────────────────────────────────────────
    if (timestamp && receivedSig && process.env.CASHFREE_CLIENT_SECRET) {
      const expectedSig = crypto
        .createHmac("sha256", process.env.CASHFREE_CLIENT_SECRET)
        .update(timestamp + rawBody)
        .digest("base64");

      if (expectedSig !== receivedSig) {
        console.warn("Webhook signature mismatch");
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    }

    const event = JSON.parse(rawBody);
    const eventType: string = event.type;
    const orderData = event.data?.order as { order_id?: string } | undefined;

    if (!orderData?.order_id) {
      return NextResponse.json({ received: true });
    }

    const cfOrderId = orderData.order_id;

    if (eventType === "PAYMENT_SUCCESS_WEBHOOK") {
      await db
        .update(order)
        .set({
          paymentStatus: "paid",
          cashfreePaymentId:
            event.data?.payment?.cf_payment_id?.toString() ?? null,
          updatedAt: new Date(),
        })
        .where(eq(order.cashfreeOrderId, cfOrderId));
    } else if (
      eventType === "PAYMENT_FAILED_WEBHOOK" ||
      eventType === "PAYMENT_USER_DROPPED_WEBHOOK"
    ) {
      await db
        .update(order)
        .set({ paymentStatus: "failed", updatedAt: new Date() })
        .where(eq(order.cashfreeOrderId, cfOrderId));
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    // Always return 200 to Cashfree so it doesn't keep retrying on parse errors
    return NextResponse.json({ received: true });
  }
}
