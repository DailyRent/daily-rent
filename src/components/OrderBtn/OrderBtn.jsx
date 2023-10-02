import styles from './OrderBtn.module.scss';

const OrderBtn = ({ openModal, className }) => {
  return (
    <button
      type="button"
      className={styles.button + ' ' + `${className}`}
      onClick={openModal}
    >
      Забронювати
    </button>
  );
};

export default OrderBtn;
