import { CldUploadButton } from "next-cloudinary";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    validateYupSchema,
    yupToFormErrors,
} from "formik";
import { formDashboardSchema } from "@/utils/formDashboardShema";
import { useFetcherObjectNumbers } from "@/hooks/useFetcher";
import { useFetcherData } from "@/hooks/useFetcher";
import styles from "./DashboardForm.module.scss";

const DashboardFormik = () => {
    const initialValues = {
        objNumber: "",
        top: false,
        titleImg: "",
        imgs: [],
        address: "",
        addressEn: "",
        flatNumber: "",
        googleMapLocation: "",
        price: "",
        roomsQuantity: "",
        bookingUrl: "",
        amenities: ["Wi-Fi"],
        description: "",
        descriptionEn: "",
    };

    const handleSubmit = async (values, actions) => {
        try {
            await fetch("/api/apartments", {
                method: "POST",
                body: JSON.stringify(values),
            });
            // автоматически обновляет страницу при изменении кол-ва карточек
            mutate();
            // обнуляет все поля формы
            actions.resetForm();
        } catch (err) {
            console.log(err);
        }
    };

    const listOfAppartmentNumbers = useFetcherObjectNumbers();
    const { mutate } = useFetcherData();

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={formDashboardSchema}
            validate={(values) => {
                try {
                    validateYupSchema(
                        values,
                        formDashboardSchema,
                        true,
                        listOfAppartmentNumbers
                    );
                } catch (err) {
                    return yupToFormErrors(err); //for rendering validation errors
                }

                return {};
            }}
            onSubmit={(values, actions) => {
                handleSubmit(values, actions);
            }}
        >
            {(formik) => {
                const { errors, touched, isValid, values, setFieldValue } =
                    formik;
                // console.log("formik:", formik);
                // console.log("values:", values);

                return (
                    <Form className={styles.new}>
                        <h1>Додавання нового обʼєкту</h1>
                        <ErrorMessage
                            name='objNumber'
                            className={styles.error}
                            component='p'
                        />
                        <Field
                            type='text'
                            name='objNumber'
                            maxLength='3'
                            placeholder='Номер обʼєкту'
                            className={styles.input}
                        />

                        <label htmlFor='Top' className={styles.top}>
                            <Field type='checkbox' name='top' id='Top' />
                            ТОП
                        </label>
                        {/* <input
                    // в объекте profile сохраняются данные по загружаемой картинке, которые в дальнейшем в оnSubmit извлекаются 
                    {...register("profile")}
                    type='file' placeholder='Основне фото' className={styles.input} /> */}
                        <ErrorMessage
                            name='titleImg'
                            className={styles.error}
                            component='p'
                        />
                        <CldUploadButton
                            name='titleImg'
                            onUpload={(result, widget) => {
                                // for Image component
                                // setTitleImg(result.info.secure_url);
                                setFieldValue(
                                    "titleImg",
                                    result.info.secure_url
                                );
                                // for CldImage component from next-cloudinary
                                // setTitleImg(result.info.public_id);
                                widget.close();
                            }}
                            uploadPreset='unsigned_preset'
                        >
                            Завантажити ОСНОВНЕ фото
                        </CldUploadButton>
                        {/* <input type='text' placeholder='Додаткові фото' className={styles.input} /> */}
                        <ErrorMessage
                            name='imgs'
                            className={styles.error}
                            component='p'
                        />
                        <CldUploadButton
                            name='imgs'
                            onUpload={(result) => {
                                // for Image component
                                setFieldValue("imgs", [
                                    ...values.imgs,
                                    result.info.secure_url,
                                ]);
                                // for CldImage component from next-cloudinary
                                // setImgs(prev => [...prev, result.info.public_id]);
                            }}
                            uploadPreset='unsigned_preset'
                        >
                            Завантажити додаткові фото
                        </CldUploadButton>
                        <ErrorMessage
                            name='address'
                            maxLength='100'
                            className={styles.error}
                            component='p'
                        />
                        <Field
                            type='text'
                            name='address'
                            maxLength='100'
                            placeholder='Адреса'
                            className={styles.input}
                        />
                        <ErrorMessage
                            name='addressEn'
                            className={styles.error}
                            component='p'
                        />
                        <Field
                            type='text'
                            name='addressEn'
                            placeholder='Адреса англійською'
                            className={styles.input}
                        />
                        <ErrorMessage
                            name='flatNumber'
                            className={styles.error}
                            component='p'
                        />
                        <Field
                            type='text'
                            name='flatNumber'
                            maxLength='8'
                            placeholder='Квартира'
                            className={styles.input}
                        />
                        <ErrorMessage
                            name='googleMapLocation'
                            className={styles.error}
                            component='p'
                        />

                        <Field
                            type='text'
                            name='googleMapLocation'
                            placeholder='Місцезнаходження'
                            className={styles.input}
                        />
                        <ErrorMessage
                            name='price'
                            className={styles.error}
                            component='p'
                        />
                        <Field
                            type='text'
                            name='price'
                            maxLength='7'
                            placeholder='Ціна'
                            className={styles.input}
                        />
                        <ErrorMessage
                            name='roomsQuantity'
                            className={styles.error}
                            component='p'
                        />
                        <fieldset className={styles.roomsQuantity}>
                            <legend>Кількість кімнат:</legend>
                            <Field
                                type='radio'
                                id='oneRoom'
                                name='roomsQuantity'
                                value='1'
                            />
                            <label htmlFor='oneRoom'>1</label>
                            <Field
                                type='radio'
                                id='twoRooms'
                                name='roomsQuantity'
                                value='2'
                            />
                            <label htmlFor='twoRooms'>2</label>
                            <Field
                                type='radio'
                                id='threeRooms'
                                name='roomsQuantity'
                                value='3'
                            />
                            <label htmlFor='threeRooms'>3</label>
                        </fieldset>
                        <ErrorMessage
                            name='bookingUrl'
                            className={styles.error}
                            component='p'
                        />
                        <Field
                            type='text'
                            name='bookingUrl'
                            placeholder='bookingUrl'
                            className={styles.input}
                        />
                        <fieldset className={styles.amenities}>
                            <legend>Додатковий комфорт:</legend>
                            <label htmlFor='wi-fi'>
                                <Field
                                    type='checkbox'
                                    id='wi-fi'
                                    name='amenities'
                                    value='Wi-Fi'
                                    // defaultChecked
                                />
                                Wi-Fi
                            </label>
                            <label htmlFor='smartTV'>
                                <Field
                                    type='checkbox'
                                    id='smartTV'
                                    name='amenities'
                                    value='Smart TV'
                                />
                                Smart TV
                            </label>
                            <label htmlFor='airCond'>
                                <Field
                                    type='checkbox'
                                    id='airCond'
                                    name='amenities'
                                    value='Кондиціонер'
                                />
                                Кондиціонер
                            </label>
                            <label htmlFor='bath'>
                                <Field
                                    type='checkbox'
                                    id='bath'
                                    name='amenities'
                                    value='Ванна'
                                />
                                Ванна
                            </label>
                            <label htmlFor='shower'>
                                <Field
                                    type='checkbox'
                                    id='shower'
                                    name='amenities'
                                    value='Душова кабіна'
                                />
                                Душова кабіна
                            </label>
                            <label htmlFor='jacuzzi'>
                                <Field
                                    type='checkbox'
                                    id='jacuzzi'
                                    name='amenities'
                                    value='Джакузі'
                                />
                                Джакузі
                            </label>
                            <label htmlFor='waterHeater'>
                                <Field
                                    type='checkbox'
                                    id='waterHeater'
                                    name='amenities'
                                    value='Водонагрівач'
                                />
                                Водонагрівач
                            </label>
                            <label htmlFor='boiler'>
                                <Field
                                    type='checkbox'
                                    id='boiler'
                                    name='amenities'
                                    value='Котел'
                                />
                                Котел
                            </label>
                            <label htmlFor='washingMachine'>
                                <Field
                                    type='checkbox'
                                    id='washingMachine'
                                    name='amenities'
                                    value='Пральна машина'
                                />
                                Пральна машина
                            </label>
                            <label htmlFor='microwave'>
                                <Field
                                    type='checkbox'
                                    id='microwave'
                                    name='amenities'
                                    value='Мікрохвильова піч'
                                />
                                Мікрохвильова піч
                            </label>
                            <label htmlFor='balcony'>
                                <Field
                                    type='checkbox'
                                    id='balcony'
                                    name='amenities'
                                    value='Балкон'
                                />
                                Балкон
                            </label>
                            <label htmlFor='parking'>
                                <Field
                                    type='checkbox'
                                    id='parking'
                                    name='amenities'
                                    value='Парковка'
                                />
                                Парковка
                            </label>
                        </fieldset>
                        <ErrorMessage
                            name='description'
                            className={styles.error}
                            component='p'
                        />
                        <Field
                            type='text'
                            as='textarea'
                            name='description'
                            maxLength='300'
                            placeholder='Опис'
                            className={styles.textarea}
                        />
                        <ErrorMessage
                            name='descriptionEn'
                            className={styles.error}
                            component='p'
                        />
                        <Field
                            type='text'
                            as='textarea'
                            maxLength='300'
                            name='descriptionEn'
                            placeholder='Опис англійською'
                            className={styles.textarea}
                        />

                        <button
                            type='submit'
                            disabled={!isValid}
                            // className={styles.sendBtn}
                            className={
                                isValid
                                    ? `${styles.button} ${styles.sendBtn}`
                                    : styles.button
                            }
                        >
                            Створити новий обʼєкт
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default DashboardFormik;
