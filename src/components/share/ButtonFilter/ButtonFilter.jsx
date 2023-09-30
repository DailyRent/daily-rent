import styles from './ButtonFilter.module.scss';

const ButtonFilter = () => {
  return (
    <div className={styles.filterContainer}>
      <button type="button" className={styles.filterBtnContainer}>
        <svg className={styles.filterSvg}>
          <use href="/sprite.svg#icon-sliders" />
        </svg>
        <p className={styles.filter}>Filter</p>
      </button>
    </div>
  );
};

export default ButtonFilter;
