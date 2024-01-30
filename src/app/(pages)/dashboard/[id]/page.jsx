"use client";
import React from "react";
import styles from "./page.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import UpdatingForm from "@/components/UpdatingForm/UpdatingForm";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { handleDeleteImgFromMongoDB } from "@/utils/handleDeleteImgFromMongoDB";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import Loading from "@/app/loading";

const EditCard = ({ params }) => {
  const { id } = params;

  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/apartments/${id}`,
    fetcher
  );
  const router = useRouter();

  if (session.status === "loading") {
    return <Loading />;
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
        <p className={styles.displaySizeMessage}>
          Для користування цим функціоналом розмір Вашого екрану повинен бути не
          менше 768 пікселів.
        </p>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.contentWrapper}>
            <div key={data._id} className={styles.apartment}>
              <h2>Обʼєкт №: {data.objNumber}</h2>
              {data.top ? <p>ТОП</p> : null}
              <p className={styles.priority}>Пріоритет: {data.priority}</p>
              <p>Основне фото:</p>
              {/* <div className={styles.imgContainer}> */}
              <CldImage
                width="300"
                height="150"
                crop="fill"
                src={data.titleImg}
                alt={data.address}
              />
              {/* </div> */}
              <p>Додаткові фото:</p>
              <ul className={styles.imgsWrapper}>
                {data.imgs.map((item, index) => (
                  <li className={styles.imgsItem} key={index}>
                    <div className={styles.imgCont}>
                      <CldImage
                        width="200"
                        height="100"
                        crop="fill"
                        src={item}
                        alt="Interior photo"
                      />
                    </div>
                    <svg
                      className={styles.deleteIcon}
                      onClick={async () => {
                        handleDeleteImgFromMongoDB(
                          data,
                          data._id,
                          item,
                          mutate
                        );

                        handleDeleteImgFromCloudinary(item);
                      }}
                    >
                      <use href="/sprite.svg#icon-delete" />
                    </svg>
                  </li>
                ))}
              </ul>
              <p className={styles.address}>Адреса: {data.address}</p>
              <p className={styles.address}>
                Адреса англійською: {data.addressEn}
              </p>

              <p>Квартира: {data.flatNumber}</p>
              <Link href={data.googleMapLocation} className={styles.location}>
                Місцезнаходження: {data.googleMapLocation}
              </Link>
              <p>Ціна: {data.price}</p>
              <p>Кількість кімнат: {data.roomsQuantity}</p>
              <Link href={data.bookingUrl} className={styles.platformLink}>
                BookingUrl: {data.bookingUrl}
              </Link>
              <ul>
                Додатковий комфорт:{" "}
                {data.amenities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p>Кількість спальних місць: {data.bedsQuantity}</p>
              <p className={styles.description}>Опис: {data.description}</p>
              <p className={styles.description}>
                Опис англійською: {data.descriptionEn}
              </p>
            </div>
            <UpdatingForm id={id} apart={data} mutate={mutate} />
          </div>
        )}
      </div>
    );
  }
};

export default EditCard;
