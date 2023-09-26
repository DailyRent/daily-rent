"use client";
import React from 'react';
import styles from './page.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';


const Dashboard = () => {
    const session = useSession();
    // console.log("session", session);

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


    if (session.status === "authenticated" && session.data.user.email === process.env.NEXT_PUBLIC_ADMIN) {
        return <div className={styles.container}>
            <div className={styles.apartments}>
                {isLoading
                    ? <p>Loading...</p>
                    : data?.map(apart => (
                        <div key={apart._id} className={styles.apartment}>
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

                            <span className={styles.delete}
                            // onClick={() => handleDelete(card._id)}
                            >X</span>
                        </div>))}
            </div>

            <form className={styles.new}
            // onSubmit={handleSubmit}
            >
                <h1>Додавання нового обʼєкту</h1>
                <input type='text' placeholder="Номер обʼєкту" className={styles.input} />
                <label htmlFor="Top" className={styles.top}>
                    <input type="checkbox" id="Top" name="Top" value="Top" />Топ
                </label>
                <input type='text' placeholder='Основне фото' className={styles.input} />
                <input type='text' placeholder='Додаткові фото' className={styles.input} />
                <input type='text' placeholder='Адреса' className={styles.input} />
                <input type='text' placeholder='Квартира' className={styles.input} />
                <input type='text' placeholder='Місцезнаходження' className={styles.input} />
                <input type='text' placeholder='Ціна' className={styles.input} />
                <fieldset className={styles.roomsQuantity}><legend>Кількість кімнат:</legend>
                    <input type="radio" id="oneRoom" name="roomsQuantity" value="1" />
                    <label htmlFor="oneRoom">1</label>
                    <input type="radio" id="twoRooms" name="roomsQuantity" value="2" />
                    <label htmlFor="twoRooms">2</label>
                    <input type="radio" id="threeRooms" name="roomsQuantity" value="3" />
                    <label htmlFor="threeRooms">3</label>
                </fieldset>
                <input type='text' placeholder='bookingUrl' className={styles.input} />
                <fieldset className={styles.amenities}><legend>Додатковий комфорт:</legend>

                    <label htmlFor="airCond">
                        <input type="checkbox" id="airCond" name="airCond" value="Кондиціонер" />
                        Кондиціонер
                    </label>
                    <label htmlFor="smartTV">
                        <input type="checkbox" id="smartTV" name="smartTV" value="СмартТВ" />
                        СмартТВ
                    </label>
                    <label htmlFor="bath">
                        <input type="checkbox" id="bath" name="bath" value="Ванна" />
                        Ванна
                    </label>
                    <label htmlFor="shower">
                        <input type="checkbox" id="shower" name="shower" value="Душ" />
                        Душ
                    </label>
                    <label htmlFor="jacuzzi">
                        <input type="checkbox" id="jacuzzi" name="jacuzzi" value="Джакузі" />
                        Джакузі
                    </label>
                    <label htmlFor="microwave">
                        <input type="checkbox" id="microwave" name="microwave" value="Мікрохвильова піч" />
                        Мікрохвильова піч
                    </label>
                    <label htmlFor="washingMachine">
                        <input type="checkbox" id="washingMachine" name="washingMachine" value="Пральна машина" />
                        Пральна машина
                    </label>
                    <label htmlFor="balcony">
                        <input type="checkbox" id="balcony" name="balcony" value="Балкон" />
                        Балкон
                    </label>
                    <label htmlFor="boiler">
                        <input type="checkbox" id="boiler" name="boiler" value="Бойлер" />
                        Бойлер
                    </label>
                    <label htmlFor="waterHeater">
                        <input type="checkbox" id="waterHeater" name="waterHeater" value="Водонагрівач" />
                        Водонагрівач
                    </label>
                    <label htmlFor="parking">
                        <input type="checkbox" id="parking" name="parking" value="Паркінг" />
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