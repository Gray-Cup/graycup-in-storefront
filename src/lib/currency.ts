// Currency system - INR only
export type CurrencyConfig = {
  code: string;
  symbol: string;
  name: string;
  locale: string;
};

export const CURRENCY: CurrencyConfig = {
  code: "INR",
  symbol: "₹",
  name: "Indian Rupee",
  locale: "en-IN",
};

export function formatPrice(price: number): string {
  return new Intl.NumberFormat(CURRENCY.locale, {
    style: "currency",
    currency: CURRENCY.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPriceRange(min: number, max: number): string {
  return `${CURRENCY.symbol}${Math.round(min)} - ${CURRENCY.symbol}${Math.round(max)}`;
}
