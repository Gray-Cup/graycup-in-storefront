import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const needsCartCookie =
    pathname.startsWith("/cart") ||
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/account")

  if (!needsCartCookie) {
    return NextResponse.next()
  }

  const response = NextResponse.next()

  const cacheIdCookie = request.cookies.get("_medusa_cache_id")

  if (!cacheIdCookie) {
    response.cookies.set("_medusa_cache_id", crypto.randomUUID(), {
      maxAge: 60 * 60 * 24,
    })
  }

  return response
}

export const config = {
  matcher: [
    "/cart/:path*",
    "/checkout/:path*",
    "/account/:path*",
  ],
}
