"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { toast } from "react-toastify";
import DashboardFormik from "@/components/DashboardForm/DashboardFormik";
import { GetData } from "@/fetch/clientFetch";
import styles from "./page.module.scss";

const Dashboard = () => {
    const session = useSession();

    const { data, mutate, isLoading } = GetData();

    const router = useRouter();

    const handleDelete = async (id, objNumber) => {
        try {
            await fetch(`/api/apartments/${id}`, { method: "DELETE" });
            // автоматически обновляет страницу при изменении кол-ва карточек
            mutate();
        } catch (error) {
            console.log(error);
        }

        toast.success(`Обʼєкт №: ${objNumber} видалено`, {
            theme: "dark",
        });
    };

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
                                        width='300'
                                        height='150'
                                        crop='fill'
                                        // src="<Public ID>"
                                        // src="Classic-cars_yb6gby"
                                        src={apart.titleImg}
                                        alt='apartment photo'
                                    />
                                    <p>Додаткові фото:</p>
                                    <ul className={styles.imgsWrapper}>
                                        {apart.imgs.map((item, index) => (
                                            <li
                                                className={styles.imgsCont}
                                                key={index}
                                            >
                                                {/* <Image
                                                         src={item}
                                                         alt="Interior photo"
                                                         fill={true}
                                                         sizes="10vw"
                                                     /> */}
                                                <CldImage
                                                    width='200'
                                                    height='100'
                                                    crop='fill'
                                                    src={item}
                                                    alt='Interior photo'
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <p className={styles.address}>
                                        Адреса: {apart.address}
                                    </p>
                                    <p className={styles.address}>
                                        Адреса англійською: {apart.addressEn}
                                    </p>
                                    <p>Квартира: {apart.flatNumber}</p>
                                    <Link
                                        href={apart.googleMapLocation}
                                        className={styles.location}
                                    >
                                        Місцезнаходження:{" "}
                                        {apart.googleMapLocation}
                                    </Link>
                                    <p>Ціна: {apart.price}</p>
                                    <p>
                                        Кількість кімнат: {apart.roomsQuantity}
                                    </p>
                                    <Link
                                        href={apart.bookingUrl}
                                        className={styles.platformLink}
                                    >
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
                                    <Link href={`/dashboard/${apart._id}`}>
                                        Редагувати
                                    </Link>
                                    <span
                                        className={styles.delete}
                                        onClick={() =>
                                            handleDelete(
                                                apart._id,
                                                apart.objNumber
                                            )
                                        }
                                    >
                                        X
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <DashboardFormik />
            </div>
        );
    }
};

export default Dashboard;
