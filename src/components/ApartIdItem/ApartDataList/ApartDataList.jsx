import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import styles from "./ApartDataList.module.scss";

const ApartDataList = ({ dataId }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.dataList}>
      <div className={styles.dataText + " " + styles.dataTextPrice}>
        <figure>
          <svg className={styles.svgHash}>
            <use href="/sprite.svg#icon-hash" />
          </svg>
          <figcaption> {dataId.objNumber}.</figcaption>
        </figure>
        <strong className={styles.dataText + " " + styles.dataTextPrice}>
          ₴ {dataId.price}
        </strong>
      </div>

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
    </div>
  );
};

export default ApartDataList;
