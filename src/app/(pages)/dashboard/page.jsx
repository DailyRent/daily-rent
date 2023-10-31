"use client";
import React, { useState } from 'react';
import styles from './page.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';
import { CldImage, CldUploadButton } from "next-cloudinary";
// import { useForm } from "react-hook-form";


const Dashboard = () => {
    const session = useSession();
    // console.log("Dashboard session", session) 
    // const { register, handleSubmit } = useForm();
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
    // надо создать переменную, чтобы при изменении языка динамически вставлять значение Wi-Fi ниже
    const [amenities, setAmenities] = useState(["Wi-Fi"]);
    const [description, setDescription] = useState("");
    const [descriptionEn, setDescriptionEn] = useState("");


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

    const changeAmenities = (e) => {
        if (e.target.checked) {
            const newArray = [...amenities, e.target.value];
            setAmenities(newArray);
        } else {
            const newArr = amenities.filter(item => item !== e.target.value)
            setAmenities(newArr);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("handleSubmit was started");
        // console.log("e.target", e.target);
        // const objNumber = e.target[0].value;
        // const top = e.target[1].checked;
        // const titleImg = e.target[2].value;
        // const imgs = e.target[3].value;
        // const address = e.target[4].value;
        // const addressEn = e.target[5].value;

        // const flatNumber = e.target[6].value;
        // const googleMapLocation = e.target[7].value;
        // const price = e.target[8].value;
        // const roomsQuantity = roomsQuantityValue;
        // const bookingUrl = e.target[13].value;
        // const amenities = amenitiesValues;
        // const description = e.target[27].value;
        // const descriptionEn = e.target[28].value;


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
            await fetch(`/api/apartments/${id}`, { method: "DELETE" });
            // автоматически обновляет страницу при изменении кол-ва карточек
            mutate();
        } catch (error) {
            console.log(error);
        }
    }


    // const onSubmit = async (data) => {
    //     // извлекает данные по картинке, сохраненные с помощью{...register("profile")} в inpute
    //     const image = data.profile[0];
    //     const formData = new FormData();
    //     formData.append("file", image);
    //     // from Cloudinary
    //     formData.append("upload_preset", "unsigned_preset");
    //     const uploadResponse = await fetch(
    //         `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    //         {
    //             method: "POST",
    //             body: formData,
    //         }
    //     );
    //     const uploadedImageData = await uploadResponse.json();
    //     const publicId = await uploadedImageData.public_id;

    //     try {
    //         await fetch("/api/apartments", {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 objNumber,
    //                 top,
    //                 titleImg: publicId,
    //                 imgs,
    //                 address,
    //                 addressEn,
    //                 flatNumber,
    //                 googleMapLocation,
    //                 price,
    //                 roomsQuantity,
    //                 bookingUrl,
    //                 amenities,
    //                 description,
    //                 descriptionEn,
    //             })
    //         })
    //         // автоматически обновляет страницу при изменении кол-ва карточек
    //         mutate();
    //         // обнуляет все поля формы
    //         // e.target.reset();
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    if (session.status === "authenticated" && session.data.user.email === process.env.NEXT_PUBLIC_ADMIN) {

        return <div className={styles.container}>
            <div className={styles.apartments}>
                {isLoading
                    ? <p>Loading...</p>
                    : data?.map(apart => (
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
                                    // src="<Public ID>"
                                    // src="Classic-cars_yb6gby"
                                    src={apart.titleImg}
                                    alt="apartment photo"
                                />
                                <p>Додаткові фото:</p>
                                <ul className={styles.imgsWrapper}>{apart.imgs.map((item, index) => (<li className={styles.imgsCont} key={index}>
                                    <Image
                                        src={item}
                                        alt="Interior photo"
                                        fill={true}
                                        sizes='10vw'
                                    />
                                </li>)
                                )}</ul>
                                <p className={styles.address}>Адреса: {apart.address}</p>
                                <p className={styles.address}>Адреса англійською: {apart.addressEn}</p>
                                <p>Квартира: {apart.flatNumber}</p>
                                <Link href={apart.googleMapLocation} className={styles.location}>Місцезнаходження: {apart.googleMapLocation}</Link>
                                <p>Ціна: {apart.price}</p>
                                <p>Кількість кімнат: {apart.roomsQuantity}</p>
                                <Link href={apart.bookingUrl} className={styles.platformLink}>BookingUrl: {apart.bookingUrl}</Link>
                                <ul>Додатковий комфорт: {apart.amenities.map((item, index) => (<li key={index}>{item}</li>))}
                                </ul>
                                <p className={styles.description}>Опис: {apart.description}</p>
                                <p className={styles.description}>Опис англійською: {apart.descriptionEn}</p>
                            </div>

                            <div className={styles.btnsWrapper}>
                                <Link href={`/dashboard/${apart._id}`}>Редагувати</Link>
                                <span className={styles.delete} onClick={() => handleDelete(apart._id)}>X</span>
                            </div>
                        </div>))}
            </div>

            {/* <form className={styles.new} onSubmit={handleSubmit(onSubmit)}> */}
            <form className={styles.new} onSubmit={handleSubmit}>

                <h1>Додавання нового обʼєкту</h1>
                <input type='text' placeholder="Номер обʼєкту" className={styles.input} onChange={(e) => setObjNumber(e.target.value)} />
                <label htmlFor="Top" className={styles.top}>
                    <input type="checkbox" id="Top" name="Top" onChange={(e) => setTop(e.target.checked)} />
                    ТОП
                </label>
                {/* <input
                    // в объекте profile сохраняются данные по загружаемой картинке, которые в дальнейшем в оnSubmit извлекаются 
                    {...register("profile")}
                    type='file' placeholder='Основне фото' className={styles.input} /> */}
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
                {/* <input type='text' placeholder='Додаткові фото' className={styles.input} /> */}
                <CldUploadButton
                    onUpload={(result) => {
                        // for Image component
                        setImgs(prev => [...prev, result.info.secure_url]);
                        // for CldImage component from next-cloudinary
                        // setImgs(prev => [...prev, result.info.public_id]);
                    }}
                    uploadPreset="unsigned_preset"
                >
                    Завантажити додаткові фото
                </CldUploadButton>
                <input type='text' placeholder='Адреса' className={styles.input} onChange={(e) => setAddress(e.target.value)} />
                <input type='text' placeholder='Адреса англійською' className={styles.input} onChange={(e) => setAddressEn(e.target.value)} />
                <input type='text' placeholder='Квартира' className={styles.input} onChange={(e) => setFlatNumber(e.target.value)} />
                <input type='text' placeholder='Місцезнаходження' className={styles.input} onChange={(e) => setGoogleMapLocation(e.target.value)} />
                <input type='text' placeholder='Ціна' className={styles.input} onChange={(e) => setPrice(e.target.value)} />
                <fieldset className={styles.roomsQuantity}><legend>Кількість кімнат:</legend>
                    <input type="radio" id="oneRoom" name="roomsQuantity" value="1" onChange={(e) => setRoomsQuantity(e.target.value)} />
                    <label htmlFor="oneRoom">1</label>
                    <input type="radio" id="twoRooms" name="roomsQuantity" value="2" onChange={(e) => setRoomsQuantity(e.target.value)} />
                    <label htmlFor="twoRooms">2</label>
                    <input type="radio" id="threeRooms" name="roomsQuantity" value="3" onChange={(e) => setRoomsQuantity(e.target.value)} />
                    <label htmlFor="threeRooms">3</label>
                </fieldset>
                <input type='text' placeholder='bookingUrl' className={styles.input} onChange={(e) => setBookingUrl(e.target.value)} />
                <fieldset className={styles.amenities}><legend>Додатковий комфорт:</legend>
                    <label htmlFor="wi-fi">
                        <input type="checkbox" id="wi-fi" name="wi-fi" value="Wi-Fi" defaultChecked onChange={changeAmenities} />
                        Wi-Fi
                    </label>
                    <label htmlFor="smartTV">
                        <input type="checkbox" id="smartTV" name="smartTV" value="Smart TV" onChange={changeAmenities} />
                        Smart TV
                    </label>
                    <label htmlFor="airCond">
                        <input type="checkbox" id="airCond" name="airCond" value="Кондиціонер" onChange={changeAmenities} />
                        Кондиціонер
                    </label>
                    <label htmlFor="bath">
                        <input type="checkbox" id="bath" name="bath" value="Ванна" onChange={changeAmenities} />
                        Ванна
                    </label>
                    <label htmlFor="shower">
                        <input type="checkbox" id="shower" name="shower" value="Душова кабіна" onChange={changeAmenities} />
                        Душова кабіна
                    </label>
                    <label htmlFor="jacuzzi">
                        <input type="checkbox" id="jacuzzi" name="jacuzzi" value="Джакузі" onChange={changeAmenities} />
                        Джакузі
                    </label>
                    <label htmlFor="waterHeater">
                        <input type="checkbox" id="waterHeater" name="waterHeater" value="Водонагрівач" onChange={changeAmenities} />
                        Водонагрівач
                    </label>
                    <label htmlFor="boiler">
                        <input type="checkbox" id="boiler" name="boiler" value="Котел" onChange={changeAmenities} />
                        Котел
                    </label>
                    <label htmlFor="washingMachine">
                        <input type="checkbox" id="washingMachine" name="washingMachine" value="Пральна машина" onChange={changeAmenities} />
                        Пральна машина
                    </label>
                    <label htmlFor="microwave">
                        <input type="checkbox" id="microwave" name="microwave" value="Мікрохвильова піч" onChange={changeAmenities} />
                        Мікрохвильова піч
                    </label>
                    <label htmlFor="balcony">
                        <input type="checkbox" id="balcony" name="balcony" value="Балкон" onChange={changeAmenities} />
                        Балкон
                    </label>
                    <label htmlFor="parking">
                        <input type="checkbox" id="parking" name="parking" value="Парковка" onChange={changeAmenities} />
                        Парковка
                    </label>
                </fieldset>
                <input type='text' placeholder='Опис' className={styles.input} onChange={(e) => setDescription(e.target.value)} />
                <input type='text' placeholder='Опис англійською' className={styles.input} onChange={(e) => setDescriptionEn(e.target.value)} />

                <button type='submit' className={styles.sendBtn}>Створити новий обʼєкт</button>
            </form>
        </div>
    }
}


export default Dashboard;