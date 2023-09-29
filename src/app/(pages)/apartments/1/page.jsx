'use client';

import React, { useContext } from 'react';
import useSWR from 'swr';
import ApartItem from '@/components/ApartItem/ApartItem';
import { PaginationContext } from '@/context/PaginationContext';
import PaginationPage from '@/components/share/Pagination/PaginationPage';
import styles from './page.module.scss';

const OneRooms = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR('/api/apartments', fetcher);

  const { firstIndex, lastIndex, recordsPerPage } =
    useContext(PaginationContext);

  const roomsData = data?.filter((item) => item.roomsQuantity === '1');

  console.log(roomsData);

  const records = roomsData?.slice(firstIndex, lastIndex);
  const npage = roomsData ? Math.ceil(roomsData?.length / recordsPerPage) : 0;
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      {isLoading ? (
        <p className={styles.isLoading}>Loading...</p>
      ) : (
        <ul className={styles.containerOneRooms}>
          {records?.length > 0 ? (
            records?.map((item) => (
              <ApartItem
                key={item._id}
                titleImg={item.titleImg}
                code={item.code}
                address={item.address}
                prise={item.prise}
                objNumber={item.objNumber}
                rooms={1}
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
      {records?.length > 0 && !isLoading && (
        <PaginationPage numbers={numbers} npage={npage} />
      )}
    </>
  );
};

export default OneRooms;
