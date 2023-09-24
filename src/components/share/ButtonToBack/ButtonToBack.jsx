import styles from './ButtonToBack.module.scss';

const ButtonToBack = ({ onGoBack }) => {
  return (
    <button
      type="button"
      className={styles.backBtnContainer}
      onClick={onGoBack}
    >
      <svg className={styles.backSvg}>
        <use href="/sprite.svg#icon-arrow-left-circle" />
      </svg>
    </button>
  );
};

export default ButtonToBack;
