import { CldUploadButton } from "next-cloudinary";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  validateYupSchema,
  yupToFormErrors,
} from "formik";
import { toast } from "react-toastify";
import { dashboardSchema } from "@/yupSchemas/dashboardSchema";
import { useFetcherObjectNumbers } from "@/hooks/useFetcher";
import { GetData } from "@/fetch/clientFetch";
import styles from "./DashboardForm.module.scss";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";

const DashboardForm = () => {
  const initialValues = {
    objNumber: "",
    top: false,
    priority: "",
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
    bedsQuantity: "",
    description: "",
    descriptionEn: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      await fetch("/api/apartments", {
        method: "POST",
        body: JSON.stringify(values),
      });
      // автоматично обновлює строрінку при зміні кількості карточок
      mutate();
      // обнуляє форму
      actions.resetForm();
      toast.success(`Новий обʼєкт №: ${values.objNumber} створено`);
    } catch (err) {
      console.log(err);
      toast.error("Помилка! Обʼєкт не створено");
    }
  };

  const listOfApartmentNumbers = useFetcherObjectNumbers();

  const { mutate } = GetData();

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        try {
          validateYupSchema(
            values,
            dashboardSchema,
            true,
            listOfApartmentNumbers
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
        const { isValid, values, setFieldValue } = formik;

        return (
          <Form className={styles.new}>
            <h1>Додавання нового обʼєкту</h1>

            <label htmlFor="ObjectNumber">Номер обʼєкту:</label>
            <ErrorMessage
              name="objNumber"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              id="ObjectNumber"
              name="objNumber"
              maxLength="3"
              placeholder="123"
              className={styles.input}
            />

            <label htmlFor="Top" className={styles.top}>
              <Field type="checkbox" name="top" id="Top" />
              ТОП
            </label>

            <label htmlFor="Priority">Пріоритет:</label>
            <ErrorMessage
              name="priority"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="priority"
              id="Priority"
              maxLength="3"
              placeholder="57"
              className={styles.input}
            />

            <ErrorMessage
              name="titleImg"
              className={styles.error}
              component="p"
            />
            <CldUploadButton
              name="titleImg"
              className={styles.uploadBtn}
              onUpload={(result, widget) => {
                if (values.titleImg !== "") {
                  handleDeleteImgFromCloudinary(values.titleImg);
                }

                setFieldValue("titleImg", result.info.public_id);

                widget.close();
              }}
              options={{ multiple: false }}
              uploadPreset="unsigned_preset"
            >
              Завантажити ГОЛОВНЕ фото (тільки .WEBP)
            </CldUploadButton>
            <ErrorMessage name="imgs" className={styles.error} component="p" />
            <CldUploadButton
              name="imgs"
              className={styles.uploadBtn}
              onUpload={(result) => {
                setFieldValue("imgs", [...values.imgs, result.info.public_id]);
              }}
              uploadPreset="unsigned_preset"
            >
              Завантажити додаткові фото (тільки .WEBP)
            </CldUploadButton>

            <label htmlFor="address">Адреса:</label>
            <ErrorMessage
              name="address"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="address"
              id="address"
              maxLength="100"
              placeholder="вул.Шевченка, буд.8"
              className={styles.input}
            />

            <label htmlFor="addressEn">Адреса англійською:</label>
            <ErrorMessage
              name="addressEn"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="addressEn"
              id="addressEn"
              placeholder="Shevchenko street, h.8"
              className={styles.input}
            />

            <label htmlFor="flatNumber">Квартира:</label>
            <ErrorMessage
              name="flatNumber"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="flatNumber"
              id="flatNumber"
              maxLength="8"
              placeholder="52"
              className={styles.input}
            />

            <label htmlFor="Location"> Місцезнаходження:</label>
            <ErrorMessage
              name="googleMapLocation"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="googleMapLocation"
              id="Location"
              placeholder="https://maps.app.goo.gl/Z8KyBtZDJyMEzNGf9..."
              className={styles.input}
            />

            <label htmlFor="Price">Ціна:</label>
            <ErrorMessage
              name="price"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="price"
              id="Price"
              maxLength="7"
              placeholder="950"
              className={styles.input}
            />
            <ErrorMessage
              name="roomsQuantity"
              className={styles.error}
              component="p"
            />
            <fieldset className={styles.roomsQuantity}>
              <legend>Кількість кімнат:</legend>
              <Field type="radio" id="oneRoom" name="roomsQuantity" value="1" />
              <label htmlFor="oneRoom">1</label>
              <Field
                type="radio"
                id="twoRooms"
                name="roomsQuantity"
                value="2"
              />
              <label htmlFor="twoRooms">2</label>
              <Field
                type="radio"
                id="threeRooms"
                name="roomsQuantity"
                value="3"
              />
              <label htmlFor="threeRooms">3</label>
            </fieldset>

            <label html="Booking">Booking.com:</label>
            <ErrorMessage
              name="bookingUrl"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="bookingUrl"
              id="Booking"
              placeholder="bookingUrl"
              className={styles.input}
            />

            <ErrorMessage
              name="amenities"
              className={styles.error}
              component="p"
            />
            <fieldset className={styles.amenities}>
              <legend>Додатковий комфорт:</legend>
              <label htmlFor="wi-fi">
                <Field
                  type="checkbox"
                  id="wi-fi"
                  name="amenities"
                  value="Wi-Fi"
                // defaultChecked
                />
                Wi-Fi
              </label>
              <label htmlFor="smartTV">
                <Field
                  type="checkbox"
                  id="smartTV"
                  name="amenities"
                  value="Smart TV"
                />
                Smart TV
              </label>
              <label htmlFor="airCond">
                <Field
                  type="checkbox"
                  id="airCond"
                  name="amenities"
                  value="Кондиціонер"
                />
                Кондиціонер
              </label>
              <label htmlFor="bath">
                <Field
                  type="checkbox"
                  id="bath"
                  name="amenities"
                  value="Ванна"
                />
                Ванна
              </label>
              <label htmlFor="shower">
                <Field
                  type="checkbox"
                  id="shower"
                  name="amenities"
                  value="Душова кабіна"
                />
                Душова кабіна
              </label>
              <label htmlFor="jacuzzi">
                <Field
                  type="checkbox"
                  id="jacuzzi"
                  name="amenities"
                  value="Джакузі"
                />
                Джакузі
              </label>
              <label htmlFor="waterHeater">
                <Field
                  type="checkbox"
                  id="waterHeater"
                  name="amenities"
                  value="Водонагрівач"
                />
                Водонагрівач
              </label>
              <label htmlFor="boiler">
                <Field
                  type="checkbox"
                  id="boiler"
                  name="amenities"
                  value="Котел"
                />
                Котел
              </label>
              <label htmlFor="washingMachine">
                <Field
                  type="checkbox"
                  id="washingMachine"
                  name="amenities"
                  value="Пральна машина"
                />
                Пральна машина
              </label>
              <label htmlFor="microwave">
                <Field
                  type="checkbox"
                  id="microwave"
                  name="amenities"
                  value="Мікрохвильова піч"
                />
                Мікрохвильова піч
              </label>
              <label htmlFor="balcony">
                <Field
                  type="checkbox"
                  id="balcony"
                  name="amenities"
                  value="Балкон"
                />
                Балкон
              </label>
              <label htmlFor="parking">
                <Field
                  type="checkbox"
                  id="parking"
                  name="amenities"
                  value="Парковка"
                />
                Парковка
              </label>
            </fieldset>

            <ErrorMessage
              name="bedsQuantity"
              className={styles.error}
              component="p"
            />
            <fieldset className={styles.bedsQuantity}>
              <legend>Кількість спальних місць:</legend>
              <Field type="radio" id="twoBeds" name="bedsQuantity" value="2" />
              <label htmlFor="twoBeds">2</label>
              <Field
                type="radio"
                id="threeBeds"
                name="bedsQuantity"
                value="3"
              />
              <label htmlFor="threeBeds">3</label>
              <Field type="radio" id="fourBeds" name="bedsQuantity" value="4" />
              <label htmlFor="fourBeds">4</label>
              <Field type="radio" id="fiveBeds" name="bedsQuantity" value="5" />
              <label htmlFor="fiveBeds">5</label>
              <Field type="radio" id="sixBeds" name="bedsQuantity" value="6" />
              <label htmlFor="sixBeds">6</label>
            </fieldset>

            <label htmlFor="description">Опис:</label>
            <ErrorMessage
              name="description"
              className={styles.error}
              component="p"
            />
            <Field
              as="textarea"
              type="text"
              name="description"
              id="description"
              maxLength="500"
              placeholder="Між кожним блоком повинні бути пробіл вертикальна риска пробіл. Перший блок інформації. | Другий блок інформації. | Третій блок інформації. | Четвертий блок інформації."
              className={styles.textarea}
              rows={5}
            />

            <label htmlFor="descriptionEn">Опис англійською:</label>
            <ErrorMessage
              name="descriptionEn"
              className={styles.error}
              component="p"
            />
            <Field
              as="textarea"
              type="text"
              name="descriptionEn"
              id="descriptionEn"
              placeholder="First information block. | Second information block. | Third information block. | Fourth information block."
              className={styles.textarea}
              rows={5}
            />

            <button
              type="submit"
              disabled={!isValid}
              className={
                isValid ? `${styles.button} ${styles.sendBtn}` : styles.button
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

export default DashboardForm;
