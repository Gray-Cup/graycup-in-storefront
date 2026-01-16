import { MetadataRoute } from "next"
import { listProducts } from "@lib/data/products"
import { listCollections } from "@lib/data/collections"
import { listCategories } from "@lib/data/categories"

export const revalidate = 60

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://graycup.in"

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/shipping-policy",
    "/returns",
    "/terms",
  ]

  const staticUrls = staticPages.map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.5,
  }))

  const products = await listProducts({
    queryParams: { fields: "handle" },
  }).then(({ response }) => response.products)

  const productUrls = products
    .filter(p => p.handle)
    .map(p => ({
      url: `${baseUrl}/products/${p.handle}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    }))

  const collections = await listCollections().then(
    ({ collections }) => collections
  )

  const collectionUrls = collections
    .filter(c => c.handle)
    .map(c => ({
      url: `${baseUrl}/collections/${c.handle}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))

  const categories = await listCategories()

  const categoryUrls = categories
    .filter(c => c.handle)
    .map(c => ({
      url: `${baseUrl}/categories/${c.handle}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))

  return [
    ...staticUrls,
    ...productUrls,
    ...collectionUrls,
    ...categoryUrls,
  ]
}
