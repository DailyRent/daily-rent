"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { toast } from "react-toastify";
import DashboardForm from "@/components/DashboardForm/DashboardForm";
import { GetData } from "@/fetch/clientFetch";
import styles from "./page.module.scss";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import Loading from "@/app/loading";

const Dashboard = () => {
  const session = useSession();

  const { data, mutate, isLoading } = GetData();

  let sortedByUpdateData = [];

  if (!isLoading) {
    sortedByUpdateData = [...data];

    sortedByUpdateData.sort((a, b) => {
      return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
    });
  }

  const router = useRouter();

  const handleDeleteApartmentFromDB = async (id, objNumber) => {
    try {
      await fetch(`/api/apartments/${id}`, { method: "DELETE" });
      // автоматически обновляет страницу при изменении кол-ва карточек
      mutate();
    } catch (error) {
      console.log(error);
    }
    toast.success(`Обʼєкт №: ${objNumber} видалено`, { theme: "dark" });
  };

  const sortedPriorities = data?.map((item) => item.priority).sort((a, b) => { return a - b }).join(", ");


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
        {!isLoading && <p className={styles.priorityList}>Значення пріоритетів: {sortedPriorities}</p>}
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.contentWrapper}>

            <div className={styles.apartments}>
              {sortedByUpdateData.map((apart) => (
                <div key={apart._id} className={styles.apartment}>
                  <h2>Обʼєкт №: {apart.objNumber}</h2>
                  {apart.top ? <p>ТОП</p> : null}
                  <p className={styles.priority}>Пріоритет: {apart.priority}</p>
                  <p>Основне фото:</p>
                  <CldImage
                    width="300"
                    height="150"
                    crop="fill"
                    src={apart.titleImg}
                    alt="apartment photo"
                    priority={true}
                  />
                  <p>Додаткові фото:</p>
                  <ul className={styles.imgsWrapper}>
                    {apart.imgs.map((item, index) => (
                      <li className={styles.imgsCont} key={index}>
                        <CldImage
                          width="200"
                          height="100"
                          crop="fill"
                          src={item}
                          alt="Interior photo"
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
                  <p>Кількість спальних місць: {apart.bedsQuantity}</p>
                  <p className={styles.description}>
                    Опис: {apart.description}
                  </p>
                  <p className={styles.description}>
                    Опис англійською: {apart.descriptionEn}
                  </p>
                  <div className={styles.btnsWrapper}>
                    <Link
                      className={styles.editLink}
                      href={`/dashboard/${apart._id}`}
                    >
                      <svg className={styles.editIcon}>
                        <use href="/sprite.svg#icon-edit" />
                      </svg>
                    </Link>
                    <svg
                      className={styles.deleteIcon}
                      onClick={() => {
                        handleDeleteImgFromCloudinary(apart.titleImg);

                        apart.imgs.map((item) =>
                          handleDeleteImgFromCloudinary(item)
                        );

                        handleDeleteApartmentFromDB(apart._id, apart.objNumber);
                      }}
                    >
                      <use href="/sprite.svg#icon-delete" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <DashboardForm />
          </div>
        )}
      </div>
    );
  }
};

export default Dashboard;
