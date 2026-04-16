import { NextRequest, NextResponse } from "next/server";

const DELHIVERY_RATE_URL =
  "https://track.delhivery.com/api/kinko/v1/invoice/charges/.json";

export async function POST(request: NextRequest) {
  try {
    const { destinationPincode, weightGrams } = await request.json();

    if (!destinationPincode || !/^\d{6}$/.test(String(destinationPincode))) {
      return NextResponse.json(
        { error: "Valid 6-digit destination pincode required" },
        { status: 400 },
      );
    }

    // If Delhivery isn't configured fall back to a flat ₹60 charge
    if (!process.env.DELHIVERY_API_TOKEN) {
      console.warn("DELHIVERY_API_TOKEN not set – using fallback charge");
      return NextResponse.json({ charge: 60, estimatedDays: 5 });
    }

    const warehousePincode = process.env.DELHIVERY_WAREHOUSE_PINCODE ?? "110001";
    const weight = Math.max(Number(weightGrams) || 500, 1);

    const url = new URL(DELHIVERY_RATE_URL);
    url.searchParams.set("md", "E");           // Express
    url.searchParams.set("ss", "Delivered");
    url.searchParams.set("d_pin", String(destinationPincode));
    url.searchParams.set("o_pin", warehousePincode);
    url.searchParams.set("cgm", String(weight));
    url.searchParams.set("pt", "Pre-paid");
    url.searchParams.set("cod", "0");

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Token ${process.env.DELHIVERY_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Delhivery API error:", res.status, await res.text());
      return NextResponse.json({ charge: 60, estimatedDays: 5 });
    }

    const data = await res.json();
    const chargeData = data?.data?.[0];

    return NextResponse.json({
      charge: Math.ceil(chargeData?.total_amount ?? 60),
      estimatedDays: chargeData?.tat ?? 5,
    });
  } catch (error) {
    console.error("Delivery calc error:", error);
    // Graceful fallback so checkout is never blocked
    return NextResponse.json({ charge: 60, estimatedDays: 5 });
  }
}
