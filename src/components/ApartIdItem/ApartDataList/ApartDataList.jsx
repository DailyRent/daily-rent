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
        <svg className={styles.svgMap}>
          <use href="/sprite.svg#icon-map-pin" />
        </svg>
        {dataId.address}
      </span>
      <span className={styles.dataText + ' ' + styles.dataTextPrice}>
        <svg className={styles.svgPrise}>
          <use href="/sprite.svg#icon-dollar-sign" />
        </svg>
        {dataId.price} / Night
      </span>
    </div>
  );
};

export default ApartDataList;
