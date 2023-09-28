'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './ApartItem.module.scss';
import { PaginationContext } from '@/context/PaginationContext';
import Pagination from '../share/Pagination/PaginationPage';
import Link from 'next/link';

const ApartItem = ({ titleImg, address, price, objNumber, rooms, id }) => {
  return (
    <>
      <li className={styles.oneRooms}>
        <div className={styles.imgContainer}>
          <Image
            src={titleImg}
            alt="apartament"
            fill={true}
            className={styles.img}
            priority={true}
          />
          <span className={styles.codeImg}>{objNumber}</span>
        </div>
        <p className={styles.addressRooms}>{address}</p>
        <p className={styles.priceRooms}>{price}$ нічь</p>
        <span className={styles.codeRooms}>{objNumber}</span>
        {/* <button type="button" className={styles.btnRooms}>
          Детальніше
        </button> */}
        <Link href={`/apartments/${rooms}/${id}`} className={styles.btnRooms}>
          Детальніше
        </Link>
      </li>
    </>
  );
};

export default ApartItem;
