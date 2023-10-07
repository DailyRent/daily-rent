"use client";
import React from 'react';
import styles from './page.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';
import UpdatingForm from '@/components/UpdatingForm/UpdatingForm';


const EditCard = ({ params }) => {
    const { id } = params;

    const session = useSession();

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR(`/api/apartments/${id}`, fetcher);

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
            {isLoading
                ? <p>Loading...</p>
                : <div key={data._id} className={styles.apartment}>
                    <h2>Обʼєкт №: {data.objNumber}</h2>
                    <p>Топ: {data.top ? "Так" : "Ні"}</p>
                    <p>Основне фото:</p>
                    <div className={styles.imgContainer}>
                        <Image
                            src={data.titleImg}
                            alt={data.address}
                            fill={true}
                            className={styles.img}
                        />
                    </div>
                    <p>Додаткові фото:</p>
                    <ul className={styles.imgsWrapper}>{data.imgs.map((item, index) => (<li className={styles.imgCont} key={index}>
                        <Image
                            src={item}
                            alt="Interior photo"
                            fill={true}
                            className={styles.img}
                        />
                    </li>)
                    )}</ul>
                    <p>Адреса: {data.address}</p>
                    <p>Квартира: {data.flatNumber}</p>
                    <p>Місцезнаходження: {data.googleMapLocation}</p>
                    <p>Ціна: {data.price}</p>
                    <p>Кількість кімнат: {data.roomsQuantity}</p>
                    <p className={styles.platformLink}>BookingUrl: {data.bookingUrl}</p>
                    <ul>Додатковий комфорт: {data.amenities.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                    <p>Опис: {data.description}</p>
                </div>}

            {isLoading
                ? <p>Loading</p>
                : <UpdatingForm id={id} apart={data} className={styles.updatingForm} />}

        </div>
    }
}


export default EditCard;