// "use client";

import React from "react";
// import useSWR from "swr";
import ApartIdItem from "@/components/ApartIdItem/ApartIdItem";
import { getMetaById } from "@/fetch/serverFetch";
// import styles from './page.module.scss';

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
    description: `Зняти квартиру в місті Суми за адресою ${product.address}`,
    openGraph: {
      images: [product.titleImg, ...previousImages],
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

const ApartId = ({ params }) => {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   `/api/apartments/${params.id}`,
  //   fetcher
  // );

  // const dataId = data && !isLoading ? data : error;

  return (
    <ApartIdItem
      // dataId={dataId}
      // error={error}
      // isLoading={isLoading}
      // meta={data}
      params={params}
    />
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
