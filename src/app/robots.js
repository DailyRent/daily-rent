import { documents } from "@/data/documents.data";
import { getDataForSeo } from "./sitemap";

const baseUrl = process.env.NEXT_PUBLIC_MAIN_URL;

export default async function robots() {
  const data = await Promise.resolve().then(() => getDataForSeo());

  const routes = [
    {
      name: "/",
    },
    {
      name: "/apartments/",
    },
    {
      name: "/documents/",
    },
    {
      name: "/rules/",
    },
    {
      name: "/contacts/",
    },
  ].map((route) => route.name);

  const apartmentsId = data?.map((el) => `/apartments/${el._id}/`);

  const pdfDocuments = documents?.map((el) => `/${el.seo}/`);

  return {
    rules: {
      userAgent: "*",
      allow: [...routes, ...apartmentsId, ...pdfDocuments],
      disallow: ["/api/", "/dashboard/"],
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
