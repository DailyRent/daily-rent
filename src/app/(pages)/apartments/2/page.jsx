'use client';

import React, { useContext } from 'react';
import ApartItem from '@/components/ApartItem/ApartItem';
import PaginationPage from '@/components/share/Pagination/PaginationPage';
import { PaginationContext } from '@/context/PaginationContext';
import styles from './page.module.scss';
import { GetData } from '@/fetch/clientFetch';
import IsLoading from '@/components/share/IsLoading/IsLoading';

const TwoRooms = () => {
  const { data, error, isLoading } = GetData();

  const roomsData = data?.filter((item) => item.roomsQuantity === '2');

  const { firstIndex, lastIndex, recordsPerPage } =
    useContext(PaginationContext);

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
                prise={item.prise}
                objNumber={item.objNumber}
                roomsQuantity={item.roomsQuantity}
                id={item._id}
              />
            ))
          ) : (
            <div className={styles.notFoundText}>
              <p>Двокімнатних квартир не знайдено</p>
            </div>
          )}
        </ul>
      )}
      {records?.length > 0 && (
        <PaginationPage numbers={numbers} npage={npage} />
      )}
    </>
  );
};

export default TwoRooms;
