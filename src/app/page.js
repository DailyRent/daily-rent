import Hero from "@/components/Hero/Hero";
// import HomeSlider from "@/components/HomeSlider/HomeSlider";
import dynamic from "next/dynamic";

const DynamicHomeSlider = dynamic(() =>
  import("@/components/HomeSlider/HomeSlider")
);

export default function Home() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": process.env.NEXT_PUBLIC_MAIN_URL,
        name: "Daily Rent - оренда квартири Суми. Квартири подобово.",
      },
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* <h1>Home Page</h1> */}
      <Hero />
      <DynamicHomeSlider />
    </>
  );
}
