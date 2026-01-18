import { Metadata } from "next"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Privacy Policy | Gray Cup",
  description: "Learn how Gray Cup collects, uses, and protects your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="content-container py-12">
      <div className="max-w-4xl mx-auto">
        <Heading level="h1" className="text-3xl-semi mb-4">
          Privacy Policy
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
                Gray Cup (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at graycup.in and make purchases through our online store.
              </Text>
              <Text>
                By using our website and services, you consent to the data practices described in this policy. If you do not agree with this policy, please do not use our website or services.
              </Text>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              2. Information We Collect
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                <strong className="text-ui-fg-base">2.1 Account Information</strong>
              </Text>
              <Text>
                When you create an account on Gray Cup, we collect:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email address (used for login and communication)</li>
                <li>Password (stored securely using industry-standard encryption)</li>
                <li>Full name</li>
                <li>Phone number</li>
                <li>Shipping and billing addresses</li>
              </ul>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">2.2 Order Information</strong>
              </Text>
              <Text>
                When you make a purchase, we collect:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Products ordered and quantities</li>
                <li>Shipping address and delivery preferences</li>
                <li>Order history and transaction details</li>
                <li>Communication related to your orders</li>
              </ul>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">2.3 Payment Information</strong>
              </Text>
              <Text>
                We use <strong>Cashfree Payments</strong> as our payment gateway. When you make a payment:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment details (card numbers, UPI IDs, net banking credentials) are processed directly by Cashfree and are <strong>never stored on our servers</strong></li>
                <li>We only receive transaction confirmation, payment status, and a reference ID from Cashfree</li>
                <li>Cashfree is PCI-DSS compliant and uses bank-grade security for all transactions</li>
                <li>For more information, please refer to <a href="https://www.cashfree.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">Cashfree&apos;s Privacy Policy</a></li>
              </ul>

              <Text className="mt-4">
                <strong className="text-ui-fg-base">2.4 Automatically Collected Information</strong>
              </Text>
              <Text>
                When you browse our website, we may automatically collect:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website or source</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              3. How We Use Your Information
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                We use the information we collect for the following purposes:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-ui-fg-base">Order Fulfillment:</strong> To process, ship, and deliver your orders</li>
                <li><strong className="text-ui-fg-base">Account Management:</strong> To create and manage your Gray Cup account</li>
                <li><strong className="text-ui-fg-base">Customer Support:</strong> To respond to your inquiries and provide assistance</li>
                <li><strong className="text-ui-fg-base">Communication:</strong> To send order confirmations, shipping updates, and important notices</li>
                <li><strong className="text-ui-fg-base">Marketing:</strong> To send promotional offers and newsletters (with your consent)</li>
                <li><strong className="text-ui-fg-base">Improvement:</strong> To analyze usage patterns and improve our website and services</li>
                <li><strong className="text-ui-fg-base">Security:</strong> To detect and prevent fraud, unauthorized access, and other illegal activities</li>
                <li><strong className="text-ui-fg-base">Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              4. Information Sharing and Disclosure
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-ui-fg-base">Payment Processing:</strong> With Cashfree Payments to process your transactions securely</li>
                <li><strong className="text-ui-fg-base">Shipping Partners:</strong> With courier and logistics companies to deliver your orders</li>
                <li><strong className="text-ui-fg-base">Service Providers:</strong> With third-party vendors who assist us in operating our website and business (e.g., hosting, analytics)</li>
                <li><strong className="text-ui-fg-base">Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong className="text-ui-fg-base">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong className="text-ui-fg-base">Consent:</strong> When you have given explicit consent for sharing</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              5. Data Security
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                We implement appropriate technical and organizational measures to protect your personal information:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL/TLS encryption for all data transmitted to and from our website</li>
                <li>Secure password hashing for account credentials</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Limited access to personal data on a need-to-know basis</li>
                <li>PCI-DSS compliant payment processing through Cashfree</li>
              </ul>
              <Text>
                While we strive to protect your information, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.
              </Text>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              6. Your Rights and Choices
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                You have the following rights regarding your personal information:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-ui-fg-base">Access:</strong> You can access and view your account information by logging into your <LocalizedClientLink href="/account" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">Gray Cup account</LocalizedClientLink></li>
                <li><strong className="text-ui-fg-base">Update:</strong> You can update your profile, addresses, and preferences through your account settings</li>
                <li><strong className="text-ui-fg-base">Delete:</strong> You can request deletion of your account by contacting us at <a href="mailto:support@graycup.in" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">support@graycup.in</a></li>
                <li><strong className="text-ui-fg-base">Opt-out:</strong> You can unsubscribe from marketing emails using the link provided in each email</li>
                <li><strong className="text-ui-fg-base">Data Portability:</strong> You can request a copy of your data in a machine-readable format</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              7. Cookies and Tracking Technologies
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                We use cookies and similar technologies to:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Keep you signed in to your account</li>
                <li>Remember your cart items and preferences</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website performance and user experience</li>
              </ul>
              <Text>
                You can control cookie settings through your browser. However, disabling cookies may affect some functionality of our website.
              </Text>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              8. Third-Party Services
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                Our website integrates with the following third-party services:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-ui-fg-base">Cashfree Payments:</strong> For secure payment processing. <a href="https://www.cashfree.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">View Cashfree Privacy Policy</a></li>
                <li><strong className="text-ui-fg-base">Shipping Partners:</strong> For order delivery and tracking</li>
                <li><strong className="text-ui-fg-base">Analytics Services:</strong> For website usage analysis</li>
              </ul>
              <Text>
                These services have their own privacy policies, and we encourage you to review them.
              </Text>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              9. Data Retention
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                We retain your personal information for as long as necessary to:
              </Text>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintain your account and provide services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Support business operations and analytics</li>
              </ul>
              <Text>
                Order and transaction records are retained for a minimum of 8 years as required by Indian tax and accounting laws.
              </Text>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              10. Children&apos;s Privacy
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately at <a href="mailto:support@graycup.in" className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover">support@graycup.in</a>.
              </Text>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <Heading level="h2" className="text-2xl-semi mb-4">
              11. Changes to This Policy
            </Heading>
            <div className="space-y-4 text-ui-fg-subtle">
              <Text>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
              </Text>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t border-ui-border-base pt-8 mt-8">
            <Heading level="h2" className="text-xl-semi mb-4">
              12. Contact Us
            </Heading>
            <Text className="text-ui-fg-subtle mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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
