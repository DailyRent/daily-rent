import styles from './ButtonFilter.module.scss';

const ButtonFilter = () => {
  return (
    <button type="button" className={styles.filterBtnContainer}>
      <svg className={styles.filterSvg}>
        <use href="/sprite.svg#icon-sliders" />
      </svg>
    </button>
  );
};

export default ButtonFilter;
