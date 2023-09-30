"use client";
import React, { useState } from 'react';
import styles from './UpdatingForm.module.scss';


const UpdatingForm = ({ id, apart }) => {
    const { objNumber, top, titleImg, imgs, address, flatNumber, googleMapLocation, price, roomsQuantity, bookingUrl, amenities, description } = apart;
    const [newObjNumber, setNewObjNumber] = useState(objNumber);
    const [newTop, setNewTop] = useState(top);
    const [newTitleImg, setNewTitleImg] = useState(titleImg);
    const [newImgs, setNewImgs] = useState(imgs);
    const [newAddress, setNewAddress] = useState(address);
    const [newFlatNumber, setNewFlatNumber] = useState(flatNumber);
    const [newGoogleMapLocation, setNewGoogleMapLocation] = useState(googleMapLocation);
    const [newPrice, setNewPrice] = useState(price);
    const [newRoomsQuantity, setNewRoomsQuantity] = useState(roomsQuantity);
    const [newBookingUrl, setNewBookingUrl] = useState(bookingUrl);
    const [newAmenities, setNewAmenities] = useState(amenities);
    const [newDescription, setNewDescription] = useState(description);

    const changeRoomsQuantity = (e) => {
        setNewRoomsQuantity(e.target.value);
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

    function checkboxSwitchForTop(e) {
        if (e.target.checked) {
            setNewTop(true);
        }
        else {
            setNewTop(false);
        }
    }


    return (
        <div>
            <form className={styles.new}
            // onSubmit={handleSubmit}
            >
                <h1>Редагування обʼєкту</h1>
                <input type='text' placeholder="Номер обʼєкту" className={styles.input} value={newObjNumber} />
                <label htmlFor="Top" className={styles.top}>
                    <input
                        type="checkbox"
                        id="Top"
                        name="Top"
                        onClick={checkboxSwitchForTop}
                        checked={newTop}
                    />Топ
                </label>
                <input type='text' placeholder='Основне фото' className={styles.input} value={newTitleImg} />
                <input type='text' placeholder='Додаткові фото' className={styles.input} value={newImgs} />
                <input type='text' placeholder='Адреса' className={styles.input} value={newAddress} />
                <input type='text' placeholder='Квартира' className={styles.input} value={newFlatNumber} />
                <input type='text' placeholder='Місцезнаходження' className={styles.input} value={newGoogleMapLocation} />
                <input type='text' placeholder='Ціна' className={styles.input} value={newPrice} />
                <fieldset className={styles.roomsQuantity}><legend>Кількість кімнат:</legend>
                    <input type="radio" id="oneRoom" name="roomsQuantity" value="1"
                        onChange={changeRoomsQuantity} checked={newRoomsQuantity === "1"}
                    />
                    <label htmlFor="oneRoom">1</label>
                    <input type="radio" id="twoRooms" name="roomsQuantity" value="2"
                        onChange={changeRoomsQuantity} checked={newRoomsQuantity === "2"}
                    />
                    <label htmlFor="twoRooms">2</label>
                    <input type="radio" id="threeRooms" name="roomsQuantity" value="3"
                        onChange={changeRoomsQuantity} checked={newRoomsQuantity === "3"}
                    />
                    <label htmlFor="threeRooms">3</label>
                </fieldset>
                <input type='text' placeholder='bookingUrl' className={styles.input} value={newBookingUrl} />
                <fieldset className={styles.amenities}><legend>Додатковий комфорт:</legend>

                    <label htmlFor="airCond">
                        <input type="checkbox" id="airCond" name="airCond" value="Кондиціонер"
                            onChange={changeAmenities}
                        />
                        Кондиціонер
                    </label>
                    <label htmlFor="smartTV">
                        <input type="checkbox" id="smartTV" name="smartTV" value="СмартТВ"
                            onChange={changeAmenities}
                        />
                        СмартТВ
                    </label>
                    <label htmlFor="bath">
                        <input type="checkbox" id="bath" name="bath" value="Ванна"
                            onChange={changeAmenities}
                        />
                        Ванна
                    </label>
                    <label htmlFor="shower">
                        <input type="checkbox" id="shower" name="shower" value="Душ"
                            onChange={changeAmenities}
                        />
                        Душ
                    </label>
                    <label htmlFor="jacuzzi">
                        <input type="checkbox" id="jacuzzi" name="jacuzzi" value="Джакузі"
                            onChange={changeAmenities}
                        />
                        Джакузі
                    </label>
                    <label htmlFor="microwave">
                        <input type="checkbox" id="microwave" name="microwave" value="Мікрохвильова піч"
                            onChange={changeAmenities}
                        />
                        Мікрохвильова піч
                    </label>
                    <label htmlFor="washingMachine">
                        <input type="checkbox" id="washingMachine" name="washingMachine" value="Пральна машина"
                            onChange={changeAmenities}
                        />
                        Пральна машина
                    </label>
                    <label htmlFor="balcony">
                        <input type="checkbox" id="balcony" name="balcony" value="Балкон"
                            onChange={changeAmenities}
                        />
                        Балкон
                    </label>
                    <label htmlFor="boiler">
                        <input type="checkbox" id="boiler" name="boiler" value="Бойлер"
                            onChange={changeAmenities}
                        />
                        Бойлер
                    </label>
                    <label htmlFor="waterHeater">
                        <input type="checkbox" id="waterHeater" name="waterHeater" value="Водонагрівач"
                            onChange={changeAmenities}
                        />
                        Водонагрівач
                    </label>
                    <label htmlFor="parking">
                        <input type="checkbox" id="parking" name="parking" value="Паркінг"
                            onChange={changeAmenities}
                        />
                        Паркінг
                    </label>
                </fieldset>
                <input type='text' placeholder='Опис' className={styles.input} value={newDescription} />
                <button className={styles.sendBtn}>Send</button>
            </form>
        </div>
    )
}


export default UpdatingForm;