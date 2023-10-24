'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { GetData } from '@/fetch/clientFetch';
import ApartItem from '@/components/ApartItem/ApartItem';
import IsLoading from '@/components/share/IsLoading/IsLoading';
import ButtonFilter from '@/components/share/ButtonFilter/ButtonFilter';
import Link from 'next/link';
import FilterRooms from '@/components/FilterRooms/FilterRooms';

const Apartments = () => {
  const { data, error, isLoading } = GetData();

  return (
    <section className={styles.container}>
      <div className={styles.filterContainer}>
        <div className={styles.backContainer}>
          <p className="textLink">
            <Link href="/" className="textLinkAnimation">
              Головна
            </Link>
            / <span className={styles.active}>Апартаменти</span>
          </p>
        </div>
        <ButtonFilter />
      </div>
      <FilterRooms />
      {isLoading ? (
        <IsLoading />
      ) : (
        <ul className={styles.containerOneRooms}>
          {data?.length > 0 ? (
            data?.map((item) => (
              <ApartItem
                key={item._id}
                titleImg={item.titleImg}
                code={item.code}
                address={item.address}
                price={item.price}
                objNumber={item.objNumber}
                roomsQuantity={item.roomsQuantity}
                id={item._id}
              />
            ))
          ) : (
            <div className={styles.notFoundText}>
              <p>Однокімнатних квартир не знайдено</p>
            </div>
          )}
        </ul>
      )}
    </section>
  );
};

export default Apartments;
