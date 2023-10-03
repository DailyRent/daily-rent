import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
// import Link from 'next/link';
import { notFound } from 'next/navigation';
import UpdatingForm from '@/components/UpdatingForm/UpdatingForm';


async function getDataById(id) {

    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/apartments/${id}`, { cache: 'no-store' })

    if (!res.ok) {
        return notFound();
    }

    return res.json()
}


const EditCard = async ({ params }) => {
    const { id } = params;
    const apart = await getDataById(id);


    return <div className={styles.container}>
        <div key={apart._id} className={styles.apartment}>
            <h2>Обʼєкт №: {apart.objNumber}</h2>
            <p>Топ: {apart.top ? "Так" : "Ні"}</p>
            <p>Основне фото:</p>
            <div className={styles.imgContainer}>
                <Image
                    src={apart.titleImg}
                    alt={apart.address}
                    fill={true}
                    className={styles.img}
                />
            </div>
            <p>Додаткові фото:</p>
            <ul className={styles.imgsWrapper}>{apart.imgs.map((item, index) => (<li className={styles.imgCont} key={index}>
                <Image
                    src={item}
                    alt="Interior photo"
                    fill={true}
                    className={styles.img}
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

        <UpdatingForm id={id} apart={apart} className={styles.updatingForm} />

    </div>
}


export default EditCard;