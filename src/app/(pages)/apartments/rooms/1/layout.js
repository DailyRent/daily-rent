import styles from './page.module.scss';

export default function OneRoomsLayout({ children }) {
  return (
    <section className={styles.container}>
      <h1 className={styles.visuallyHidden}>OneRooms Appartments</h1>
      <div className={styles.oneRoomBox}>
        <div className={styles.backContainer}>
          <button type="button" className={styles.backBtnContainer}>
            <svg className={styles.backSvg}>
              <use href="/sprite.svg#icon-arrow-left-circle" />
            </svg>
          </button>
          <p className={styles.text}>Головна / Апартаменти / Lorem ipsum </p>
        </div>
        <div className={styles.filterContainer}>
          <button type="button" className={styles.filterBtnContainer}>
            <svg className={styles.filterSvg}>
              <use href="/sprite.svg#icon-sliders" />
            </svg>
          </button>
          <p className={styles.filter}>Filter</p>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}
