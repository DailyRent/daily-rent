import { useState, useEffect } from "react";
import useSWR from "swr";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addDays, subDays, formatDate } from "@/utils/dateUtils";
import { sendToTelegram } from "@/utils/sendToTelegram";
import SuccessContent from "./SuccessContent";
import styles from "./OrderForm.module.scss";

const OrderForm = ({ isOpen, closeModal }) => {
    const [form, setForm] = useState({
        userName: "",
        phone: "",
        objNumber: "",
        checkIn: null,
        checkOut: null,
        dirtyUserName: false,
        dirtyPhone: false,
        errorUserName: "Заповніть це поле",
        errorPhone: "Заповніть це поле",
        errorObjNumber: "",
        validForm: false,
        submit: false,
    });

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data } = useSWR("/api/apartments", fetcher);
    const listOfAppartmentsNumbers = data?.map((item) => item.objNumber);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
            // document.body.scrollTop = 0; //For Safari
            // document.documentElement.scrollTop = 0;
            window.scrollTo(0, 0);
        };
    }, [isOpen]);

    useEffect(() => {
        if (form.errorUserName || form.errorPhone || form.errorObjNumber) {
            setForm((prev) => ({ ...prev, validForm: false }));
        } else {
            setForm((prev) => ({ ...prev, validForm: true }));
        }
    }, [form.errorUserName, form.errorPhone, form.errorObjNumber]);

    const validateName = (value) => {
        if (value.length < 2) {
            setForm((prev) => ({
                ...prev,
                errorUserName: "Ім’я має бути довшим",
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                errorUserName: "",
            }));
        }
        if (value.length === 0) {
            setForm((prev) => ({
                ...prev,
                errorUserName: "Заповніть це поле",
            }));
        }
    };

    const validatePhone = (value) => {
        let re = /^\+\d{12}$/;

        if (!re.test(value)) {
            setForm((prev) => ({
                ...prev,
                errorPhone: "+380123456789",
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                errorPhone: "",
            }));
        }
        if (value.length === 0) {
            setForm((prev) => ({
                ...prev,
                errorPhone: "Заповніть це поле",
            }));
        }
    };

    const validateObjNumber = (value) => {
        let reNum = /^[0-9]*$/;
        const findNum = listOfAppartmentsNumbers?.find(
            (item) => item === value
        );

        if (!reNum.test(value)) {
            setForm((prev) => ({
                ...prev,
                errorObjNumber: "Тільки цифри",
            }));
        } else if (!findNum) {
            setForm((prev) => ({
                ...prev,
                errorObjNumber: "Такої квартири немає",
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                errorObjNumber: "",
            }));
        }
        if (value.length === 0) {
            setForm((prev) => ({
                ...prev,
                errorObjNumber: "",
            }));
        }
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        switch (name) {
            case "name":
                if (evt.target.value.length > 30) return;
                validateName(value);
                setForm((prev) => ({ ...prev, userName: value }));
                break;

            case "phone":
                if (evt.target.value.length > 13) return;
                validatePhone(value);
                setForm((prev) => ({ ...prev, phone: value }));
                break;

            case "objNumber":
                if (evt.target.value.length > 3) return;
                validateObjNumber(value);
                setForm((prev) => ({ ...prev, objNumber: value }));
                break;

            default:
                return;
        }
    };

    const handleBlur = (evt) => {
        switch (evt.target.name) {
            case "name":
                setForm((prev) => ({ ...prev, dirtyUserName: true }));
                break;

            case "phone":
                setForm((prev) => ({ ...prev, dirtyPhone: true }));
                break;

            default:
                return;
        }
    };

    const reset = () => {
        setForm((prev) => ({ ...prev, userName: "" }));
        setForm((prev) => ({ ...prev, phone: "" }));
        setForm((prev) => ({ ...prev, objNumber: "" }));
        setForm((prev) => ({ ...prev, checkIn: null }));
        setForm((prev) => ({ ...prev, checkOut: null }));
        setForm((prev) => ({ ...prev, dirtyUserName: false }));
        setForm((prev) => ({ ...prev, dirtyPhone: false }));
        setForm((prev) => ({ ...prev, dirtyCheckIn: false }));
        setForm((prev) => ({ ...prev, errorUserName: "Заповніть це поле" }));
        setForm((prev) => ({ ...prev, errorPhone: "Заповніть це поле" }));
        setForm((prev) => ({ ...prev, errorObjNumber: "Заповніть це поле" }));
        setForm((prev) => ({ ...prev, submit: false }));
    };

    const formSubmit = (evt) => {
        evt.preventDefault();

        const formData = {
            name: form.userName,
            tel: form.phone,
            number: form.objNumber ? form.objNumber : "",
            check_In: form.checkIn ? formatDate(form.checkIn) : "не вказано",
            check_Out: form.checkOut ? formatDate(form.checkOut) : "не вказано",
        };

        // console.log("formData:", formData);
        sendToTelegram(formData);
        setForm((prev) => ({ ...prev, submit: true }));
        setTimeout(() => {
            closeModal();
            reset();
        }, 4000);
    };

    return (
        <div className={styles.container}>
            <button onClick={closeModal} className={styles.closeBtn}>
                <svg className={styles.iconBtnClose}>
                    <use href='/sprite.svg#close' />
                </svg>
            </button>
            <h1 className={styles.title}>Daily Rent</h1>
            {form.submit ? (
                <SuccessContent closeModal={closeModal} />
            ) : (
                <form className={styles.form} onSubmit={formSubmit}>
                    <div className={styles.innerWrap}>
                        <div className={styles.wrapError}>
                            {form.dirtyUserName && form.errorUserName && (
                                <div className={styles.error}>
                                    {form.errorUserName}
                                </div>
                            )}

                            <label className={styles.label}>
                                <svg className={styles.icon}>
                                    <use href='/sprite.svg#icon-user' />
                                </svg>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.userName}
                                    placeholder='Ім’я *'
                                    autoComplete='off'
                                    className={
                                        form.errorUserName && form.dirtyUserName
                                            ? `${styles.input} ${styles.inputError}`
                                            : styles.input
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </label>
                        </div>

                        <div className={styles.wrapError}>
                            {form.dirtyPhone && form.errorPhone && (
                                <div className={styles.error}>
                                    {form.errorPhone}
                                </div>
                            )}
                            <label className={styles.label}>
                                <svg className={styles.icon}>
                                    <use href='/sprite.svg#icon-phone' />
                                </svg>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={form.phone}
                                    placeholder='Номер телефону *'
                                    autoComplete='off'
                                    className={
                                        form.errorPhone && form.dirtyPhone
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
                                    selected={form.checkIn}
                                    onChange={(date) => {
                                        setForm((prev) => ({
                                            ...prev,
                                            checkIn: date,
                                        }));
                                    }}
                                    selectsStart
                                    dateFormat='dd/MM/yyyy'
                                    startDate={form.checkIn}
                                    endDate={form.checkOut}
                                    className={styles.input}
                                    placeholderText='Дата заїзду'
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
                                    selected={form.checkOut}
                                    dateFormat='dd/MM/yyyy'
                                    onChange={(date) => {
                                        setForm((prev) => ({
                                            ...prev,
                                            checkOut: date,
                                        }));
                                    }}
                                    selectsEnd
                                    startDate={form.checkIn}
                                    endDate={form.checkOut}
                                    minDate={form.checkIn}
                                    className={styles.input}
                                    placeholderText='Дата виїзду'
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
                            {form.errorObjNumber && (
                                <div className={styles.error}>
                                    {form.errorObjNumber}
                                </div>
                            )}
                            <label className={styles.label}>
                                <svg className={styles.icon}>
                                    <use href='/sprite.svg#icon-hash' />
                                </svg>
                                <input
                                    type='text'
                                    name='objNumber'
                                    value={form.objNumber}
                                    placeholder='Номер об’єкту'
                                    autoComplete='off'
                                    className={
                                        form.errorObjNumber
                                            ? `${styles.input} ${styles.inputError}`
                                            : styles.input
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </label>
                        </div>
                        <p className={styles.explainText}>
                            *- поле, обовʼязкове для заповнення
                        </p>
                    </div>

                    <button
                        disabled={!form.validForm}
                        className={
                            form.validForm
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
