import { Metadata } from "next"
import { Heading, Text, Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Contact Us | Gray Cup",
  description: "Get in touch with Gray Cup for inquiries, bulk orders, and support.",
}

export default function ContactUs() {
  return (
    <div className="content-container py-12">
      <div className="max-w-4xl mx-auto">
        <Heading level="h1" className="text-3xl-semi mb-4">
          Contact Us
        </Heading>
        <Text className="text-ui-fg-subtle mb-8">
          We&apos;d love to hear from you. Reach out to us through any of the channels below.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Bulk Orders */}
          <div className="bg-ui-bg-subtle border border-ui-border-base rounded-lg p-6">
            <Heading level="h2" className="text-xl-semi mb-3">
              Bulk Orders
            </Heading>
            <Text className="text-ui-fg-subtle mb-4">
              Interested in placing bulk orders for your business, office, or event? Our bulk team is here to help you with customized pricing and delivery options.
            </Text>
            <a
              href="mailto:bulk@graycup.in"
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover font-medium"
            >
              bulk@graycup.in
            </a>
          </div>

          {/* Customer Support */}
          <div className="bg-ui-bg-subtle border border-ui-border-base rounded-lg p-6">
            <Heading level="h2" className="text-xl-semi mb-3">
              Customer Support
            </Heading>
            <Text className="text-ui-fg-subtle mb-4">
              For questions about your orders, shipping, products, or general inquiries, our support team is ready to assist you.
            </Text>
            <a
              href="mailto:support@graycup.in"
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover font-medium"
            >
              support@graycup.in
            </a>
          </div>

          {/* Refunds & Returns */}
          <div className="bg-ui-bg-subtle border border-ui-border-base rounded-lg p-6">
            <Heading level="h2" className="text-xl-semi mb-3">
              Refunds & Returns
            </Heading>
            <Text className="text-ui-fg-subtle mb-4">
              Need help with a refund or return? Our dedicated refunds team will process your request promptly.
            </Text>
            <a
              href="mailto:refunds@graycup.in"
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover font-medium"
            >
              refunds@graycup.in
            </a>
          </div>

          {/* Business Hours */}
          <div className="bg-ui-bg-subtle border border-ui-border-base rounded-lg p-6">
            <Heading level="h2" className="text-xl-semi mb-3">
              Business Hours
            </Heading>
            <Text className="text-ui-fg-subtle mb-2">
              Monday - Saturday: 9:00 AM - 6:00 PM IST
            </Text>
            <Text className="text-ui-fg-subtle">
              Sunday: Closed
            </Text>
          </div>
        </div>

        {/* Company Website Section */}
        <div className="border border-ui-border-base rounded-lg p-8 text-center bg-ui-bg-field">
          <Heading level="h2" className="text-xl-semi mb-3">
            More Ways to Connect
          </Heading>
          <Text className="text-ui-fg-subtle mb-6">
            Visit our company website for additional contact options, including our physical address, phone numbers, and a contact form.
          </Text>
          <a
            href="https://graycup.org/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="large">
              Visit graycup.org/contact
            </Button>
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-12 border-t border-ui-border-base pt-8">
          <Heading level="h3" className="text-lg-semi mb-4">
            Quick Links
          </Heading>
          <ul className="flex flex-wrap gap-6 text-ui-fg-subtle">
            <li>
              <LocalizedClientLink
                href="/refunds-and-conditions"
                className="hover:text-ui-fg-base"
              >
                Refunds & Cancellations
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/privacy-policy"
                className="hover:text-ui-fg-base"
              >
                Privacy Policy
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/terms-and-conditions"
                className="hover:text-ui-fg-base"
              >
                Terms & Conditions
              </LocalizedClientLink>
            </li>
            <li>
              <a
                href="https://b2b.graycup.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ui-fg-base"
              >
                Bulk Store (B2B)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
