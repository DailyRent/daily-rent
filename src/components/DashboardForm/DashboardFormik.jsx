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
import { dashboardSchema } from "@/yupShemas/dashboardShema";
import { useFetcherObjectNumbers } from "@/hooks/useFetcher";
import { GetData } from "@/fetch/clientFetch";
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
      // validationSchema={dashboardSchema}
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
            <ErrorMessage
              name="titleImg"
              className={styles.error}
              component="p"
            />
            <CldUploadButton
              name="titleImg"
              onUpload={(result, widget) => {
                // for Image component
                // setTitleImg(result.info.secure_url);
                setFieldValue("titleImg", result.info.secure_url);
                // for CldImage component from next-cloudinary
                // setTitleImg(result.info.public_id);
                widget.close();
              }}
              uploadPreset="unsigned_preset"
            >
              Завантажити ОСНОВНЕ фото (тільки .WEBP)
            </CldUploadButton>
            <ErrorMessage name="imgs" className={styles.error} component="p" />
            <CldUploadButton
              name="imgs"
              onUpload={(result) => {
                // for Image component
                setFieldValue("imgs", [...values.imgs, result.info.secure_url]);
                // for CldImage component from next-cloudinary
                // setImgs(prev => [...prev, result.info.public_id]);
              }}
              uploadPreset="unsigned_preset"
            >
              Завантажити додаткові фото (тільки .WEBP)
            </CldUploadButton>
            <label htmlFor="address">Адреса:</label>
            <ErrorMessage
              name="address"
              id="address"
              maxLength="100"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="address"
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
              id="aaddressEn"
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
              id="Price"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              name="price"
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
            <label htmlFor="Description">Опис:</label>
            <ErrorMessage
              name="description"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              as="textarea"
              name="description"
              id="Description"
              maxLength="300"
              placeholder="Гарна квартира з видом на сад."
              className={styles.textarea}
            />
            <label htmlFor="DescriptionEn">Опис англійською:</label>
            <ErrorMessage
              name="descriptionEn"
              className={styles.error}
              component="p"
            />
            <Field
              type="text"
              as="textarea"
              name="descriptionEn"
              id="DescriptionEn"
              maxLength="300"
              placeholder="Good apartment with view on garden."
              className={styles.textarea}
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

export default DashboardFormik;
