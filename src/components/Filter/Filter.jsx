import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({ checked1, checked2, checked3 }) => {
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
              <input type="checkbox" checked={checked1} />
            </label>
          </li>
          <li>
            <label>
              <span>2 Rooms </span>
              <input type="checkbox" checked={checked2} />
            </label>
          </li>
          <li>
            <label>
              <span>3 Rooms </span>
              <input type="checkbox" checked={checked3} />
            </label>
          </li>
        </ul>
      </div>
      <div className={styles.filterButtonsContainer}>
        <h4>Amenities</h4>
        <ul className={styles.filterAmenitisContainer}>
          <li>
            <label>
              <span>WiFi</span>
              <input type="checkbox" />
            </label>
          </li>
          <li>
            <label>
              <span>SmartTV</span>
              <input type="checkbox" />
            </label>
          </li>
          <li>
            <label>
              <span>Air conditioning</span>
              <input type="checkbox" />
            </label>
          </li>
          <li>
            <label>
              <span>Balcony</span>
              <input type="checkbox" />
            </label>
          </li>
          <li>
            <label>
              <span>Shower</span>
              <input type="checkbox" />
            </label>
          </li>
          <li>
            <label>
              <span>Bath</span>
              <input type="checkbox" />
            </label>
          </li>
          <li>
            <label>
              <span>Jacuzzi</span>
              <input type="checkbox" />
            </label>
          </li>
          <li>
            <label>
              <span>Washing machine</span>
              <input type="checkbox" />
            </label>
          </li>
          <li>
            <label>
              <span>Microwave</span>
              <input type="checkbox" />
            </label>
          </li>
        </ul>
      </div>
      <button>Шукати</button>
    </div>
  );
};

export default Filter;
