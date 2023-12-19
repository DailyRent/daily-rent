"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from "./ApartItem.module.scss";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const ApartItem = ({
  titleImg,
  address,
  price,
  objNumber,
  roomsQuantity,
  bedsQuantity,
  id,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <li className={styles.oneRooms}>
        <Link href={`/apartments/${id}`}>
          {/* <Link href={`/oldApartments/${roomsQuantity}/${id}`}> */}
          <div className={styles.imgContainer}>
            {/* <Image
              src={titleImg}
              alt="apartament"
              fill={true}
              className={styles.img}
              priority
              sizes="(max-width: 768px) 324px, (max-width: 1440px) 300px"
            /> */}
            <CldImage
              src={titleImg}
              alt="apartment"
              fill
              className={styles.img}
              priority
              sizes="(max-width: 768px) 324px, (max-width: 1440px) 300px"
            />
            <span className={styles.codeImg}>{objNumber}</span>
          </div>
        </Link>
        <div className={styles.apartContent}>
          <p className={styles.addressRooms}>
            {roomsQuantity}
            {t("ApartmentsPage.TextOfDescAdress")}:
          </p>
          <p className={styles.addressRooms}>{address}</p>
        </div>
        <p className={styles.priceRooms}>
          {price}₴{/* Кількість кімнат: {roomsQuantity} */}
        </p>
        <p>{bedsQuantity}</p>
        <Link
          href={`/apartments/${id}`}
          // href={`/oldApartments/${roomsQuantity}/${id}`}
          className={styles.btnRooms}
        >
          {t("Buttons.CardDetailsBtn")}
        </Link>
      </li>
    </>
  );
};

export default ApartItem;
