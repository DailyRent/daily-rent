'use client';

import React, { useContext } from 'react';
import ApartItem from '@/components/ApartItem/ApartItem';
import { PaginationContext } from '@/context/PaginationContext';
import PaginationPage from '@/components/share/Pagination/PaginationPage';
import styles from './page.module.scss';
import { GetData } from '@/fetch/clientFetch';
import IsLoading from '@/components/share/IsLoading/IsLoading';

const OneRooms = () => {
  const { data, error, isLoading } = GetData();

  const { firstIndex, lastIndex, recordsPerPage } =
    useContext(PaginationContext);

  const roomsData = data?.filter((item) => item.roomsQuantity === '1');

  const records = roomsData?.slice(firstIndex, lastIndex);
  const npage = roomsData ? Math.ceil(roomsData?.length / recordsPerPage) : 0;
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
        <ul className={styles.containerOneRooms}>
          {records?.length > 0 ? (
            records?.map((item) => (
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
      {records?.length > 0 && !isLoading && (
        <PaginationPage numbers={numbers} npage={npage} />
      )}
    </>
  );
};

export default OneRooms;
