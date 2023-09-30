"use client";
import React, { useState } from 'react';
import styles from './page.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';


const Dashboard = () => {
    const session = useSession();
    const [roomsQuantityValue, setRoomsQuantityValue] = useState("");
    const [amenitiesValues, setAmenitiesValues] = useState([]);

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR('/api/apartments', fetcher);

    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login');
    }

    if (session.status === "authenticated" && session.data.user.email !== process.env.NEXT_PUBLIC_ADMIN) {
        router.push("/")
    }

    const changeRoomsQuantity = (e) => {
        setRoomsQuantityValue(e.target.value);
    }

    const changeAmenities = (e) => {
        // проверяет есть ли квартира в массиве 
        const isAmenityIn = amenitiesValues.find(item => item === e.target.value);
        if (isAmenityIn) {
            // если есть - она удаляется и создается новый массив, который далее сохраняется
            const newArr = amenitiesValues.filter(item => item !== e.target.value)
            setAmenitiesValues(newArr);
        } else {
            // если квартиры нет - добавляется в массив
            const newArray = [...amenitiesValues, e.target.value];
            setAmenitiesValues(newArray);
        };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handleSubmit was started");
        console.log("e.target", e.target);
        const objNumber = e.target[0].value;
        const top = e.target[1].value;
        const titleImg = e.target[2].value;
        const imgs = e.target[3].value;
        const address = e.target[4].value;
        const flatNumber = e.target[5].value;
        const googleMapLocation = e.target[6].value;
        const price = e.target[7].value;
        const roomsQuantity = roomsQuantityValue;
        const bookingUrl = e.target[12].value;
        const amenities = amenitiesValues;
        const description = e.target[25].value;

        try {
            await fetch("/api/apartments", {
                method: "POST",
                body: JSON.stringify({
                    objNumber,
                    top,
                    titleImg,
                    imgs,
                    address,
                    flatNumber,
                    googleMapLocation,
                    price,
                    roomsQuantity,
                    bookingUrl,
                    amenities,
                    description
                })
            })
            // автоматически обновляет страницу при изменении кол-ва карточек
            mutate();
            // обнуляет все поля формы
            // e.target.reset();
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = async (id) => {
        try {
            await fetch(`/api/apartment/${id}`, { method: "DELETE" });
            // автоматически обновляет страницу при изменении кол-ва карточек
            mutate();
        } catch (error) {
            console.log(error);
        }
    }

    // меняет значение value на true или false в зависимости от checked
    function checkboxSwitchForTop(e) {
        if (e.target.checked) {
            e.target.value = true;
        }
        else {
            e.target.value = false;
        }
    }


    if (session.status === "authenticated" && session.data.user.email === process.env.NEXT_PUBLIC_ADMIN) {

        return <div className={styles.container}>
            <div className={styles.apartments}>
                {isLoading
                    ? <p>Loading...</p>
                    : data?.map(apart => (
                        <div key={apart._id} className={styles.apartment}>
                            <div className={styles.contentWrapper}>
                                <h2>Обʼєкт №: {apart.objNumber}</h2>
                                <p>Топ: {apart.top ? "Так" : "Ні"}</p>
                                <p>Основне фото:</p>
                                <div className={styles.imgContainer}>
                                    <Image src={apart.titleImg} alt={apart.address} fill={true} />
                                </div>
                                <p>Додаткові фото:</p>
                                <ul className={styles.imgsWrapper}>{apart.imgs.map((item, index) => (<li className={styles.imgsCont} key={index}>
                                    <Image
                                        src={item}
                                        alt="Interior photo"
                                        fill={true}
                                    />
                                </li>)
                                )}</ul>
                                <p>Адреса: {apart.address}</p>
                                <p>Квартира: {apart.flatNumber}</p>
                                <p>Місцезнаходження: {apart.googleMapLocation}</p>
                                <p>Ціна: {apart.price}</p>
                                <p>Кількість кімнат: {apart.roomsQuantity}</p>
                                <p className={styles.platformLink}>BookingUrl: {apart.bookingUrl}</p>
                                <ul>Додатковий комфорт: {apart.amenities.map((item, index) => (<li key={index}>{item}</li>))}
                                </ul>
                                <p>Опис: {apart.description}</p>
                            </div>

                            <div className={styles.btnsWrapper}>
                                <Link href={`/dashboard/${apart._id}`}>Edit Card</Link>
                                <span className={styles.delete} onClick={() => handleDelete(apart._id)}>X</span>
                            </div>
                        </div>))}
            </div>

            <form className={styles.new} onSubmit={handleSubmit}>
                <h1>Додавання нового обʼєкту</h1>
                <input type='text' placeholder="Номер обʼєкту" className={styles.input} />
                <label htmlFor="Top" className={styles.top}>
                    <input type="checkbox" id="Top" name="Top" onChange={checkboxSwitchForTop} />Топ
                </label>
                <input type='text' placeholder='Основне фото' className={styles.input} />
                <input type='text' placeholder='Додаткові фото' className={styles.input} />
                <input type='text' placeholder='Адреса' className={styles.input} />
                <input type='text' placeholder='Квартира' className={styles.input} />
                <input type='text' placeholder='Місцезнаходження' className={styles.input} />
                <input type='text' placeholder='Ціна' className={styles.input} />
                <fieldset className={styles.roomsQuantity}><legend>Кількість кімнат:</legend>
                    <input type="radio" id="oneRoom" name="roomsQuantity" value="1" onChange={changeRoomsQuantity} />
                    <label htmlFor="oneRoom">1</label>
                    <input type="radio" id="twoRooms" name="roomsQuantity" value="2" onChange={changeRoomsQuantity} />
                    <label htmlFor="twoRooms">2</label>
                    <input type="radio" id="threeRooms" name="roomsQuantity" value="3" onChange={changeRoomsQuantity} />
                    <label htmlFor="threeRooms">3</label>
                </fieldset>
                <input type='text' placeholder='bookingUrl' className={styles.input} />
                <fieldset className={styles.amenities}><legend>Додатковий комфорт:</legend>

                    <label htmlFor="airCond">
                        <input type="checkbox" id="airCond" name="airCond" value="Кондиціонер" onChange={changeAmenities} />
                        Кондиціонер
                    </label>
                    <label htmlFor="smartTV">
                        <input type="checkbox" id="smartTV" name="smartTV" value="СмартТВ" onChange={changeAmenities} />
                        СмартТВ
                    </label>
                    <label htmlFor="bath">
                        <input type="checkbox" id="bath" name="bath" value="Ванна" onChange={changeAmenities} />
                        Ванна
                    </label>
                    <label htmlFor="shower">
                        <input type="checkbox" id="shower" name="shower" value="Душ" onChange={changeAmenities} />
                        Душ
                    </label>
                    <label htmlFor="jacuzzi">
                        <input type="checkbox" id="jacuzzi" name="jacuzzi" value="Джакузі" onChange={changeAmenities} />
                        Джакузі
                    </label>
                    <label htmlFor="microwave">
                        <input type="checkbox" id="microwave" name="microwave" value="Мікрохвильова піч" onChange={changeAmenities} />
                        Мікрохвильова піч
                    </label>
                    <label htmlFor="washingMachine">
                        <input type="checkbox" id="washingMachine" name="washingMachine" value="Пральна машина" onChange={changeAmenities} />
                        Пральна машина
                    </label>
                    <label htmlFor="balcony">
                        <input type="checkbox" id="balcony" name="balcony" value="Балкон" onChange={changeAmenities} />
                        Балкон
                    </label>
                    <label htmlFor="boiler">
                        <input type="checkbox" id="boiler" name="boiler" value="Бойлер" onChange={changeAmenities} />
                        Бойлер
                    </label>
                    <label htmlFor="waterHeater">
                        <input type="checkbox" id="waterHeater" name="waterHeater" value="Водонагрівач" onChange={changeAmenities} />
                        Водонагрівач
                    </label>
                    <label htmlFor="parking">
                        <input type="checkbox" id="parking" name="parking" value="Паркінг" onChange={changeAmenities} />
                        Паркінг
                    </label>
                </fieldset>
                <input type='text' placeholder='Опис' className={styles.input} />
                <button className={styles.sendBtn}>Send</button>
            </form>
        </div>
    }
}


export default Dashboard;