import { useState, useEffect } from "react";
import Link from "next/link";
import SuccessContent from "./SuccessContent";
import styles from "./OrderForm.module.scss";

const OrderForm = ({ isOpen, closeModal }) => {
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [objNumber, setObjNumber] = useState("");
    const [dateEnter, setDateEnter] = useState(null);
    const [dateExit, setDateExit] = useState(null);
    // const [startDate, setStartDate] = useState(new Date());

    const [dirtyUserName, setDirtyUserName] = useState(false);
    const [dirtyPhone, setDirtyPhone] = useState(false);
    const [dirtyObjNumber, setDirtyObjNumber] = useState(false);
    const [dirtyDateEnter, setDirtyDateEnter] = useState(false);
    const [dirtyDateExit, setDirtyDateExit] = useState(false);

    const [errorUserName, setErrorUserName] = useState("Заповніть це поле");
    const [errorPhone, setErrorPhone] = useState("Заповніть це поле");
    const [errorObjNumber, setErrorObjNumber] = useState("Заповніть це поле");
    const [errorDateEnter, setErrorDateEnter] = useState("Заповніть це поле");
    const [errorDateExit, setErrorDateExit] = useState("Заповніть це поле");

    const [validForm, setValidForm] = useState(false);
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        if (
            errorUserName ||
            errorPhone ||
            errorObjNumber ||
            errorDateEnter ||
            errorDateExit
        ) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [
        errorUserName,
        errorPhone,
        errorObjNumber,
        errorDateEnter,
        errorDateExit,
    ]);

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

    const validatePhone = (value) => {
        let re = /^\+\d{12}$/;

        if (!re.test(value)) {
            setErrorPhone("+380123456789");
        } else {
            setErrorPhone("");
        }
        if (value.length === 0) setErrorPhone("Заповніть це поле");
    };

    const validateObjNumber = (value) => {
        let reNum = /^[0-9]*$/;

        if (!reNum.test(value)) {
            setErrorObjNumber("Тільки цифри");
            if (value.length === 0) {
                setErrorObjNumber("Заповніть це поле");
            }
        } else {
            setErrorObjNumber("");
        }
        if (value.length === 0) setErrorObjNumber("Заповніть це поле");
    };

    // const validateEnterDate = (value) => {
    //     if (value.length === 0) {
    //         setErrorDateEnter("Заповніть це поле");
    //     } else {
    //         setErrorDateEnter("");
    //     }
    // };

    // const validateExitDate = (value) => {
    //     if (value.length === 0) {
    //         setErrorDateExit("Заповніть це поле");
    //     } else {
    //         setErrorDateExit("");
    //     }
    // };

    const validateDate = (value, setError) => {
        if (value.length === 0) {
            setError("Заповніть це поле");
        } else {
            setError("");
        }
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

            case "objNumber":
                if (evt.target.value.length > 3) return;
                validateObjNumber(value);
                setObjNumber(value);
                break;

            case "dateEnter":
                validateDate(value, setErrorDateEnter);
                setDateEnter(value);
                break;

            case "dateExit":
                validateDate(value, setErrorDateExit);
                setDateExit(value);
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

            case "objNumber":
                setDirtyObjNumber(true);
                break;

            case "dateEnter":
                setDirtyDateEnter(true);
                break;

            case "dateExit":
                setDirtyDateExit(true);
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
        setDirtyObjNumber(false);
        setDirtyDateEnter(false);
        setDirtyDateExit(false);
        setErrorUserName("Заповніть це поле");
        setErrorPhone("Заповніть це поле");
        setErrorObjNumber("Заповніть це поле");
        setErrorDateEnter("Заповніть це поле");
        setErrorDateExit("Заповніть це поле");
        setSubmit(false);
    };

    const formSubmit = (evt) => {
        evt.preventDefault();

        const data = {
            name: userName,
            tel: phone,
            number: objNumber,
            enter: dateEnter,
            exit: dateExit,
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
                <svg className={styles.iconBtnClose}>
                    <use href='/sprite.svg#close' />
                </svg>
            </button>
            <h1 className={styles.title}>Daily Rent</h1>
            {submit ? (
                <SuccessContent closeModal={closeModal} />
            ) : (
                <form className={styles.form} onSubmit={formSubmit}>
                    <div className={styles.innerWrap}>
                        <div className={styles.wrapError}>
                            {dirtyUserName && errorUserName && (
                                <div className={styles.error}>
                                    {errorUserName}
                                </div>
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
                    </div>
                    <div className={styles.innerWrap}>
                        <div className={styles.wrapError}>
                            {dirtyDateEnter && errorDateEnter && (
                                <div className={styles.error}>
                                    {errorDateEnter}
                                </div>
                            )}
                            <label className={styles.label}>
                                <svg className={styles.iconSvg}>
                                    <use href='/sprite.svg#icon-calendar' />
                                </svg>
                                <input
                                    type='date'
                                    name='dateEnter'
                                    value={dateEnter}
                                    placeholder='Дата заїзду'
                                    autoComplete='off'
                                    className={
                                        dirtyDateEnter && errorDateEnter
                                            ? `${styles.input} ${styles.inputError}`
                                            : styles.input
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    // onFocus={(this.type = "date")}
                                />
                            </label>
                        </div>
                        <div className={styles.wrapError}>
                            {dirtyDateExit && errorDateExit && (
                                <div className={styles.error}>
                                    {errorDateExit}
                                </div>
                            )}
                            <label className={styles.label}>
                                <svg className={styles.iconSvg}>
                                    <use href='/sprite.svg#icon-calendar' />
                                </svg>
                                <input
                                    type='date'
                                    name='dateExit'
                                    value={dateExit}
                                    placeholder='Дата виїзду'
                                    autoComplete='off'
                                    className={
                                        dirtyDateExit && errorDateExit
                                            ? `${styles.input} ${styles.inputError}`
                                            : styles.input
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </label>
                        </div>
                    </div>
                    <div className={styles.innerWrap}>
                        <div className={styles.wrapError}>
                            {dirtyObjNumber && errorObjNumber && (
                                <div className={styles.error}>
                                    {errorObjNumber}
                                </div>
                            )}
                            <label className={styles.label}>
                                <svg className={styles.iconSvg}>
                                    <use href='/sprite.svg#icon-hash' />
                                </svg>
                                <input
                                    type='text'
                                    name='objNumber'
                                    value={objNumber}
                                    placeholder='Номер об’єкту'
                                    autoComplete='off'
                                    className={
                                        dirtyObjNumber && errorObjNumber
                                            ? `${styles.input} ${styles.inputError}`
                                            : styles.input
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </label>
                        </div>

                        <Link
                            href='/apartments'
                            onClick={closeModal}
                            className={`${styles.button} ${styles.linkBtn}`}
                        >
                            Всі об’єкти
                        </Link>
                    </div>

                    <button
                        disabled={!validForm}
                        className={
                            validForm
                                ? `${styles.button} ${styles.activeBtn}`
                                : styles.button
                        }
                    >
                        Забронювати
                    </button>
                </form>
            )}
        </div>
    );
};

export default OrderForm;
