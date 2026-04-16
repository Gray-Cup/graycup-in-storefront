declare module "@cashfreepayments/cashfree-js" {
  interface CheckoutOptions {
    paymentSessionId: string;
    redirectTarget?: "_self" | "_blank" | "_modal";
  }

  interface CashfreeInstance {
    checkout(options: CheckoutOptions): Promise<void>;
  }

  interface LoadOptions {
    mode: "sandbox" | "production";
  }

  export function load(options: LoadOptions): Promise<CashfreeInstance>;
}
