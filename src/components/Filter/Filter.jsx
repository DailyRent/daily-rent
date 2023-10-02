"use client";
import React, { useState } from "react";
import styles from "./Filter.module.scss";
import { amenities } from "@/data/amenities.data";
import FilterItem from "./FilterItem/FilterItem";
import { usePathname } from "next/navigation";

const Filter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [checkedAmenity, setCheckedAmenity] = useState(false);
  const [amenitiesArr, setAmenitiesArr] = useState([]);
  //   const pathname = usePathname();
  //   const numberOfRooms = Number(pathname.slice(-1));

  console.log(amenitiesArr);

  //   const isRoomsNumber = () => {
  //     switch (numberOfRooms) {
  //       case 1:
  //         return true;
  //         break;
  //       case 2:
  //         return true;
  //         break;
  //       case 3:
  //         return true;
  //         break;
  //       default:
  //         false;
  //     }
  //   };

  //   const filterCheckboxStyles = checkedAmenity
  //     ? styles.filterInputCheckbox__Checked
  //     : styles.filterInputCheckbox;

  //   const handleChangeAmenity = () => {
  //     setCheckedAmenity(!checkedAmenity);
  //   };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        {" "}
        <h3>Filter</h3>
        <button type="button" className={styles.filterButtonClose}>
          <svg className={styles.filterSvg}>
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>
      </div>

      {/* <div className={styles.filterButtonsContainer}>
        <h4>Number of rooms</h4>
        <ul className={styles.filterNumberRoomsList}>
          <li>
            <label>
              <span>1 Room </span>
              <input
                type="checkbox"
                className={filterCheckboxStyles}
                checked={numberOfRooms === 1}
                onChange={handleChangeAmenity}
              />
            </label>
          </li>
          <li>
            <label>
              <span>2 Rooms </span>
              <input
                type="checkbox"
                className={filterCheckboxStyles}
                checked={numberOfRooms === 2}
                onChange={handleChangeAmenity}
              />
            </label>
          </li>
          <li>
            <label>
              <span>3 Rooms </span>
              <input
                type="checkbox"
                checked={numberOfRooms === 3}
                className={filterCheckboxStyles}
                onChange={handleChangeAmenity}
              />
            </label>
          </li>
        </ul>
      </div> */}
      <div className={styles.filterButtonsContainer}>
        {/* <h4>Amenities</h4> */}
        <ul className={styles.filterAmenitisContainer}>
          {console.log(amenitiesArr)}
          {amenities.map((item) => {
            return (
              <FilterItem
                key={item.id}
                id={item.id}
                titleEN={item.titleEN}
                titleUA={item.titleUA}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                amenitiesArr={amenitiesArr}
                setAmenitiesArr={setAmenitiesArr}
              />
            );
          })}
        </ul>
      </div>
      <button type="submit" className={styles.filterButtonSearch}>
        Шукати
      </button>
    </div>
  );
};

export default Filter;
