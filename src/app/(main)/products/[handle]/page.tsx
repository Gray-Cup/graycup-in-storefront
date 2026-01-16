import { getRegion } from "@lib/data/regions"
import ProductTemplate from "@modules/products/templates"

type Props = {
  params: Promise<{ handle: string }>
}

export async function generateStaticParams() {
  try {
    const products = await listProducts({
      queryParams: { fields: "handle" },
    }).then(({ response }) => response.products)

    return products
      .map((product) => ({
        handle: product.handle,
      }))
      .filter((param) => param.handle)
  } catch (error) {
    console.error(
      `Failed to generate static paths for product pages: ${
        error instanceof Error ? error.message : "Unknown error"
      }.`
    )
    return []
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params

  const { handle } = params
  const region = await getRegion()


@@ -48,36 +30,35 @@

  return {
    title: `${product.title} | Gray Cup`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Gray Cup`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage(props: Props) {
  const params = await props.params
  const region = await getRegion()

  if (!region) {
    notFound()
  }

  const pricedProduct = await listProducts({
    queryParams: { handle: params.handle },
  }).then(({ response }) => response.products[0])

  if (!pricedProduct) {
    notFound()
  }

  return (
    <ProductTemplate
      product={pricedProduct}
      region={region}
    />
  )
}
