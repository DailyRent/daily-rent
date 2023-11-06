"use client";
import React from 'react';
import styles from './page.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';
import UpdatingForm from '@/components/UpdatingForm/UpdatingForm';
import Link from 'next/link';


const EditCard = ({ params }) => {
    const { id } = params;

    const session = useSession();

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR(`/api/apartments/${id}`, fetcher);

    const router = useRouter();

    const handleDeleteImg = async (id, item) => {
        const newArr = data.imgs.filter(el => el !== item);
        console.log("item", item);
        console.log("newArr", newArr);
        try {
            await fetch(`/api/apartments/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    imgs: newArr,
                })
            });
            // автоматически обновляет страницу при изменении кол-ва карточек
            mutate();
        } catch (error) {
            console.log(error);
        }
    }

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
                    {data.top ? <p>ТОП</p> : null}
                    <p>Основне фото:</p>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            src={data.titleImg}
                            alt={data.address}
                            fill={true}
                            sizes='20vw'
                            priority={true}
                        />
                    </div>
                    <p>Додаткові фото:</p>
                    <ul className={styles.imgsWrapper}>{data.imgs.map((item, index) => (<li className={styles.imgsItem} key={index}>
                        <div className={styles.imgCont}>
                            <Image
                                className={styles.img}
                                src={item}
                                alt="Interior photo"
                                fill={true}
                                sizes='20vw'
                                priority={false}
                            />
                        </div>
                        <span className={styles.delete}
                            onClick={() => handleDeleteImg(data._id, item)
                                //     () => {
                                //     console.log("data.imgs", data.imgs);
                                //     console.log("item", item);
                                //     const filteredArr = data.imgs.filter(el => el !== item);
                                //     console.log("filteredArr", filteredArr);
                                //     mutate();
                                //     data.imgs = [...filteredArr];
                                //     console.log("data.imgs", data.imgs);
                                //     return data.imgs;
                                // }
                            }
                        >X</span>
                    </li>)
                    )}</ul>
                    <p className={styles.address}>Адреса: {data.address}</p>
                    <p className={styles.address}>Адреса англійською: {data.addressEn}</p>

                    <p>Квартира: {data.flatNumber}</p>
                    <Link href={data.googleMapLocation} className={styles.location}>Місцезнаходження: {data.googleMapLocation}</Link>
                    <p>Ціна: {data.price}</p>
                    <p>Кількість кімнат: {data.roomsQuantity}</p>
                    <Link href={data.bookingUrl} className={styles.platformLink}>BookingUrl: {data.bookingUrl}</Link>
                    <ul>Додатковий комфорт: {data.amenities.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                    <p className={styles.description}>Опис: {data.description}</p>
                    <p className={styles.description}>Опис англійською: {data.descriptionEn}</p>

                </div>}

            {isLoading
                ? <p>Loading</p>
                : <UpdatingForm id={id} apart={data} mutate={mutate} className={styles.updatingForm} />}

        </div>
    }
}


export default EditCard;