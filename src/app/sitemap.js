// import { getData } from "@/fetch/serverFetch";
import { documents } from "@/data/documents.data";

const baseUrl = process.env.NEXT_PUBLIC_MAIN_URL;

export const getDataForSeo = async () => {
  try {
    const res = await fetch(`${baseUrl}api/apartments`, {
      cache: "no-store",
    });
    // console.log("getData", res);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   // const repo = await getDataForSeo();
//   const res = await fetch(`${baseUrl}api/apartments`);
//   console.log("🚀 ~ res:", res);
//   const repo = await res.json();
//   console.log("🚀 ~ repo:", repo);
//   // Pass data to the page via props
//   return { props: { repo } };
// }

// export async function getServerSideProps({ res }) {
//   const response = await fetch(`${baseUrl}api/apartments`);
//   console.log("🚀 ~ response:", response);
//   const posts = await response.json();
//   console.log("🚀 ~ posts:", posts);

//   const sitemapXML = sitemap(posts);

//   res.setHeader("Content-Type", "text/xml");
//   res.statusCode = 200;

//   // Write the sitemap XML to the response
//   res.write(sitemapXML);

//   // End the response
//   res.end();
// }

export default async function sitemap() {
  // console.log("🚀 ~ posts:", posts);
  const data = await Promise.resolve().then(() => getDataForSeo());
  // const data = await Promise.resolve().then(() => getDataForSeo());
  // console.log("🚀 ~ data:", data);
  // const data = await getDataForSeo({}).then((collections) =>
  //   collections?.map((collection) => ({
  //     url: `${baseUrl}apartments/${collection._id}`,
  //     lastModified: new Date(collection.updatedAt).toISOString(),
  //     changeFrequency: "monthly",
  //     priority: 0.5,
  //   }))
  // );
  // console.log("🚀 ~ data:", data);

  const apartmentsId = data?.map((el) => ({
    url: `${baseUrl}apartments/${el._id}`,
    lastModified: new Date(el.updatedAt).toISOString(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));
  // console.log("🚀 ~ apartmentsId:", apartmentsId);

  const routes = [
    {
      name: "",
      priority: 1,
    },
    {
      name: "apartments",
      priority: 0.8,
    },
    {
      name: "documents",
      priority: 0.8,
    },
    {
      name: "rules",
      priority: 0.8,
    },
    {
      name: "contacts",
      priority: 0.8,
    },
  ].map((route) => ({
    url: `${baseUrl}${route.name}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));

  const pdfDocuments = documents?.map((el) => ({
    url: `${baseUrl}${el.seo}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.25,
  }));

  return [...routes, ...apartmentsId, ...pdfDocuments];
}

// ! After

// const baseUrl = "http://localhost:3000/";

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`${baseUrl}api/apartments`);
//   const repo = await res.json();
//   console.log("🚀 ~ repo:", repo);
//   // Pass data to the page via props
//   return { props: { repo } };
// }

// export default function sitemap({ repo }) {
//   console.log("🚀 ~ repo:", repo);

//   const apartmentsId =
//     data &&
//     data?.map((el) => ({
//       url: `${baseUrl}apartments/${el._id}`,
//       lastModified: new Date(el.updatedAt).toISOString(),
//       changeFrequency: "monthly",
//       priority: 0.5,
//     }));
//   // console.log("🚀 ~ apartmentsId:", apartmentsId);

//   const routes = [
//     {
//       name: "",
//       priority: 1,
//     },
//     {
//       name: "apartments",
//       priority: 0.8,
//     },
//     {
//       name: "documents",
//       priority: 0.8,
//     },
//     {
//       name: "rules",
//       priority: 0.8,
//     },
//     {
//       name: "contacts",
//       priority: 0.8,
//     },
//   ].map((route) => ({
//     url: `${baseUrl}${route.name}`,
//     lastModified: new Date().toISOString(),
//     changeFrequency: "monthly",
//     priority: route.priority,
//   }));

//   const pdfDocuments = documents?.map((el) => ({
//     url: `${baseUrl}${el.seo}`,
//     lastModified: new Date().toISOString(),
//     changeFrequency: "monthly",
//     priority: 0.25,
//   }));

//   return [...routes, ...apartmentsId, ...pdfDocuments];
// }
