import React, { useState } from "react";
import styles from "./Filter.module.scss";
import "./Filter.module.scss";
import { amenities } from "@/data/amenities.data";
import { GetData } from "@/fetch/clientFetch";

const Filter = ({ checked1, checked2, checked3, children }) => {
  const { data, error, isLoading } = GetData();
  const [checkedAmenity, setCheckedAmenity] = useState(true);
  console.log(data);

  const filterCheckboxStyles = checkedAmenity
    ? styles.filterInputCheckbox__Checked
    : styles.filterInputCheckbox;

  const handleChangeAmenity = (e) => {
    console.log(e);
    setCheckedAmenity(!checkedAmenity);

    console.log(checkedAmenity);
  };

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

      <div className={styles.filterButtonsContainer}>
        <h4>Number of rooms</h4>
        <ul className={styles.filterNumberRoomsList}>
          <li>
            <label>
              <span>1 Room </span>
              <input type="checkbox" defaultChecked={checked1} />
            </label>
          </li>
          <li>
            <label>
              <span>2 Rooms </span>
              <input type="checkbox" defaultChecked={checked2} />
            </label>
          </li>
          <li>
            <label>
              <span>3 Rooms </span>
              <input
                type="checkbox"
                checked={checkedAmenity}
                className={filterCheckboxStyles}
                onChange={handleChangeAmenity}
              />
              <span></span>
            </label>
          </li>
        </ul>
      </div>
      <div className={styles.filterButtonsContainer}>
        <h4>Amenities</h4>
        <ul className={styles.filterAmenitisContainer}>
          {amenities.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.titleEN}</span>
                <input
                  type="checkbox"
                  checked={checkedAmenity}
                  onChange={handleChangeAmenity}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <button>Шукати</button>
    </div>
  );
};

export default Filter;
