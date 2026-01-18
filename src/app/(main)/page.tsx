import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://graycup.in"),

  title: "Drink with Gray Cup | Online Store",
  description:
    "Premium Indian tea, coffee, and matcha—sourced for flavour, crafted for everyday ritual.",

  // Favicons (legacy + modern)
  icons: {
    icon: [
      { url: "/favicon.ico" },

      {
        url: "/icon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],

    // iOS / Apple
    apple: [
      {
        url: "/favicon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Drink with Gray Cup | Online Store",
    description:
      "Premium Indian tea, coffee, and matcha—sourced for flavour, crafted for everyday ritual.",
    url: "https://graycup.in",
    siteName: "Gray Cup",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Gray Cup – Premium Indian Tea, Coffee & Matcha",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Drink with Gray Cup | Online Store",
    description:
      "Premium Indian tea, coffee, and matcha—sourced for flavour, crafted for everyday ritual.",
    images: ["/opengraph-image.png"],
  },
};

export default async function Home() {
  const region = await getRegion()

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
