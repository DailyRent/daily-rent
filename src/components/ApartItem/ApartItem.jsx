'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ApartItem.module.scss';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';

const ApartItem = ({
  titleImg,
  address,
  price,
  objNumber,
  roomsQuantity,
  id,
  bedsQuantity,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <li className={styles.oneRooms}>
        <Link href={`/apartments/${id}`}>
          <figure className={styles.imgContainer}>
            <CldImage
              src={titleImg}
              alt="apartment"
              fill
              className={styles.img}
              priority
              sizes="(max-width: 768px) 324px, (max-width: 1440px) 300px"
            />
            <figcaption className={styles.codeImg}>{objNumber}</figcaption>
          </figure>
        </Link>
        <div className={styles.apartContent}>
          <p className={styles.addressRooms}>
            {roomsQuantity}
            {t('ApartmentsPage.TextOfDescAdress')}:
          </p>
          <p className={styles.addressRooms}>{address}</p>
        </div>
        <div className={styles.bottomContainer}>
          <p className={styles.priceRooms}>{price} ₴</p>
          <div className={styles.bedContainer}>
            <p className={styles.bedsQuantity}>{bedsQuantity}</p>
            <figure className={styles.bedImg}>
              <Image src="/webp/Bed7.webp" fill alt="кількість спальних міст" />
            </figure>
          </div>
          <Link href={`/apartments/${id}`} className={styles.btnRooms}>
            {t('Buttons.CardDetailsBtn')}
          </Link>
        </div>
      </li>
    </>
  );
};

export default ApartItem;
