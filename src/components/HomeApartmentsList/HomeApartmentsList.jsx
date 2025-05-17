'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { currentLanguages } from '@/data';
import { GetData } from '@/fetch/clientFetch';
import ApartItem from '../ApartItem/ApartItem';
import Loading from '@/app/loading';
import IsLoading from '../share/IsLoading/IsLoading';

import styles from './HomeApartmentsList.module.scss';

const HomeApartentsList = () => {
  const { data, error, isLoading } = GetData();
  const [loadedCount, setLoadedCount] = useState(12);
  const [showLoading, setShowLoading] = useState(false);
  const { t, i18n } = useTranslation();

  let sortedData = [];

  if (!isLoading) {
    sortedData = [...data];
    sortedData.sort((a, b) => {
      return Number(a.priority) - Number(b.priority);
    });
  }

  const loaderRef = useRef();

  const handleScroll = () => {
    if (!showLoading && data?.length) {
      const container = loaderRef.current;
      if (container) {
        const { bottom } = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (bottom < windowHeight + 100 && loadedCount < data?.length) {
          setShowLoading(true);

          setTimeout(() => {
            setLoadedCount((prev) => {
              const remaining = data.length - prev;
              return prev + Math.min(12, remaining);
            });
            setShowLoading(false);
          }, 500);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [data, loadedCount, showLoading]);

  return (
    <section className={styles.section}>
      <div className={`container`}>
        {!isLoading && (
          <h2 className={styles.title}>{t('Navigation.Apartments')}</h2>
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <ul className={styles.apartamentList} ref={loaderRef}>
            {sortedData?.slice(0, loadedCount).map((item) => (
              <ApartItem
                key={item._id}
                titleImg={item.titleImg}
                code={item.code}
                address={
                  i18n.language === currentLanguages.EN
                    ? item.addressEn
                    : item.address
                }
                price={item.price}
                objNumber={item.objNumber}
                roomsQuantity={item.roomsQuantity}
                id={item._id}
                bedsQuantity={item.bedsQuantity}
              />
            ))}
          </ul>
        )}
        <div ref={loaderRef} className={styles.loading}>
          {showLoading && <IsLoading />}
        </div>
      </div>
    </section>
  );
};

export default HomeApartentsList;
