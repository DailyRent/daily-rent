import React from "react";
import ApartIdItem from "@/components/ApartIdItem/ApartIdItem";
import { getMetaById } from "@/fetch/serverFetch";

export async function generateMetadata({ params, searchParams }, parent) {
  // console.log("🚀 ~ parent:", await parent);
  // read route params
  const id = params.id;

  // fetch data
  const product = await getMetaById(id);
  // console.log("🚀 ~ product:", product);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  // console.log("🚀 ~ previousImages:", previousImages);

  return {
    title: `Квартири подобово Daily Rent - оренда квартири Суми.`,
    description: `Зняти квартиру в місті Суми за адресою ${product?.address}`,
    openGraph: {
      images: [product?.titleImg, ...previousImages],
      type: "website",
      title: "Daily Rent - оренда квартири Суми. Квартири подобово.",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}apartments/${id}`,
      description:
        "Суми квартири ⭐ Зняти квартиру Суми ✔️ Оренда квартири Суми 🔑 Квартири подобово 📅 Квартири на день",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}apartments/${id}`,
    },
  };
}

const ApartId = async ({ params }) => {
  const apartment = await getMetaById(params.id);

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": process.env.NEXT_PUBLIC_MAIN_URL,
          name: "Daily Rent - оренда квартири Суми. Квартири подобово.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}apartments`,
          name: "Daily Rent Квартири",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}apartments/${apartment?._id}`,
          name: "Daily Rent Оренда квартир детальніше",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApartIdItem params={params} />
    </>
  );
};

export default ApartId;

// 'use client';

// import React from 'react';
// import styles from './page.module.scss';

// const ApartId = () => {
//   return <div className={styles.container}>ApartId</div>;
// };

// export default ApartId;
