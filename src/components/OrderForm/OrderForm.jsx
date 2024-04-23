import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    validateYupSchema,
    yupToFormErrors,
} from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { orderSchema } from "@/yupSchemas/orderSchema";
import { addDays, subDays } from "@/utils/dateUtils";
import { sendToTelegram } from "@/utils/sendToTelegram";
import { useFetcherObjectNumbers } from "@/hooks/useFetcher";
import SuccessContent from "./SuccessContent";

import styles from "./OrderForm.module.scss";
import seoStyles from "@/app/seoStyles.module.css";

const initialValues = {
    userName: "",
    phone: "",
    objNumber: "",
    checkIn: null,
    checkOut: null,
};

const handleSubmit = (values, actions, closeModal) => {
    sendToTelegram(values);
    actions.setSubmitting(true);

    setTimeout(() => {
        closeModal();
        setTimeout(() => {
            actions.resetForm();
            actions.setSubmitting(false);
        }, 300);
    }, 2000);
};

const OrderForm = ({ isOpen, closeModal }) => {
    const { t } = useTranslation();

    const schema = useMemo(() => orderSchema(), []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const listOfAppartmentNumbers = useFetcherObjectNumbers();

    return (
        <Formik
            initialValues={initialValues}
            validate={(values) => {
                try {
                    validateYupSchema(
                        values,
                        schema,
                        true,
                        listOfAppartmentNumbers
                    );
                } catch (err) {
                    return yupToFormErrors(err); //for rendering validation errors
                }

                return {};
            }}
            onSubmit={(values, actions) => {
                handleSubmit(values, actions, closeModal);
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, values, isSubmitting } =
                    formik;

                return (
                    <div className={styles.container}>
                        <button
                            onClick={closeModal}
                            className={styles.closeBtn}
                        >
                            <svg className={styles.iconBtnClose}>
                                <use href='/sprite.svg#close' />
                            </svg>
                        </button>
                        <h2 className={styles.title}>Daily Rent</h2>
                        <h3 className={seoStyles.titleHidden}>
                            Оренда квартири суми. Суми квартири. Аренда квартиры
                            Сумы.
                        </h3>
                        {isSubmitting ? (
                            <SuccessContent closeModal={closeModal} />
                        ) : (
                            <Form className={styles.form}>
                                <div className={styles.innerWrap}>
                                    <div className={styles.wrapError}>
                                        <svg className={styles.icon}>
                                            <use href='/sprite.svg#icon-user' />
                                        </svg>
                                        <Field
                                            type='text'
                                            name='userName'
                                            id='userName'
                                            placeholder={t("Form.name")}
                                            autoComplete='off'
                                            maxLength='30'
                                            className={
                                                errors.userName &&
                                                    touched.userName
                                                    ? `${styles.input} ${styles.inputError}`
                                                    : styles.input
                                            }
                                        />
                                        <ErrorMessage
                                            name='userName'
                                            className={styles.error}
                                            component='p'
                                        />
                                    </div>
                                    <div className={styles.wrapError}>
                                        <svg className={styles.icon}>
                                            <use href='/sprite.svg#icon-phone' />
                                        </svg>
                                        <Field
                                            type='text'
                                            name='phone'
                                            id='phone'
                                            placeholder={t("Form.phone")}
                                            autoComplete='off'
                                            maxLength='14'
                                            className={
                                                errors.phone && touched.phone
                                                    ? `${styles.input} ${styles.inputError}`
                                                    : styles.input
                                            }
                                        />
                                        <ErrorMessage
                                            name='phone'
                                            className={styles.error}
                                            component='p'
                                        />
                                    </div>
                                </div>
                                <div className={styles.innerWrap}>
                                    <div className={styles.wrapError}>
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
                                        <Field name='checkIn' id='checkIn'>
                                            {({ form, field }) => {
                                                const { setFieldValue } = form;
                                                const { value } = field;

                                                return (
                                                    <DatePicker
                                                        id='checkIn'
                                                        autoComplete='off'
                                                        dateFormat='dd/MM/yyyy'
                                                        selectsStart
                                                        className={
                                                            errors.checkIn &&
                                                                touched.checkIn
                                                                ? `${styles.input} ${styles.inputError}`
                                                                : styles.input
                                                        }
                                                        placeholderText={t(
                                                            "Form.dateOfEntry"
                                                        )}
                                                        {...field}
                                                        selected={value}
                                                        onFocus={(e) =>
                                                            e.target.blur()
                                                        }
                                                        onChange={(val) =>
                                                            setFieldValue(
                                                                "checkIn",
                                                                val
                                                            )
                                                        }
                                                        excludeDateIntervals={[
                                                            {
                                                                start: subDays(
                                                                    new Date(),
                                                                    100
                                                                ),
                                                                end: addDays(
                                                                    new Date(),
                                                                    0
                                                                ),
                                                            },
                                                        ]}
                                                        includeDateIntervals={[
                                                            {
                                                                start: subDays(
                                                                    new Date(),
                                                                    2
                                                                ),
                                                                end: addDays(
                                                                    new Date(),
                                                                    700
                                                                ),
                                                            },
                                                        ]}
                                                    />
                                                );
                                            }}
                                        </Field>
                                        <ErrorMessage
                                            name='checkIn'
                                            className={styles.error}
                                            component='p'
                                        />
                                    </div>
                                    {/* check_Out  */}
                                    <div className={styles.wrapError}>
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
                                        <Field name='checkOut' id='checkOut'>
                                            {({ form, field }) => {
                                                const { setFieldValue } = form;
                                                const { value } = field;
                                                return (
                                                    <DatePicker
                                                        id='checkOut'
                                                        autoComplete='off'
                                                        dateFormat='dd/MM/yyyy'
                                                        disabled={
                                                            !values.checkIn
                                                        }
                                                        selectsEnd
                                                        minDate={values.checkIn}
                                                        className={
                                                            errors.checkOut &&
                                                                touched.checkOut
                                                                ? `${styles.input} ${styles.inputError}`
                                                                : styles.input
                                                        }
                                                        placeholderText={t(
                                                            "Form.departureDate"
                                                        )}
                                                        {...field}
                                                        selected={value}
                                                        onFocus={(e) =>
                                                            e.target.blur()
                                                        }
                                                        onChange={(val) =>
                                                            setFieldValue(
                                                                "checkOut",
                                                                val
                                                            )
                                                        }
                                                        includeDateIntervals={[
                                                            {
                                                                start: subDays(
                                                                    new Date(),
                                                                    2
                                                                ),
                                                                end: addDays(
                                                                    new Date(),
                                                                    700
                                                                ),
                                                            },
                                                        ]}
                                                    />
                                                );
                                            }}
                                        </Field>
                                        <ErrorMessage
                                            name='checkOut'
                                            className={styles.error}
                                            component='p'
                                        />
                                    </div>
                                </div>
                                <div className={styles.innerWrap}>
                                    <div className={styles.wrapError}>
                                        <svg className={styles.icon}>
                                            <use href='/sprite.svg#icon-hash' />
                                        </svg>
                                        <Field
                                            type='text'
                                            name='objNumber'
                                            id='objNumber'
                                            autoComplete='off'
                                            maxLength='3'
                                            placeholder={t(
                                                "Form.numberOfObject"
                                            )}
                                            className={
                                                errors.objNumber &&
                                                    touched.objNumber
                                                    ? `${styles.input} ${styles.inputError}`
                                                    : styles.input
                                            }
                                        />
                                        <ErrorMessage
                                            name='objNumber'
                                            className={styles.error}
                                            component='p'
                                        />
                                    </div>
                                    <p className={styles.explainText}>
                                        * - {t("Form.fieldsDesc")}
                                    </p>
                                </div>

                                <button
                                    disabled={!isValid}
                                    type='submit'
                                    className={
                                        isValid
                                            ? `${styles.button} ${styles.activeBtn}`
                                            : styles.button
                                    }
                                >
                                    {t("Buttons.OrderBtn")}
                                </button>
                            </Form>
                        )}
                    </div>
                );
            }}
        </Formik>
    );
};

export default OrderForm;