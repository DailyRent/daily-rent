import Image from 'next/image';
import styles from './ApartDataList.module.scss';

const ApartDataList = ({ dataId }) => {
  return (
    <div className={styles.dataList}>
      <span className={styles.dataText}>
        <svg className={styles.svgHash}>
          <use href="/sprite.svg#icon-hash" />
        </svg>
        {dataId.objNumber}
      </span>
      <span className={styles.dataText}>
        <a
          href={dataId?.googleMapLocation}
          target="_blank"
          className={styles.googleMaps}
        >
          <div className={styles.imgContainer}>
            <svg className={styles.img}>
              <use href="/sprite.svg#icon-map-pin" />
            </svg>
            {/* <Image
              src="/png/google-maps.png"
              alt="google maps"
              fill={true}
              className={styles.img}
            /> */}
          </div>
          <span className={styles.googleMapsText}>{dataId.address}</span>
        </a>
      </span>
      <span className={styles.dataText + ' ' + styles.dataTextPrice}>
        ₴ {dataId.price} / Night
      </span>
    </div>
  );
};

export default ApartDataList;
