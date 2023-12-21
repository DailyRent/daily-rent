import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from "./ApartDataList.module.scss";

const ApartDataList = ({ dataId }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.dataList}>
      <figure className={styles.dataText}>
        <svg className={styles.svgHash}>
          <use href="/sprite.svg#icon-hash" />
        </svg>
        {dataId.objNumber}
      </figure>

      <p className={styles.dataText}>
        {dataId.roomsQuantity}
        {t("ApartmentsPage.TextOfDescAdress")}:
      </p>
      <address className={styles.dataText}>
        <a
          href={dataId?.googleMapLocation}
          target="_blank"
          className={styles.googleMaps}
        >
          <figure className={styles.imgContainer}>
            <Image
              src="/png/Google Maps Old.png"
              alt="google maps"
              fill={true}
              sizes="10vw"
              className={styles.img}
            />
          </figure>
          <figcaption className={styles.googleMapsText}>
            {i18n.language === "ua" ? dataId.address : dataId.addressEn}
          </figcaption>
        </a>
      </address>
      <span className={styles.dataText + " " + styles.dataTextPrice}>
        ₴ {dataId.price}
      </span>
    </div>
  );
};

export default ApartDataList;
