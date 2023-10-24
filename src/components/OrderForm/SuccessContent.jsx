import styles from "./OrderForm.module.scss";

const SuccessContent = ({ closeModal }) => {
    return (
        <div className={styles.successContainer}>
            <div className={styles.successWrap}>
                <p className={styles.successTextTop}>
                    Ваша заявка успішно відправлена!
                </p>
                <p className={styles.successText}>
                    Наш менеджер зв’яжеться з вами в найближчий час.
                </p>
            </div>
            <button
                onClick={closeModal}
                className={`${styles.button} ${styles.activeBtn}`}
            >
                Закрити
            </button>
        </div>
    );
};

export default SuccessContent;
