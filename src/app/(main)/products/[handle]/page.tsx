import { Metadata } from "next"
import { notFound } from "next/navigation"
import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductTemplate from "@modules/products/templates"

export const revalidate = 60

type Props = {
  params: { handle: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { handle } = params
  const region = await getRegion()

  if (!region) {
    notFound()
  }

  const product = await listProducts({
    queryParams: { handle },
  }).then(({ response }) => response.products[0])

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Gray Cup`,
    description: product.title,
    openGraph: {
      title: `${product.title} | Gray Cup`,
      description: product.title,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const region = await getRegion()

  if (!region) {
    notFound()
  }

  const product = await listProducts({
    queryParams: { handle: params.handle },
  }).then(({ response }) => response.products[0])

  if (!product) {
    notFound()
  }

  return (
    <ProductTemplate
      product={product}
      region={region}
    />
  )
}
