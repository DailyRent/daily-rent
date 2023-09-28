'use client';

import React, { useContext } from 'react';
import useSWR from 'swr';
import ApartItem from '@/components/ApartItem/ApartItem';
import PaginationPage from '@/components/share/Pagination/PaginationPage';
import { PaginationContext } from '@/context/PaginationContext';
import styles from './page.module.scss';

const TwoRooms = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR('/api/apartments', fetcher);

  const roomsData = data?.filter((item) => item.roomsQuantity === '2');

  const { firstIndex, lastIndex, recordsPerPage } =
    useContext(PaginationContext);

  const records = roomsData?.slice(firstIndex, lastIndex);
  const npage = roomsData ? Math.ceil(roomsData?.length / recordsPerPage) : 0;
  const numbers = [...Array(npage + 1).keys()].slice(1);
  return (
    <>
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
              rooms={2}
              id={item._id}
            />
          ))
        ) : (
          <div className={styles.notFoundText}>
            <p>Двокімнатних квартир не знайдено</p>
          </div>
        )}
      </ul>
      {records?.length > 0 && (
        <PaginationPage numbers={numbers} npage={npage} />
      )}
    </>
  );
};

export default TwoRooms;
