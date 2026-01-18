import { Metadata } from "next"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Refunds & Cancellations | Gray Cup",
  description: "Learn about Gray Cup's refund and cancellation policies for online purchases.",
}

export default function RefundsAndConditions() {
  return (
    <div className="content-container py-12">
      <div className="max-w-4xl mx-auto">
        <Heading level="h1" className="text-3xl-semi mb-4">
          Refunds & Cancellations
        </Heading>
        <Text className="text-ui-fg-subtle mb-8">
          Last updated: January 2025
        </Text>

        {/* Contact Information */}
        <div className="bg-ui-bg-subtle border border-ui-border-base rounded-lg p-6 mb-8">
          <Heading level="h2" className="text-xl-semi mb-3">
            Contact Us for Refunds
          </Heading>
          <Text className="text-ui-fg-subtle mb-4">
            For all refund and cancellation requests, please contact our dedicated team:
          </Text>
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-ui-fg-base font-medium">Refunds Team: </span>
              <a
                href="mailto:refunds@graycup.in"
                className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
              >
                refunds@graycup.in
              </a>
            </div>
            <div>
              <span className="text-ui-fg-base font-medium">General Support: </span>
              <a
                href="mailto:support@graycup.in"
                className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
              >
                support@graycup.in
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Cancellation Policy */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              1. Cancellation Policy
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                <strong className="text-ui-fg-base">Before Shipment:</strong> Orders can be cancelled free of charge before they are shipped. To cancel an order, please contact us at <a href="mailto:support@graycup.in" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">support@graycup.in</a> with your order number as soon as possible.
              </Text>
              <Text>
                <strong className="text-ui-fg-base">After Shipment:</strong> Once an order has been shipped, it cannot be cancelled. However, you may refuse delivery or return the product once received as per our return policy below.
              </Text>
              <Text>
                <strong className="text-ui-fg-base">Processing Time:</strong> Cancellation requests are typically processed within 24-48 hours. During high-volume periods, processing may take up to 72 hours.
              </Text>
            </div>
          </section>

          {/* Return Policy */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              2. Return Policy
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                We accept returns within <strong className="text-ui-fg-base">7 days</strong> of delivery for most products, subject to the following conditions:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Products must be unused, unopened, and in their original packaging</li>
                <li>Tea products with broken seals cannot be returned due to hygiene and quality reasons</li>
                <li>Customized or personalized orders are non-returnable</li>
                <li>Products damaged during transit are eligible for replacement or refund</li>
              </ul>
              <Text>
                To initiate a return, email us at <a href="mailto:refunds@graycup.in" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">refunds@graycup.in</a> with your order number and reason for return. We will provide return instructions within 2 business days.
              </Text>
            </div>
          </section>

          {/* Refund Policy */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              3. Refund Policy
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                <strong className="text-ui-fg-base">Refund Timeline:</strong> Once we receive and inspect your returned item, we will process your refund within <strong className="text-ui-fg-base">5-7 business days</strong>. The refund will be credited to your original payment method.
              </Text>
              <Text>
                <strong className="text-ui-fg-base">Refund Method:</strong> Refunds are processed through the same payment method used for the original purchase. This includes:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-ui-fg-base">Cashfree Payments:</strong> Refunds for orders paid via Cashfree (UPI, Net Banking, Cards, Wallets) will be initiated through Cashfree and credited to your account within 5-7 business days after processing.</li>
                <li><strong className="text-ui-fg-base">Credit/Debit Cards:</strong> Refunds may take an additional 5-10 business days to reflect in your account, depending on your bank.</li>
                <li><strong className="text-ui-fg-base">UPI & Wallets:</strong> Typically processed within 24-48 hours after we initiate the refund.</li>
              </ul>
              <Text>
                <strong className="text-ui-fg-base">Partial Refunds:</strong> In some cases, partial refunds may be granted for items that show signs of use or are not in their original condition.
              </Text>
            </div>
          </section>

          {/* Damaged or Defective Products */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              4. Damaged or Defective Products
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                If you receive a damaged or defective product, please contact us within <strong className="text-ui-fg-base">48 hours</strong> of delivery with:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your order number</li>
                <li>Clear photographs of the damaged product and packaging</li>
                <li>A brief description of the issue</li>
              </ul>
              <Text>
                We will arrange for a replacement or full refund at no additional cost to you. For damaged products, you may be asked to return the item or dispose of it as per our instructions.
              </Text>
            </div>
          </section>

          {/* Non-Refundable Items */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              5. Non-Refundable Items
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                The following items are not eligible for refunds:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gift cards and promotional codes</li>
                <li>Products purchased during clearance sales (unless defective)</li>
                <li>Items marked as &quot;Final Sale&quot; or &quot;Non-Returnable&quot;</li>
                <li>Products with broken seals or signs of use</li>
                <li>Customized or personalized orders</li>
              </ul>
            </div>
          </section>

          {/* Shipping Costs */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              6. Shipping Costs
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                <strong className="text-ui-fg-base">For Returns:</strong> Customers are responsible for return shipping costs unless the return is due to our error (wrong item, defective product, or damage during transit).
              </Text>
              <Text>
                <strong className="text-ui-fg-base">For Cancelled Orders:</strong> If an order is cancelled before shipment, any shipping charges paid will be fully refunded. If cancelled after shipment, shipping costs are non-refundable.
              </Text>
            </div>
          </section>

          {/* How to Request a Refund */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              7. How to Request a Refund
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                To request a refund, follow these steps:
              </Text>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Log in to your <LocalizedClientLink href="/account" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">Gray Cup account</LocalizedClientLink> and locate your order</li>
                <li>Note your order number and the items you wish to return</li>
                <li>Email <a href="mailto:refunds@graycup.in" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">refunds@graycup.in</a> with your order details and reason for refund</li>
                <li>Wait for our team to respond with return instructions (within 2 business days)</li>
                <li>Ship the item back as instructed (if applicable)</li>
                <li>Receive your refund once the return is processed</li>
              </ol>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t border-ui-border-base pt-8 mt-8">
            <Heading level="h2" className="text-xl-semi mb-4">
              Need Help?
            </Heading>
            <Text className="text-ui-fg-subtle mb-4">
              If you have any questions about our refund and cancellation policies, please don&apos;t hesitate to reach out:
            </Text>
            <div className="flex flex-col gap-2 text-ui-fg-subtle">
              <div>
                <span className="text-ui-fg-base font-medium">Refunds: </span>
                <a
                  href="mailto:refunds@graycup.in"
                  className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                >
                  refunds@graycup.in
                </a>
              </div>
              <div>
                <span className="text-ui-fg-base font-medium">Support: </span>
                <a
                  href="mailto:support@graycup.in"
                  className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                >
                  support@graycup.in
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
