"use client"

import { placeOrder } from "@lib/data/cart"
import { Button, Container, Heading, Text } from "@medusajs/ui"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"

function PaymentCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<
    "processing" | "success" | "error" | "pending"
  >("processing")
  const [message, setMessage] = useState("Processing your payment...")
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    const completeOrder = async () => {
      try {
        // placeOrder will call cart.complete() which handles the redirect
        // If payment is captured (via webhook), order will be created
        await placeOrder()
        setStatus("success")
        setMessage("Payment successful! Redirecting to your order...")
      } catch (error: any) {
        console.error("Order completion error:", error)

        // Check if payment might still be pending (webhook hasn't arrived yet)
        if (retryCount < 3 && error.message?.includes("Payment")) {
          setStatus("pending")
          setMessage("Payment is being verified. Please wait...")

          // Retry after 3 seconds
          setTimeout(() => {
            setRetryCount((prev) => prev + 1)
          }, 3000)
        } else {
          setStatus("error")
          setMessage(
            error.message ||
              "Failed to complete your order. Please contact support if payment was deducted."
          )
        }
      }
    }

    completeOrder()
  }, [searchParams, retryCount])

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <Container className="max-w-md">
        {status === "processing" && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ui-fg-base mx-auto mb-6"></div>
            <Heading level="h2" className="mb-2">
              Processing Payment
            </Heading>
            <Text className="text-ui-fg-subtle">{message}</Text>
          </div>
        )}

        {status === "success" && (
          <div className="text-center py-12">
            <div className="text-green-500 text-5xl mb-6">&#10003;</div>
            <Heading level="h2" className="mb-2 text-green-600">
              Payment Successful
            </Heading>
            <Text className="text-ui-fg-subtle">{message}</Text>
          </div>
        )}

        {status === "pending" && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-6"></div>
            <Heading level="h2" className="mb-2 text-yellow-600">
              Verifying Payment
            </Heading>
            <Text className="text-ui-fg-subtle">{message}</Text>
            <Text className="text-ui-fg-muted text-sm mt-2">
              Attempt {retryCount + 1} of 3
            </Text>
          </div>
        )}

        {status === "error" && (
          <div className="text-center py-12">
            <div className="text-red-500 text-5xl mb-6">&#10007;</div>
            <Heading level="h2" className="mb-2 text-red-600">
              Payment Failed
            </Heading>
            <Text className="text-ui-fg-subtle mb-6">{message}</Text>
            <Button onClick={() => router.push("/checkout")} size="large">
              Try Again
            </Button>
          </div>
        )}
      </Container>
    </div>
  )
}

export default function PaymentCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <Container className="max-w-md">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ui-fg-base mx-auto mb-6"></div>
              <Heading level="h2" className="mb-2">
                Loading
              </Heading>
              <Text className="text-ui-fg-subtle">Please wait...</Text>
            </div>
          </Container>
        </div>
      }
    >
      <PaymentCallbackContent />
    </Suspense>
  )
}
