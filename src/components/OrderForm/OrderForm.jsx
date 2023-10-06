import { useState, useEffect } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addDays, subDays, formatDate } from "../../utils/dateUtils";
import SuccessContent from "./SuccessContent";
import styles from "./OrderForm.module.scss";

const OrderForm = ({ isOpen, closeModal }) => {
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [objNumber, setObjNumber] = useState("");
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);

    const [dirtyUserName, setDirtyUserName] = useState(false);
    const [dirtyPhone, setDirtyPhone] = useState(false);
    const [dirtyObjNumber, setDirtyObjNumber] = useState(false);
    const [dirtyCheckIn, setDirtyCheckIn] = useState(false);
    const [dirtyCheckOut, setDirtyCheckOut] = useState(false);

    const [errorUserName, setErrorUserName] = useState("Заповніть це поле");
    const [errorPhone, setErrorPhone] = useState("Заповніть це поле");
    const [errorObjNumber, setErrorObjNumber] = useState("Заповніть це поле");
    const [errorCheckIn, setErrorCheckIn] = useState("Заповніть це поле");
    const [errorCheckOut, setErrorCheckOut] = useState("Заповніть це поле");

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
            errorCheckIn ||
            errorCheckOut
        ) {
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [
        errorUserName,
        errorPhone,
        errorObjNumber,
        errorCheckIn,
        errorCheckOut,
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
        setDirtyCheckIn(false);
        setDirtyCheckOut(false);
        setErrorUserName("Заповніть це поле");
        setErrorPhone("Заповніть це поле");
        setErrorObjNumber("Заповніть це поле");
        setErrorCheckIn("Заповніть це поле");
        setErrorCheckOut("Заповніть це поле");
        setSubmit(false);
    };

    const formSubmit = (evt) => {
        evt.preventDefault();

        const formData = {
            name: userName,
            tel: phone,
            number: objNumber,
            check_In: formatDate(checkIn),
            check_Out: formatDate(checkOut),
            // check_In: checkIn,
            // check_Out: checkOut,
        };
        setSubmit(true);
        console.log("formData:", formData);

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
                                <svg className={styles.icon}>
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
                                <svg className={styles.icon}>
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
                            {dirtyCheckIn && errorCheckIn && (
                                <div className={styles.error}>
                                    {errorCheckIn}
                                </div>
                            )}
                            <div className={styles.label}>
                                <svg
                                    className={`${styles.icon} ${styles.iconPicker}`}
                                >
                                    <use href='/sprite.svg#icon-calendar' />
                                </svg>
                                <svg
                                    className={`${styles.icon} ${styles.iconPickerRight}`}
                                >
                                    <use href='/sprite.svg#icon-chevron-down' />
                                </svg>
                                <DatePicker
                                    selected={checkIn}
                                    onChange={(date) => {
                                        setCheckIn(date);
                                        setErrorCheckIn("");
                                    }}
                                    selectsStart
                                    dateFormat='dd/MM/yyyy'
                                    startDate={checkIn}
                                    endDate={checkOut}
                                    className={
                                        dirtyCheckIn && errorCheckIn
                                            ? `${styles.input} ${styles.inputError}`
                                            : styles.input
                                    }
                                    placeholderText='Дата заїзду'
                                    onBlur={() => setDirtyCheckIn(true)}
                                    excludeDateIntervals={[
                                        {
                                            start: subDays(new Date(), 100),
                                            end: addDays(new Date(), 0),
                                        },
                                    ]}
                                    includeDateIntervals={[
                                        {
                                            start: subDays(new Date(), 2),
                                            end: addDays(new Date(), 20),
                                        },
                                    ]}
                                />
                            </div>
                        </div>

                        <div className={styles.wrapError}>
                            {dirtyCheckOut && errorCheckOut && (
                                <div className={styles.error}>
                                    {errorCheckOut}
                                </div>
                            )}
                            <div className={styles.label}>
                                <svg
                                    className={`${styles.icon} ${styles.iconPicker}`}
                                >
                                    <use href='/sprite.svg#icon-calendar' />
                                </svg>
                                <svg
                                    className={`${styles.icon} ${styles.iconPickerRight}`}
                                >
                                    <use href='/sprite.svg#icon-chevron-down' />
                                </svg>
                                <DatePicker
                                    selected={checkOut}
                                    dateFormat='dd/MM/yyyy'
                                    onChange={(date) => {
                                        setCheckOut(date);
                                        setErrorCheckOut("");
                                    }}
                                    selectsEnd
                                    startDate={checkIn}
                                    endDate={checkOut}
                                    minDate={checkIn}
                                    className={
                                        dirtyCheckOut && errorCheckOut
                                            ? `${styles.input} ${styles.inputError}`
                                            : styles.input
                                    }
                                    placeholderText='Дата виїзду'
                                    onBlur={() => setDirtyCheckOut(true)}
                                    includeDateIntervals={[
                                        {
                                            start: subDays(new Date(), 2),
                                            end: addDays(new Date(), 20),
                                        },
                                    ]}
                                />
                            </div>
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
                                <svg className={styles.icon}>
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
