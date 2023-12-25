"use client";
import React, { useState } from "react";
import styles from "./UpdatingForm.module.scss";
import { CldUploadButton } from "next-cloudinary";
import { toast } from "react-toastify";

const UpdatingForm = ({ id, apart, mutate }) => {
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
  } = apart;
  const [newTop, setNewTop] = useState(top);
  const [newTitleImg, setNewTitleImg] = useState(titleImg);
  const [newImgs, setNewImgs] = useState(imgs);
  const [newAddress, setNewAddress] = useState(address);
  const [newAddressEn, setNewAddressEn] = useState(addressEn);
  const [newFlatNumber, setNewFlatNumber] = useState(flatNumber);
  const [newGoogleMapLocation, setNewGoogleMapLocation] =
    useState(googleMapLocation);
  const [newPrice, setNewPrice] = useState(price);
  const [newRoomsQuantity, setNewRoomsQuantity] = useState(roomsQuantity);
  const [newBookingUrl, setNewBookingUrl] = useState(bookingUrl);
  const [newAmenities, setNewAmenities] = useState(amenities);
  const [wifi, setWifi] = useState(newAmenities.includes("Wi-Fi"));
  const [smartTV, setSmartTV] = useState(newAmenities.includes("Smart TV"));
  const [airCond, setAirCond] = useState(newAmenities.includes("Кондиціонер"));
  const [bath, setBath] = useState(newAmenities.includes("Ванна"));
  const [shower, setShower] = useState(newAmenities.includes("Душова кабіна"));
  const [jacuzzi, setJacuzzi] = useState(newAmenities.includes("Джакузі"));
  const [waterHeater, setWaterHeater] = useState(
    newAmenities.includes("Водонагрівач")
  );
  const [boiler, setBoiler] = useState(newAmenities.includes("Котел"));
  const [washingMachine, setWashingMachine] = useState(
    newAmenities.includes("Пральна машина")
  );
  const [microwave, setMicrowave] = useState(
    newAmenities.includes("Мікрохвильова піч")
  );
  const [balcony, setBalcony] = useState(newAmenities.includes("Балкон"));
  const [parking, setParking] = useState(newAmenities.includes("Парковка"));

  // сохраняет значение ТОП в state в зависимости от checked
  function checkboxSwitchForTop(e) {
    if (e.target.checked) {
      setNewTop(true);
    } else {
      setNewTop(false);
    }
  }

  // изменяет количество комнат в зависимости от значения checked
  const changeRoomsQuantity = (e) => {
    setNewRoomsQuantity(e.target.value);
  };

  // // изменяет количество дополнительных опций в зависимости от нажатых checked
  const changeAmenities = (e) => {
    // проверяет есть ли данная опция в массиве
    const isAmenityIn = newAmenities.find((item) => item === e.target.value);
    if (isAmenityIn) {
      // если есть - она удаляется и создается новый массив, который далее сохраняется
      const newArr = newAmenities.filter((item) => item !== e.target.value);
      setNewAmenities(newArr);

      //перебирает всё и меняет state у элемента с e.target.value
      switch (e.target.value) {
        case "Wi-Fi":
          setWifi(false);
          break;
        case "Smart TV":
          setSmartTV(false);
          break;
        case "Кондиціонер":
          setAirCond(false);
          break;
        case "Ванна":
          setBath(false);
          break;
        case "Душова кабіна":
          setShower(false);
          break;
        case "Джакузі":
          setJacuzzi(false);
          break;
        case "Водонагрівач":
          setWaterHeater(false);
          break;
        case "Котел":
          setBoiler(false);
          break;
        case "Пральна машина":
          setWashingMachine(false);
          break;
        case "Мікрохвильова піч":
          setMicrowave(false);
          break;
        case "Балкон":
          setBalcony(false);
          break;
        case "Парковка":
          setParking(false);
          break;
        default:
          console.log("Все удобства после удаления:", newAmenities);
      }
    } else {
      // если данной опции нет - добавляется в массив
      const newArray = [...newAmenities, e.target.value];
      setNewAmenities(newArray);

      //перебирает всё и меняет state у элемента с e.target.value
      switch (e.target.value) {
        case "Wi-Fi":
          setWifi(true);
          break;
        case "Smart TV":
          setSmartTV(true);
          break;
        case "Кондиціонер":
          setAirCond(true);
          break;
        case "Ванна":
          setBath(true);
          break;
        case "Душова кабіна":
          setShower(true);
          break;
        case "Джакузі":
          setJacuzzi(true);
          break;
        case "Водонагрівач":
          setWaterHeater(true);
          break;
        case "Котел":
          setBoiler(true);
          break;
        case "Пральна машина":
          setWashingMachine(true);
          break;
        case "Мікрохвильова піч":
          setMicrowave(true);
          break;
        case "Балкон":
          setBalcony(true);
          break;
        case "Парковка":
          setParking(true);
          break;
        default:
          console.log("Все удобства после добавления:", newAmenities);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        }),
      });
      mutate();
      toast.info(`Дані обʼєкту №: ${objNumber} оновлено`, {
        theme: "colored",
      });
    } catch (err) {
      console.log(err);
      toast.error(`Помилка! Обʼєкт №: ${objNumber} не оновлено`);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Редагування обʼєкту</h1>
        <p>Номер обʼєкту: {objNumber}</p>
        <label htmlFor="Top" className={styles.top}>
          <input
            type="checkbox"
            id="Top"
            name="Top"
            onChange={checkboxSwitchForTop}
            checked={newTop}
          />
          ТОП
        </label>
        <CldUploadButton
          onUpload={(result, widget) => {
            // for Image component
            setNewTitleImg(result.info.secure_url);
            // for CldImage component from next-cloudinary
            // setNewTitleImg(result.info.public_id);
            widget.close();
          }}
          uploadPreset="unsigned_preset"
        >
          Змінити ОСНОВНЕ фото
        </CldUploadButton>
        <CldUploadButton
          onUpload={(result) => {
            // for Image component
            setNewImgs((prev) => [...prev, result.info.secure_url]);
            // for CldImage component from next-cloudinary
            // setNewImgs(prev => [...prev, result.info.public_id]);
          }}
          uploadPreset="unsigned_preset"
        >
          Додати додаткові фото
        </CldUploadButton>
        <label>
          {" "}
          Адреса:
          <input
            type="text"
            className={styles.input}
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Адреса англійською:
          <input
            type="text"
            placeholder="Адреса англійською"
            className={styles.input}
            value={newAddressEn}
            onChange={(e) => setNewAddressEn(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Квартира:
          <input
            type="text"
            placeholder="Квартира"
            className={styles.input}
            value={newFlatNumber}
            onChange={(e) => setNewFlatNumber(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Місцезнаходження:
          <input
            type="text"
            placeholder="Місцезнаходження"
            className={styles.input}
            value={newGoogleMapLocation}
            onChange={(e) => setNewGoogleMapLocation(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Ціна:
          <input
            type="text"
            placeholder="Ціна"
            className={styles.input}
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </label>
        <fieldset className={styles.roomsQuantity}>
          <legend>Кількість кімнат:</legend>
          <input
            type="radio"
            id="oneRoom"
            name="roomsQuantity"
            value="1"
            onChange={changeRoomsQuantity}
            checked={newRoomsQuantity === "1"}
          />
          <label htmlFor="oneRoom">1</label>
          <input
            type="radio"
            id="twoRooms"
            name="roomsQuantity"
            value="2"
            onChange={changeRoomsQuantity}
            checked={newRoomsQuantity === "2"}
          />
          <label htmlFor="twoRooms">2</label>
          <input
            type="radio"
            id="threeRooms"
            name="roomsQuantity"
            value="3"
            onChange={changeRoomsQuantity}
            checked={newRoomsQuantity === "3"}
          />
          <label htmlFor="threeRooms">3</label>
        </fieldset>
        <label>
          {" "}
          Booking.com:
          <input
            type="text"
            placeholder="bookingUrl"
            className={styles.input}
            value={newBookingUrl}
            onChange={(e) => setNewBookingUrl(e.target.value)}
          />
        </label>
        <fieldset className={styles.amenities}>
          <legend>Додатковий комфорт:</legend>
          <label htmlFor="wi-fi">
            <input
              type="checkbox"
              id="wi-fi"
              name="wi-fi"
              value="Wi-Fi"
              onChange={changeAmenities}
              checked={wifi}
            />
            Wi-Fi
          </label>
          <label htmlFor="smartTV">
            <input
              type="checkbox"
              id="smartTV"
              name="smartTV"
              value="Smart TV"
              onChange={changeAmenities}
              checked={smartTV}
            />
            Smart TV
          </label>
          <label htmlFor="airCond">
            <input
              type="checkbox"
              id="airCond"
              name="airCond"
              value="Кондиціонер"
              onChange={changeAmenities}
              checked={airCond}
            />
            Кондиціонер
          </label>
          <label htmlFor="bath">
            <input
              type="checkbox"
              id="bath"
              name="bath"
              value="Ванна"
              onChange={changeAmenities}
              checked={bath}
            />
            Ванна
          </label>
          <label htmlFor="shower">
            <input
              type="checkbox"
              id="shower"
              name="shower"
              value="Душова кабіна"
              onChange={changeAmenities}
              checked={shower}
            />
            Душова кабіна
          </label>
          <label htmlFor="jacuzzi">
            <input
              type="checkbox"
              id="jacuzzi"
              name="jacuzzi"
              value="Джакузі"
              onChange={changeAmenities}
              checked={jacuzzi}
            />
            Джакузі
          </label>
          <label htmlFor="waterHeater">
            <input
              type="checkbox"
              id="waterHeater"
              name="waterHeater"
              value="Водонагрівач"
              onChange={changeAmenities}
              checked={waterHeater}
            />
            Водонагрівач
          </label>
          <label htmlFor="boiler">
            <input
              type="checkbox"
              id="boiler"
              name="boiler"
              value="Котел"
              onChange={changeAmenities}
              checked={boiler}
            />
            Котел
          </label>
          <label htmlFor="washingMachine">
            <input
              type="checkbox"
              id="washingMachine"
              name="washingMachine"
              value="Пральна машина"
              onChange={changeAmenities}
              checked={washingMachine}
            />
            Пральна машина
          </label>
          <label htmlFor="microwave">
            <input
              type="checkbox"
              id="microwave"
              name="microwave"
              value="Мікрохвильова піч"
              onChange={changeAmenities}
              checked={microwave}
            />
            Мікрохвильова піч
          </label>
          <label htmlFor="balcony">
            <input
              type="checkbox"
              id="balcony"
              name="balcony"
              value="Балкон"
              onChange={changeAmenities}
              checked={balcony}
            />
            Балкон
          </label>
          <label htmlFor="parking">
            <input
              type="checkbox"
              id="parking"
              name="parking"
              value="Парковка"
              onChange={changeAmenities}
              checked={parking}
            />
            Парковка
          </label>
        </fieldset>

        <button type="submit" className={styles.sendBtn}>
          Оновити дані обʼєкту
        </button>
      </form>
    </div>
  );
};

export default UpdatingForm;
