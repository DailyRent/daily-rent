"use client";
import React from "react";
import styles from "./page.module.scss";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";
import UpdatingForm from "@/components/UpdatingForm/UpdatingForm";
import Link from "next/link";
import crypto from "crypto";
import { CldImage } from "next-cloudinary";

const EditCard = ({ params }) => {
  const { id } = params;

  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/apartments/${id}`,
    fetcher
  );

  const router = useRouter();

  const handleDeleteImg = async (id, item) => {
    const newArr = data.imgs.filter((el) => el !== item);
    try {
      await fetch(`/api/apartments/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          imgs: newArr,
        }),
      });
      // автоматически обновляет страницу при изменении кол-ва карточек
      mutate();
    } catch (error) {
      console.log(error);
    }
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div key={data._id} className={styles.apartment}>
            <h2>Обʼєкт №: {data.objNumber}</h2>
            {data.top ? <p>ТОП</p> : null}
            <p>Основне фото:</p>
            <div className={styles.imgContainer}>
              {/* <Image
                            className={styles.img}
                            src={data.titleImg}
                            alt={data.address}
                            fill={true}
                            sizes='20vw'
                            priority={true}
                        /> */}
              <CldImage
                width="300"
                height="150"
                crop="fill"
                src={data.titleImg}
                alt={data.address}
                // fill={true}
                // sizes="20vw"
                // priority={true}
              />
            </div>
            <p>Додаткові фото:</p>
            <ul className={styles.imgsWrapper}>
              {data.imgs.map((item, index) => (
                <li className={styles.imgsItem} key={index}>
                  <div className={styles.imgCont}>
                    {/* <Image
                          className={styles.img}
                          src={item}
                          alt="Interior photo"
                          fill={true}
                          sizes="20vw"
                          priority={false}
                        /> */}
                    <CldImage
                      width="200"
                      height="100"
                      crop="fill"
                      //   className={styles.img}
                      src={item}
                      alt="Interior photo"
                      //   fill={true}
                      //   sizes="20vw"
                      //   priority={false}
                    />
                  </div>
                  <span
                    className={styles.delete}
                    onClick={async () => {
                      // удаляет данные о фото с mongoDB
                      handleDeleteImg(data._id, item);

                      // getPublicId
                      const regex = /\/v\d+\/([^/]+)\.\w{3,4}$/;
                      //example - const cloudinaryUrl = 'https://res.cloudinary.com/your_cloud_name/image/upload/v1234567890/public_id.jpg';
                      const cloudinaryUrl = item;

                      const getPublicIdFromUrl = (url) => {
                        const match = url.match(regex);
                        return match ? match[1] : null;
                      };

                      const publicId = getPublicIdFromUrl(cloudinaryUrl);
                      console.log("publicId", publicId);

                      // сгенерировать подпись
                      const generateSHA1 = (data) => {
                        const hash = crypto.createHash("sha1");
                        hash.update(data);
                        return hash.digest("hex");
                      };

                      const generateSignature = (publicId, apiSecret) => {
                        const timestamp = new Date().getTime();
                        return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
                      };

                      const timestamp = new Date().getTime();
                      console.log("timestamp", timestamp);

                      // const signature = generateSHA1(generateSignature(publicId, process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET));
                      const signature = generateSignature(
                        publicId,
                        process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
                      );
                      console.log("signature", signature);

                      const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/destroy`;
                      console.log("url", url);
                      const api_key =
                        process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
                      console.log("api_key", api_key);

                      try {
                        const response = await fetch(url, {
                          method: "POST",
                          body: JSON.stringify({
                            public_id: publicId,
                            signature,
                            api_key,
                            timestamp,
                          }),
                        });

                        // const response = await axios.post(url, {
                        //     public_id: publicId,
                        //     signature: signature,
                        //     api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
                        //     timestamp: timestamp,
                        // });
                        console.log("Picture was deleted from cloudinary");
                        console.error("response in try", response);
                      } catch (error) {
                        console.error("error", error);
                      }
                    }}
                  >
                    X
                  </span>
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
            <p className={styles.description}>Опис: {data.description}</p>
            <p className={styles.description}>
              Опис англійською: {data.descriptionEn}
            </p>
          </div>
        )}

        {isLoading ? (
          <p>Loading</p>
        ) : (
          <UpdatingForm
            id={id}
            apart={data}
            mutate={mutate}
            className={styles.updatingForm}
          />
        )}
      </div>
    );
  }
};

export default EditCard;
