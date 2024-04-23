import RulesComponent from "@/components/RulesComponent/RulesComponent";

export const metadata = {
  title: "Квартири подобово Daily Rent ⭐ оренда квартири Суми",
  description:
    "Оренда квартир подобово або погодинно Суми ⭐ Зняти квартиру на добу, день або ніч ✔️ Квартири подобово на Daily Rent",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}rules`,
  },
};

const RulesPage = () => {
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
          "@id": `${process.env.NEXT_PUBLIC_MAIN_URL}rules`,
          name: "Daily Rent Правила",
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
      <RulesComponent />
    </>
  );
};

export default RulesPage;
