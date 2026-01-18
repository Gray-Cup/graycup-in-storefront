import { Metadata } from "next"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Terms & Conditions | Gray Cup",
  description: "Read the terms and conditions governing your use of Gray Cup's website and services.",
}

export default function TermsAndConditions() {
  return (
    <div className="content-container py-12">
      <div className="max-w-4xl mx-auto">
        <Heading level="h1" className="text-3xl-semi mb-4">
          Terms & Conditions
        </Heading>
        <Text className="text-ui-fg-subtle mb-8">
          Last updated: January 2025
        </Text>

        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              1. Introduction
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                Welcome to Gray Cup. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website at graycup.in and any purchases made through our online store. By accessing or using our website, you agree to be bound by these Terms.
              </Text>
              <Text>
                Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you must not use our website or services.
              </Text>
            </div>
          </section>

          {/* Definitions */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              2. Definitions
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-ui-fg-base">&quot;Gray Cup,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;</strong> refers to Gray Cup and its parent company</li>
                <li><strong className="text-ui-fg-base">&quot;Website&quot;</strong> refers to graycup.in and all its subdomains</li>
                <li><strong className="text-ui-fg-base">&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;</strong> refers to any person accessing or using our website</li>
                <li><strong className="text-ui-fg-base">&quot;Products&quot;</strong> refers to all items available for purchase on our website</li>
                <li><strong className="text-ui-fg-base">&quot;Services&quot;</strong> refers to all services provided through our website</li>
                <li><strong className="text-ui-fg-base">&quot;Account&quot;</strong> refers to the user account created on our platform</li>
              </ul>
            </div>
          </section>

          {/* Account Registration */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              3. Account Registration
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                <strong className="text-ui-fg-base">3.1 Creating an Account</strong>
              </Text>
              <Text>
                To make purchases on Gray Cup, you may need to create an account. When registering, you agree to:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Keep your password secure and confidential</li>
                <li>Not share your account credentials with others</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">3.2 Account Security</strong>
              </Text>
              <Text>
                You are responsible for all activities that occur under your account. We use email and password authentication to secure your account. You can manage your account settings through your <LocalizedClientLink href="/account" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">account dashboard</LocalizedClientLink>.
              </Text>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">3.3 Account Termination</strong>
              </Text>
              <Text>
                We reserve the right to suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or for any other reason at our sole discretion.
              </Text>
            </div>
          </section>

          {/* Products and Pricing */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              4. Products and Pricing
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                <strong className="text-ui-fg-base">4.1 Product Information</strong>
              </Text>
              <Text>
                We strive to display product information accurately, including descriptions, images, and prices. However, we do not warrant that product descriptions or other content is accurate, complete, or error-free. Colors may appear differently on various screens.
              </Text>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">4.2 Pricing</strong>
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All prices are listed in Indian Rupees (INR) unless otherwise specified</li>
                <li>Prices are inclusive of applicable taxes unless stated otherwise</li>
                <li>We reserve the right to change prices at any time without prior notice</li>
                <li>Promotional prices are valid only during the specified promotion period</li>
              </ul>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">4.3 Product Availability</strong>
              </Text>
              <Text>
                Product availability is subject to change. If a product becomes unavailable after you place an order, we will notify you and offer alternatives or a full refund.
              </Text>
            </div>
          </section>

          {/* Orders and Payment */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              5. Orders and Payment
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                <strong className="text-ui-fg-base">5.1 Placing Orders</strong>
              </Text>
              <Text>
                When you place an order, you are making an offer to purchase. We reserve the right to accept or reject any order for any reason, including but not limited to product availability, pricing errors, or suspected fraud.
              </Text>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">5.2 Payment Methods</strong>
              </Text>
              <Text>
                We accept payments through Cashfree Payments, which supports:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Credit and Debit Cards (Visa, Mastercard, RuPay, etc.)</li>
                <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
                <li>Net Banking</li>
                <li>Digital Wallets</li>
              </ul>
              <Text className="mt-2">
                All payment transactions are processed securely through Cashfree&apos;s PCI-DSS compliant payment gateway.
              </Text>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">5.3 Order Confirmation</strong>
              </Text>
              <Text>
                After successful payment, you will receive an order confirmation email with your order details and tracking information (once shipped).
              </Text>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">5.4 Order Cancellation</strong>
              </Text>
              <Text>
                You may cancel your order before it is shipped by contacting us at <a href="mailto:support@graycup.in" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">support@graycup.in</a>. For more details, please see our <LocalizedClientLink href="/refunds-and-conditions" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">Refunds & Cancellations Policy</LocalizedClientLink>.
              </Text>
            </div>
          </section>

          {/* Shipping and Delivery */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              6. Shipping and Delivery
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                <strong className="text-ui-fg-base">6.1 Shipping Areas</strong>
              </Text>
              <Text>
                We currently ship to addresses within India. Delivery times vary based on location and shipping method selected.
              </Text>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">6.2 Delivery Times</strong>
              </Text>
              <Text>
                Estimated delivery times are provided at checkout and are not guaranteed. Delays may occur due to factors beyond our control, including weather, holidays, and courier issues.
              </Text>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">6.3 Risk of Loss</strong>
              </Text>
              <Text>
                Risk of loss and title for products pass to you upon delivery to the shipping carrier. However, we will assist with claims for lost or damaged shipments.
              </Text>
            </div>
          </section>

          {/* Returns and Refunds */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              7. Returns and Refunds
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                Our return and refund policy is detailed in our <LocalizedClientLink href="/refunds-and-conditions" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">Refunds & Cancellations</LocalizedClientLink> page. Key points include:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Returns accepted within 7 days of delivery for most products</li>
                <li>Products must be unused and in original packaging</li>
                <li>Refunds processed within 5-7 business days after receiving the return</li>
                <li>Refunds are issued through the original payment method (via Cashfree)</li>
              </ul>
              <Text className="mt-2">
                For refund requests, contact <a href="mailto:refunds@graycup.in" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">refunds@graycup.in</a>.
              </Text>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              8. Intellectual Property
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                <strong className="text-ui-fg-base">8.1 Our Content</strong>
              </Text>
              <Text>
                All content on this website, including but not limited to text, graphics, logos, images, product descriptions, and software, is the property of Gray Cup or its content suppliers and is protected by intellectual property laws.
              </Text>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">8.2 Limited License</strong>
              </Text>
              <Text>
                We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. You may not:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Scrape, crawl, or extract data from our website</li>
                <li>Use our website for any unlawful purpose</li>
              </ul>
            </div>
          </section>

          {/* User Conduct */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              9. User Conduct
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                When using our website, you agree not to:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Engage in fraudulent transactions</li>
                <li>Use automated systems to access our website without permission</li>
                <li>Upload malicious code or content</li>
              </ul>
            </div>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              10. Disclaimer of Warranties
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                Our website and products are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties regarding the accuracy or completeness of content</li>
                <li>Warranties that our website will be uninterrupted or error-free</li>
                <li>Warranties regarding the results obtained from using our products</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              11. Limitation of Liability
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                To the maximum extent permitted by law, Gray Cup shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or products, including but not limited to:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Loss of profits, revenue, or data</li>
                <li>Business interruption</li>
                <li>Procurement of substitute goods or services</li>
                <li>Personal injury or property damage</li>
              </ul>
              <Text className="mt-2">
                Our total liability shall not exceed the amount paid by you for the specific product or service giving rise to the claim.
              </Text>
            </div>
          </section>

          {/* Indemnification */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              12. Indemnification
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                You agree to indemnify, defend, and hold harmless Gray Cup, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of or related to:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your use of our website or products</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of third parties</li>
                <li>Your fraudulent or illegal activities</li>
              </ul>
            </div>
          </section>

          {/* Privacy */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              13. Privacy
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                Your privacy is important to us. Our collection and use of your personal information is governed by our <LocalizedClientLink href="/privacy-policy" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">Privacy Policy</LocalizedClientLink>, which is incorporated into these Terms by reference.
              </Text>
            </div>
          </section>

          {/* Third-Party Links */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              14. Third-Party Links
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                Our website may contain links to third-party websites, including our payment processor Cashfree. We are not responsible for the content, privacy practices, or terms of service of these third-party sites. We encourage you to review their policies before using their services.
              </Text>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              15. Modifications to Terms
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page with an updated &quot;Last updated&quot; date. Your continued use of our website after any changes constitutes acceptance of the modified Terms.
              </Text>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              16. Governing Law and Dispute Resolution
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                <strong className="text-ui-fg-base">16.1 Governing Law</strong>
              </Text>
              <Text>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </Text>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">16.2 Dispute Resolution</strong>
              </Text>
              <Text>
                Any disputes arising out of or related to these Terms or your use of our website shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in India, and the language of arbitration shall be English.
              </Text>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">16.3 Jurisdiction</strong>
              </Text>
              <Text>
                Subject to the arbitration clause above, the courts located in India shall have exclusive jurisdiction over any legal proceedings arising from these Terms.
              </Text>
            </div>
          </section>

          {/* Severability */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              17. Severability
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </Text>
            </div>
          </section>

          {/* Entire Agreement */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              18. Entire Agreement
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                These Terms, together with our Privacy Policy and Refunds & Cancellations Policy, constitute the entire agreement between you and Gray Cup regarding your use of our website and services, superseding any prior agreements.
              </Text>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t border-ui-border-base pt-8 mt-8">
            <Heading level="h2" className="text-xl-semi mb-4">
              19. Contact Information
            </Heading>
            <Text className="text-ui-fg-subtle mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </Text>
            <div className="flex flex-col gap-2 text-ui-fg-subtle">
              <div>
                <span className="text-ui-fg-base font-medium">Email: </span>
                <a
                  href="mailto:support@graycup.in"
                  className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                >
                  support@graycup.in
                </a>
              </div>
              <div>
                <span className="text-ui-fg-base font-medium">Website: </span>
                <a
                  href="https://graycup.org/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                >
                  graycup.org/contact
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
