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


    // сохраняет значение top в state в зависимости от checked
    function checkboxSwitchForTop(e) {
        if (e.target.checked) {
            setNewTop(true);
        }
        else {
            setNewTop(false);
        }
    }

    // изменяет количество комнат в зависимости от значения checked
    const changeRoomsQuantity = (e) => {
        setNewRoomsQuantity(e.target.value);
    }


    // изменяет количество дополнительных опций в зависимости от нажатых checked
    const changeAmenities = (e) => {
        // проверяет есть ли данная опция в массиве 
        const isAmenityIn = newAmenities.find(item => item === e.target.value);
        if (isAmenityIn) {
            // если есть - она удаляется и создается новый массив, который далее сохраняется
            const newArr = newAmenities.filter(item => item !== e.target.value)
            setNewAmenities(newArr);
        } else {
            // если данной опции нет - добавляется в массив
            const newArray = [...newAmenities, e.target.value];
            setNewAmenities(newArray);
        };
    }

    //надо дорабатывать
    // отображает включенными все чекбоксы, value которых присутствуют в массиве дополнительных опций
    function checkboxSwitchForAmenities(e) {
        const isAmenity = amenities.find(item => item === e.target.value);
        console.log("isAmenity", isAmenity);
        if (isAmenity !== undefined) {
            e.target.checked = true;
        }
    }


    return (
        <div>
            <form className={styles.new}
            // onSubmit={handleSubmit}
            >
                <h1>Редагування обʼєкту</h1>
                <input type='text' placeholder="Номер обʼєкту" className={styles.input} value={newObjNumber} readOnly />
                <label htmlFor="Top" className={styles.top}>
                    <input
                        type="checkbox"
                        id="Top"
                        name="Top"
                        onChange={checkboxSwitchForTop}
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
                            checked={checkboxSwitchForAmenities}
                        />
                        Кондиціонер
                    </label>
                    <label htmlFor="wifi">
                        <input type="checkbox" id="wifi" name="wifi" value="Вайфай"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        Вайфай
                    </label>
                    <label htmlFor="smartTV">
                        <input type="checkbox" id="smartTV" name="smartTV" value="СмартТВ"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        СмартТВ
                    </label>
                    <label htmlFor="bath">
                        <input type="checkbox" id="bath" name="bath" value="Ванна"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        Ванна
                    </label>
                    <label htmlFor="shower">
                        <input type="checkbox" id="shower" name="shower" value="Душова кабіна"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        Душова кабіна
                    </label>
                    <label htmlFor="jacuzzi">
                        <input type="checkbox" id="jacuzzi" name="jacuzzi" value="Джакузі"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        Джакузі
                    </label>
                    <label htmlFor="microwave">
                        <input type="checkbox" id="microwave" name="microwave" value="Мікрохвильова піч"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        Мікрохвильова піч
                    </label>
                    <label htmlFor="washingMachine">
                        <input type="checkbox" id="washingMachine" name="washingMachine" value="Пральна машина"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        Пральна машина
                    </label>
                    <label htmlFor="balcony">
                        <input type="checkbox" id="balcony" name="balcony" value="Балкон"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        Балкон
                    </label>
                    <label htmlFor="boiler">
                        <input type="checkbox" id="boiler" name="boiler" value="Котел"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        Котел
                    </label>
                    <label htmlFor="waterHeater">
                        <input type="checkbox" id="waterHeater" name="waterHeater" value="Водонагрівач"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        Водонагрівач
                    </label>
                    <label htmlFor="parking">
                        <input type="checkbox" id="parking" name="parking" value="Парковка"
                            onChange={changeAmenities}
                            checked={checkboxSwitchForAmenities}
                        />
                        Парковка
                    </label>
                </fieldset>
                <input type='text' placeholder='Опис' className={styles.input} value={newDescription} />
                <button className={styles.sendBtn}>Send</button>
            </form>
        </div>
    )
}


export default UpdatingForm;