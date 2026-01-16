const blockedPaths = [
  "/api/*",
  "/store/*",
  "/admin/*",
  "/auth/*",
  "/cart",
  "/checkout",
  "/orders",
  "/account",
  "/customers",
  "/*?*",
]

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://graycup.in",
  generateRobotsTxt: true,

  exclude: blockedPaths,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: blockedPaths,
      },
    ],
    sitemap: "https://graycup.in/sitemap.xml",
  },
}
