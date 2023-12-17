export default async function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN_URL;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard/"],
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
