"use client";

import { CURRENCY } from "@/lib/currency";

type PriceDisplayProps = {
  minPrice: number;
  maxPrice: number;
  unit: string;
};

export function PriceDisplay({ minPrice, maxPrice, unit }: PriceDisplayProps) {
  return (
    <>
      {CURRENCY.symbol}
      {minPrice.toLocaleString(CURRENCY.locale)} - {CURRENCY.symbol}
      {maxPrice.toLocaleString(CURRENCY.locale)}{" "}
      <span className="text-sm font-normal text-muted-foreground">{unit}</span>
    </>
  );
}
