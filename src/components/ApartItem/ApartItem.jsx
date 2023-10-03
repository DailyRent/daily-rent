'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './ApartItem.module.scss';
import Link from 'next/link';

const ApartItem = ({
  titleImg,
  address,
  price,
  objNumber,
  roomsQuantity,
  id,
}) => {
  return (
    <>
      <li className={styles.oneRooms}>
        <Link href={`/apartments/${roomsQuantity}/${id}`}>
          <div className={styles.imgContainer}>
            <Image
              src={titleImg}
              alt="apartament"
              fill={true}
              className={styles.img}
              priority
              sizes="(max-width: 768px) 324px, (max-width: 1440px) 300px"
            />
            <span className={styles.codeImg}>{objNumber}</span>
          </div>
        </Link>
        <p className={styles.addressRooms}>{address}</p>
        <p className={styles.priceRooms}>{price}₴ нічь</p>
        {/* <span className={styles.codeRooms}>{objNumber}</span> */}
        <Link
          href={`/apartments/${roomsQuantity}/${id}`}
          className={styles.btnRooms}
        >
          Детальніше
        </Link>
      </li>
    </>
  );
};

export default ApartItem;
