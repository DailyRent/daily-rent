'use client';

import React from 'react';
import useSWR from 'swr';
import ApartIdItem from '@/components/ApartIdItem/ApartIdItem';
// import styles from './page.module.scss';

const ApartId = ({ params }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/apartments/${params.id}`,
    fetcher
  );

  const dataId = data && !isLoading ? data : error;

  return <ApartIdItem dataId={dataId} error={error} isLoading={isLoading} />;
};

export default ApartId;

// 'use client';

// import React from 'react';
// import styles from './page.module.scss';

// const ApartId = () => {
//   return <div className={styles.container}>ApartId</div>;
// };

// export default ApartId;
