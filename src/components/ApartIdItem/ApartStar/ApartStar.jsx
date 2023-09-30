import styles from './ApartStar.module.scss';

const ApartStar = () => {
  return (
    <ul className={styles.starContainer}>
      {/* <li className={styles.starList}>
        <p> Airbnb.com</p>
        <span className={styles.starText}>
          <svg className={styles.svgStar}>
            <use href="/sprite.svg#icon-star" />
          </svg>
          4.9
        </span>
      </li> */}
      <li className={styles.starList}>
        <p> Booking.com</p>
        <span className={styles.starText}>
          <svg className={styles.svgStar}>
            <use href="/sprite.svg#icon-star" />
          </svg>
          4.9
        </span>
      </li>
    </ul>
  );
};

export default ApartStar;
