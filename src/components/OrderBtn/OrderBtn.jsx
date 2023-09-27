import styles from "./OrderBtn.module.scss";

const OrderBtn = ({ openModal }) => {
    return (
        <button type='button' className={styles.button} onClick={openModal}>
            Забронювати
        </button>
    );
};

export default OrderBtn;
