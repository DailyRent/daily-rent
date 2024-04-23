import styles from './ApartStar.module.scss';

const ApartStar = ({ dataId }) => {
  return (
    <div className={styles.starContainer}>
      <a href={dataId?.bookingUrl} target="_blank" className={styles.starText}>
        {dataId?.bookingUrl && <p className={styles.starItem}> Booking.com</p>}
      </a>
    </div>
  );
};

export default ApartStar;
