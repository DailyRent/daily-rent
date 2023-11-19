"use client";

import { CldUploadButton } from "next-cloudinary";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { upDashboardSchema } from "@/yupShemas/upDashboardShema";
import { toast } from "react-toastify";
import styles from "./UpdatingForm.module.scss";

const UpdatingFormik = ({ id, apart, mutate }) => {
  const {
    objNumber,
    top,
    titleImg,
    imgs,
    address,
    addressEn,
    flatNumber,
    googleMapLocation,
    price,
    roomsQuantity,
    bookingUrl,
    amenities,
    description,
    descriptionEn,
  } = apart;

  const initialValues = {
    newTop: top,
    newTitleImg: titleImg,
    newImgs: imgs,
    newAddress: address,
    newAddressEn: addressEn,
    newFlatNumber: flatNumber,
    newGoogleMapLocation: googleMapLocation,
    newPrice: price,
    newRoomsQuantity: roomsQuantity,
    newBookingUrl: bookingUrl,
    newAmenities: amenities,
    newDescription: description,
    newDescriptionEn: descriptionEn,
  };

  const handleSubmit = async (values, actions) => {
    const {
      newTop,
      newTitleImg,
      newImgs,
      newAddress,
      newAddressEn,
      newFlatNumber,
      newGoogleMapLocation,
      newPrice,
      newRoomsQuantity,
      newBookingUrl,
      newAmenities,
      newDescription,
      newDescriptionEn,
    } = values;
    try {
      await fetch(`/api/apartments/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          top: newTop,
          titleImg: newTitleImg,
          imgs: newImgs,
          address: newAddress,
          addressEn: newAddressEn,
          flatNumber: newFlatNumber,
          googleMapLocation: newGoogleMapLocation,
          price: newPrice,
          roomsQuantity: newRoomsQuantity,
          bookingUrl: newBookingUrl,
          amenities: newAmenities,
          description: newDescription,
          descriptionEn: newDescriptionEn,
        }),
      });
      // автоматично обновлює строрінку при зміні кількості карточок
      mutate();
      // обнуляє форму
      actions.resetForm();
      toast.info(`Дані обʼєкту №: ${objNumber} оновлено`);
    } catch (err) {
      console.log(err);
      toast.error(`Помилка! Обʼєкт №: ${objNumber} не оновлено`);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={upDashboardSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values, actions);
        }}
      >
        {(formik) => {
          const { isValid, values, setFieldValue } = formik;

          return (
            <Form className={styles.new}>
              <h1>Редагування обʼєкту</h1>
              <p>Номер обʼєкту: {objNumber}</p>

              <label htmlFor="newTop" className={styles.top}>
                <Field
                  type="checkbox"
                  name="newTop"
                  id="newTop"
                  checked={values.newTop}
                />
                ТОП
              </label>

              <ErrorMessage
                name="newTitleImg"
                className={styles.error}
                component="p"
              />
              <CldUploadButton
                name="newTitleImg"
                onUpload={(result, widget) => {
                  setFieldValue("newTitleImg", result.info.secure_url);
                  widget.close();
                }}
                uploadPreset="unsigned_preset"
              >
                Змінити ОСНОВНЕ фото
              </CldUploadButton>
              <ErrorMessage
                name="newImgs"
                className={styles.error}
                component="p"
              />
              <CldUploadButton
                name="newImgs"
                onUpload={(result) => {
                  setFieldValue("newImgs", [
                    ...values.newImgs,
                    result.info.secure_url,
                  ]);
                }}
                uploadPreset="unsigned_preset"
              >
                Додати додаткові фото
              </CldUploadButton>
              <label htmlFor="newAddress">Адреса:</label>
              <ErrorMessage
                name="newAddress"
                id="newAddress"
                maxLength="100"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newAddress"
                maxLength="100"
                value={values.newAddress}
                className={styles.input}
              />
              <label htmlFor="newAddressEn">Адреса англійською:</label>
              <ErrorMessage
                name="newAddressEn"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newAddressEn"
                id="newAddressEn"
                value={values.newAddressEn}
                className={styles.input}
              />
              <label htmlFor="newFlatNumber">Квартира:</label>
              <ErrorMessage
                name="newFlatNumber"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newFlatNumber"
                id="newFlatNumber"
                maxLength="8"
                value={values.newFlatNumber}
                className={styles.input}
              />
              <label htmlFor="Location"> Місцезнаходження:</label>
              <ErrorMessage
                name="newGoogleMapLocation"
                className={styles.error}
                component="p"
              />

              <Field
                type="text"
                name="newGoogleMapLocation"
                id="Location"
                value={values.newGoogleMapLocation}
                className={styles.input}
              />
              <label htmlFor="Price">Ціна:</label>
              <ErrorMessage
                name="newPrice"
                id="Price"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newPrice"
                maxLength="7"
                value={values.newPrice}
                className={styles.input}
              />
              <ErrorMessage
                name="newRoomsQuantity"
                className={styles.error}
                component="p"
              />
              <fieldset className={styles.roomsQuantity}>
                <legend>Кількість кімнат:</legend>
                <Field
                  type="radio"
                  id="oneRoom"
                  name="newRoomsQuantity"
                  value="1"
                />
                <label htmlFor="oneRoom">1</label>
                <Field
                  type="radio"
                  id="twoRooms"
                  name="newRoomsQuantity"
                  value="2"
                />
                <label htmlFor="twoRooms">2</label>
                <Field
                  type="radio"
                  id="threeRooms"
                  name="newRoomsQuantity"
                  value="3"
                />
                <label htmlFor="threeRooms">3</label>
              </fieldset>
              <label html="Booking">Booking.com:</label>
              <ErrorMessage
                name="newBookingUrl"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                name="newBookingUrl"
                id="Booking"
                value={values.newBookingUrl}
                className={styles.input}
              />
              <fieldset className={styles.amenities}>
                <legend>Додатковий комфорт:</legend>
                <label htmlFor="wi-fi">
                  <Field
                    type="checkbox"
                    id="wi-fi"
                    name="newAmenities"
                    value="Wi-Fi"
                  />
                  Wi-Fi
                </label>
                <label htmlFor="smartTV">
                  <Field
                    type="checkbox"
                    id="smartTV"
                    name="newAmenities"
                    value="Smart TV"
                  />
                  Smart TV
                </label>
                <label htmlFor="airCond">
                  <Field
                    type="checkbox"
                    id="airCond"
                    name="newAmenities"
                    value="Кондиціонер"
                  />
                  Кондиціонер
                </label>
                <label htmlFor="bath">
                  <Field
                    type="checkbox"
                    id="bath"
                    name="newAmenities"
                    value="Ванна"
                  />
                  Ванна
                </label>
                <label htmlFor="shower">
                  <Field
                    type="checkbox"
                    id="shower"
                    name="newAmenities"
                    value="Душова кабіна"
                  />
                  Душова кабіна
                </label>
                <label htmlFor="jacuzzi">
                  <Field
                    type="checkbox"
                    id="jacuzzi"
                    name="newAmenities"
                    value="Джакузі"
                  />
                  Джакузі
                </label>
                <label htmlFor="waterHeater">
                  <Field
                    type="checkbox"
                    id="waterHeater"
                    name="newAmenities"
                    value="Водонагрівач"
                  />
                  Водонагрівач
                </label>
                <label htmlFor="boiler">
                  <Field
                    type="checkbox"
                    id="boiler"
                    name="newAmenities"
                    value="Котел"
                  />
                  Котел
                </label>
                <label htmlFor="washingMachine">
                  <Field
                    type="checkbox"
                    id="washingMachine"
                    name="newAmenities"
                    value="Пральна машина"
                  />
                  Пральна машина
                </label>
                <label htmlFor="microwave">
                  <Field
                    type="checkbox"
                    id="microwave"
                    name="newAmenities"
                    value="Мікрохвильова піч"
                  />
                  Мікрохвильова піч
                </label>
                <label htmlFor="balcony">
                  <Field
                    type="checkbox"
                    id="balcony"
                    name="newAmenities"
                    value="Балкон"
                  />
                  Балкон
                </label>
                <label htmlFor="parking">
                  <Field
                    type="checkbox"
                    id="parking"
                    name="newAmenities"
                    value="Парковка"
                  />
                  Парковка
                </label>
              </fieldset>
              <label htmlFor="Description">Опис:</label>
              <ErrorMessage
                name="newDescription"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                as="textarea"
                name="newDescription"
                id="Description"
                maxLength="300"
                value={values.newDescription}
                className={styles.textarea}
              />
              <label htmlFor="DescriptionEn">Опис англійською:</label>
              <ErrorMessage
                name="newDescriptionEn"
                className={styles.error}
                component="p"
              />
              <Field
                type="text"
                as="textarea"
                name="newDescriptionEn"
                id="DescriptionEn"
                maxLength="300"
                value={values.newDescriptionEn}
                className={styles.textarea}
              />

              <button
                type="submit"
                disabled={!isValid}
                className={
                  isValid ? `${styles.button} ${styles.sendBtn}` : styles.button
                }
              >
                Оновити дані обʼєкту
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UpdatingFormik;
