'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './ApartItem.module.scss';
import { PaginationContext } from '@/context/PaginationContext';
import Pagination from '../share/Pagination/Pagination';

const ApartItem = ({ data }) => {
  const { firstIndex, lastIndex, recordsPerPage } =
    useContext(PaginationContext);
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <ul className={styles.containerOneRooms}>
        {records.map((item) => (
          <li key={item._id} className={styles.oneRooms}>
            <div className={styles.imgContainer}>
              <Image
                src={item.titleImg}
                alt="apartament"
                fill={true}
                className={styles.img}
                priority={true}
              />
              <span className={styles.codeImg}>45464564</span>
              {/* <span className={styles.codeImg}>{item.code}</span> */}
            </div>
            <p className={styles.addressRooms}>{item.address}</p>
            <p className={styles.priceRooms}>{item.price}$ нічь</p>
            <span className={styles.codeRooms}>45464564</span>
            {/* <span className={styles.codeRooms}>{item.code}</span> */}
            <button type="button" className={styles.btnRooms}>
              Детальніше
            </button>
          </li>
        ))}
      </ul>
      <Pagination numbers={numbers} />
    </>
  );
};

export default ApartItem;
