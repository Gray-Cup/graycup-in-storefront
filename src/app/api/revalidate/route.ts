import { revalidateTag, revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

const KNOWN_TAGS = [
  "products",
  "collections",
  "categories",
  "regions",
  "orders",
  "payment_providers",
]

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret")

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: "Invalid revalidation secret" },
      { status: 401 }
    )
  }

  const body = await request.json()
  const { tags, paths, all } = body

  if (!tags?.length && !paths?.length && !all) {
    return NextResponse.json(
      { error: "Provide tags, paths, or set all: true" },
      { status: 400 }
    )
  }

  const revalidatedTags: string[] = []
  const revalidatedPaths: string[] = []

  if (all) {
    for (const tag of KNOWN_TAGS) {
      revalidateTag(tag)
      revalidatedTags.push(tag)
    }
  }

  if (tags?.length) {
    for (const tag of tags) {
      revalidateTag(tag)
      revalidatedTags.push(tag)
    }
  }

  if (paths?.length) {
    for (const path of paths) {
      revalidatePath(path)
      revalidatedPaths.push(path)
    }
  }

  return NextResponse.json({
    revalidated: true,
    tags: revalidatedTags,
    paths: revalidatedPaths,
    timestamp: new Date().toISOString(),
  })
}
