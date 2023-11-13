"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { CldImage, CldUploadButton } from "next-cloudinary";

const Dashboard = () => {
  const session = useSession();

  const [objNumber, setObjNumber] = useState("");
  const [top, setTop] = useState(false);
  const [titleImg, setTitleImg] = useState("");
  const [imgs, setImgs] = useState([]);
  const [address, setAddress] = useState("");
  const [addressEn, setAddressEn] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const [googleMapLocation, setGoogleMapLocation] = useState("");
  const [price, setPrice] = useState("");
  const [roomsQuantity, setRoomsQuantity] = useState("");
  const [bookingUrl, setBookingUrl] = useState("");
  const [amenities, setAmenities] = useState(["Wi-Fi"]);
  const [description, setDescription] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR("/api/apartments", fetcher);

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (
    session.status === "authenticated" &&
    session.data.user.email !== process.env.NEXT_PUBLIC_ADMIN
  ) {
    router.push("/");
  }

  const changeAmenities = (e) => {
    if (e.target.checked) {
      const newArray = [...amenities, e.target.value];
      setAmenities(newArray);
    } else {
      const newArr = amenities.filter((item) => item !== e.target.value);
      setAmenities(newArr);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/apartments", {
        method: "POST",
        body: JSON.stringify({
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
        }),
      });
      // автоматически обновляет страницу при изменении кол-ва карточек
      mutate();
      // обнуляет все поля формы
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/apartments/${id}`, { method: "DELETE" });
      // автоматически обновляет страницу при изменении кол-ва карточек
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (
    session.status === "authenticated" &&
    session.data.user.email === process.env.NEXT_PUBLIC_ADMIN
  ) {
    return (
      <div className={styles.container}>
        <div className={styles.apartments}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.map((apart) => (
              <div key={apart._id} className={styles.apartment}>
                <div className={styles.contentWrapper}>
                  <h2>Обʼєкт №: {apart.objNumber}</h2>
                  {apart.top ? <p>ТОП</p> : null}
                  <p>Основне фото:</p>
                  {/* <div className={styles.imgContainer}>
                                    <Image src={apart.titleImg} alt={apart.address} fill={true} sizes='20vw' priority={true} />
                                </div> */}
                  <CldImage
                    width="300"
                    height="150"
                    crop="fill"
                    // src="<Public ID>"
                    // src="Classic-cars_yb6gby"
                    src={apart.titleImg}
                    alt="apartment photo"
                  />
                  <p>Додаткові фото:</p>
                  <ul className={styles.imgsWrapper}>
                    {apart.imgs.map((item, index) => (
                      <li className={styles.imgsCont} key={index}>
                        <Image
                          src={item}
                          alt="Interior photo"
                          fill={true}
                          sizes="10vw"
                        />
                      </li>
                    ))}
                  </ul>
                  <p className={styles.address}>Адреса: {apart.address}</p>
                  <p className={styles.address}>
                    Адреса англійською: {apart.addressEn}
                  </p>
                  <p>Квартира: {apart.flatNumber}</p>
                  <Link
                    href={apart.googleMapLocation}
                    className={styles.location}
                  >
                    Місцезнаходження: {apart.googleMapLocation}
                  </Link>
                  <p>Ціна: {apart.price}</p>
                  <p>Кількість кімнат: {apart.roomsQuantity}</p>
                  <Link href={apart.bookingUrl} className={styles.platformLink}>
                    BookingUrl: {apart.bookingUrl}
                  </Link>
                  <ul>
                    Додатковий комфорт:{" "}
                    {apart.amenities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className={styles.description}>
                    Опис: {apart.description}
                  </p>
                  <p className={styles.description}>
                    Опис англійською: {apart.descriptionEn}
                  </p>
                </div>

                <div className={styles.btnsWrapper}>
                  <Link href={`/dashboard/${apart._id}`}>Редагувати</Link>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(apart._id)}
                  >
                    X
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Додавання нового обʼєкту</h1>
          <label htmlFor="ObjectNumber">
            Номер обʼєкту:
            <input
              type="text"
              id="ObjectNumber"
              placeholder="123"
              className={styles.input}
              onChange={(e) => setObjNumber(e.target.value)}
            />
          </label>
          <label htmlFor="Top" className={styles.top}>
            <input
              type="checkbox"
              id="Top"
              name="Top"
              onChange={(e) => setTop(e.target.checked)}
            />
            ТОП
          </label>
          <CldUploadButton
            onUpload={(result, widget) => {
              // for Image component
              setTitleImg(result.info.secure_url);
              // for CldImage component from next-cloudinary
              // setTitleImg(result.info.public_id);
              widget.close();
            }}
            uploadPreset="unsigned_preset"
          >
            Завантажити ОСНОВНЕ фото
          </CldUploadButton>
          <CldUploadButton
            onUpload={(result) => {
              // for Image component
              setImgs((prev) => [...prev, result.info.secure_url]);
              // for CldImage component from next-cloudinary
              // setImgs(prev => [...prev, result.info.public_id]);
            }}
            uploadPreset="unsigned_preset"
          >
            Завантажити додаткові фото
          </CldUploadButton>
          <label htmlFor="Address">
            Адреса:
            <input
              type="text"
              id="Address"
              placeholder="вул.Шевченка, буд.8"
              className={styles.input}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <label htmlFor="AddressEn">
            Адреса англійською:
            <input
              type="text"
              id="AddressEn"
              placeholder="Shevchenko street, h.8"
              className={styles.input}
              onChange={(e) => setAddressEn(e.target.value)}
            />
          </label>
          <label htmlFor="Flat">
            Квартира:
            <input
              type="text"
              id="Flat"
              placeholder="52"
              className={styles.input}
              onChange={(e) => setFlatNumber(e.target.value)}
            />
          </label>
          <label htmlFor="Location">
            Місцезнаходження:
            <input
              type="text"
              id="Location"
              placeholder="https://maps.app.goo.gl/Z8KyBtZDJyMEzNGf9"
              className={styles.input}
              onChange={(e) => setGoogleMapLocation(e.target.value)}
            />
          </label>
          <label htmlFor="Price">
            Ціна:
            <input
              type="text"
              id="Price"
              placeholder="950"
              className={styles.input}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <fieldset className={styles.roomsQuantity}>
            <legend>Кількість кімнат:</legend>
            <input
              type="radio"
              id="oneRoom"
              name="roomsQuantity"
              value="1"
              onChange={(e) => setRoomsQuantity(e.target.value)}
            />
            <label htmlFor="oneRoom">1</label>
            <input
              type="radio"
              id="twoRooms"
              name="roomsQuantity"
              value="2"
              onChange={(e) => setRoomsQuantity(e.target.value)}
            />
            <label htmlFor="twoRooms">2</label>
            <input
              type="radio"
              id="threeRooms"
              name="roomsQuantity"
              value="3"
              onChange={(e) => setRoomsQuantity(e.target.value)}
            />
            <label htmlFor="threeRooms">3</label>
          </fieldset>
          <label html="Booking">
            Booking.com:
            <input
              type="text"
              id="Booking"
              placeholder="https://www.booking.com/hotel/ua/luxury-apart-near-lavina-new-building-9-floor.ru.html?label=gen173nr-1BCAso6QFCLWx1eHVyeS1hcGFydC1uZWFyLWxhdmluYS1uZXctYnVpbGRpbmctOS1mbG9vckgzWARo6QGIAQGYASG4ARjIAQzYAQHoAQGIAgGoAgS4ApS6sKgGwAIB0gIkYTNhNDI3NWItMTNmNy00MzA1LTlmYjItZmEwZjQzMjM0OGIx2AIF4AIB&sid=977e4f801f547e2faa9a9841f1887242&dist=0&keep_landing=1&sb_price_type=total&type=total&"
              className={styles.input}
              onChange={(e) => setBookingUrl(e.target.value)}
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
                defaultChecked
                onChange={changeAmenities}
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
              />
              Парковка
            </label>
          </fieldset>
          <label htmlFor="Description">
            Опис:
            <input
              type="text"
              id="Description"
              placeholder="Гарна квартира з видом на сад."
              className={styles.input}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label htmlFor="DescriptionEn">
            Опис англійською:
            <input
              type="text"
              id="DescriptionEn"
              placeholder="Good apartment with view on garden."
              className={styles.input}
              onChange={(e) => setDescriptionEn(e.target.value)}
            />
          </label>

          <button type="submit" className={styles.sendBtn}>
            Створити новий обʼєкт
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
