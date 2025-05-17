import Hero from '@/components/Hero/Hero';
import dynamic from 'next/dynamic';

const DynamicHomeSlider = dynamic(() =>
  import('@/components/HomeSlider/HomeSlider')
);

const DynamicHomeApartmentsList = dynamic(() =>
  import('@/components/HomeApartmentsList/HomeApartmentsList')
);

export default function Home() {
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@id': process.env.NEXT_PUBLIC_MAIN_URL,
        name: 'Daily Rent - оренда квартири Суми. Квартири подобово.',
      },
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <DynamicHomeSlider />
      <DynamicHomeApartmentsList />
    </>
  );
}
