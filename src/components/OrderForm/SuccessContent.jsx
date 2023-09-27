import styles from "./OrderForm.module.scss";

const SuccessContent = ({ closeModal }) => {
    return (
        <div className={styles.successContainer}>
            <div>
                <p className={styles.successTextTop}>
                    Ваша заявка успішно відправлена!
                </p>
                <p className={styles.successText}>
                    Наш менеджер зв’яжеться з вами в найближчий час.
                </p>
            </div>
            <button onClick={closeModal} className={styles.button}>
                Закрити
            </button>
        </div>
    );
};

export default SuccessContent;
