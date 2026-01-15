"use client"

import { placeOrder } from "@lib/data/cart"
import { Button, Container, Heading, Text } from "@medusajs/ui"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function PaymentCallbackPage() {
  const router = useRouter()
  const [status, setStatus] = useState<"processing" | "success" | "error">(
    "processing"
  )
  const [message, setMessage] = useState("Processing your payment...")

  useEffect(() => {
    const completeOrder = async () => {
      try {
        await placeOrder()
        setStatus("success")
        setMessage("Payment successful! Redirecting to your order...")
      } catch (error: any) {
        console.error("Order completion error:", error)
        setStatus("error")
        setMessage(error.message || "Failed to complete your order")
      }
    }

    completeOrder()
  }, [])

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
