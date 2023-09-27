import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import SuccessContent from "./SuccessContent";
import styles from "./OrderForm.module.scss";

const OrderForm = ({ isOpen, closeModal }) => {
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");

    const [dirtyUserName, setDirtyUserName] = useState(false);
    const [dirtyPhone, setDirtyPhone] = useState(false);

    const [errorUserName, setErrorUserName] = useState("Заповніть це поле");
    const [errorPhone, setErrorPhone] = useState("Заповніть це поле");

    const [validForm, setValidForm] = useState(false);
    const [submit, setSubmit] = useState(false);

    isOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");

    // const router = useRouter();

    // useEffect(() => {
    //     if (isOpen) {
    // document.body.style.overflow = "hidden";
    //         router.push("/", { scroll: false });
    //     }
    //     return () => {
    //         // document.body.style.overflow = "unset";
    //         router.push("/", { scroll: true });
    //     };
    // }, [isOpen, router]);

    useEffect(() => {
        if (errorUserName || errorPhone) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [errorUserName, errorPhone]);

    const validateName = (value) => {
        if (value.length < 2) {
            setErrorUserName("Ім’я має бути довшим");
            if (value.length === 0) {
                setErrorUserName("Заповніть це поле");
            }
        } else {
            setErrorUserName("");
        }
    };

    const validatePhone = (phone) => {
        let re = /^\+\d{12}$/;

        if (!re.test(phone)) {
            setErrorPhone("+380123456789");
        } else {
            setErrorPhone("");
        }
        if (phone.length === 0) setErrorPhone("Заповніть це поле");
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        switch (name) {
            case "name":
                if (evt.target.value.length > 30) return;
                validateName(value);
                setUserName(value);
                break;

            case "phone":
                if (evt.target.value.length > 13) return;
                validatePhone(value);
                setPhone(value);
                break;

            default:
                return;
        }
    };

    const handleBlur = (evt) => {
        switch (evt.target.name) {
            case "name":
                setDirtyUserName(true);
                break;

            case "phone":
                setDirtyPhone(true);
                break;

            default:
                return;
        }
    };

    const reset = () => {
        setUserName("");
        setPhone("");
        setDirtyUserName(false);
        setDirtyPhone(false);
        setErrorUserName("Заповніть це поле");
        setErrorPhone("Заповніть це поле");
        setSubmit(false);
    };

    const formSubmit = (evt) => {
        evt.preventDefault();

        const data = {
            name: userName,
            tel: phone,
        };
        setSubmit(true);
        console.log("data:", data);

        setTimeout(() => {
            closeModal();
            reset();
        }, 3000);
    };

    return (
        <div className={styles.container}>
            <button onClick={closeModal} className={styles.closeBtn}>
                <svg className={styles.iconSvg}>
                    <use href='/sprite.svg#close' />
                </svg>
            </button>
            <h1 className={styles.title}>Daily Rent</h1>
            {submit ? (
                <SuccessContent closeModal={closeModal} />
            ) : (
                <form className={styles.form} onSubmit={formSubmit}>
                    <div className={styles.wrapError}>
                        {dirtyUserName && errorUserName && (
                            <div className={styles.error}>{errorUserName}</div>
                        )}

                        <label className={styles.label}>
                            <svg className={styles.iconSvg}>
                                <use href='/sprite.svg#icon-user' />
                            </svg>
                            <input
                                type='text'
                                name='name'
                                value={userName}
                                placeholder='Ім’я'
                                autoComplete='off'
                                className={
                                    errorUserName && dirtyUserName
                                        ? `${styles.input} ${styles.inputError}`
                                        : styles.input
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </label>
                    </div>
                    <div className={styles.wrapError}>
                        {dirtyPhone && errorPhone && (
                            <div className={styles.error}>{errorPhone}</div>
                        )}
                        <label className={styles.label}>
                            <svg className={styles.iconSvg}>
                                <use href='/sprite.svg#icon-phone' />
                            </svg>
                            <input
                                type='tel'
                                name='phone'
                                value={phone}
                                placeholder='Номер телефону'
                                autoComplete='off'
                                className={
                                    errorPhone && dirtyPhone
                                        ? `${styles.input} ${styles.inputError}`
                                        : styles.input
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </label>
                    </div>
                    <button disabled={!validForm} className={styles.button}>
                        Забронювати
                    </button>
                </form>
            )}
        </div>
    );
};

export default OrderForm;
