import styles from './ApartStar.module.scss';

const ApartStar = ({ dataId }) => {
  return (
    <div className={styles.starContainer}>
      {/* <li className={styles.starList}>
        <p> Airbnb.com</p>
        <span className={styles.starText}>
          <svg className={styles.svgStar}>
            <use href="/sprite.svg#icon-star" />
          </svg>
          4.9
        </span>
      </li> */}
      {/* <li className={styles.starList}> */}
      <a href={dataId?.bookingUrl} target="_blank" className={styles.starText}>
        {dataId?.bookingUrl && <p className={styles.starItem}> Booking.com</p>}
        {/* <svg className={styles.svgStar}>
            <use href="/sprite.svg#icon-star" />
          </svg>
          4.9 */}
      </a>
      {/* </li> */}
    </div>
  );
};

export default ApartStar;
