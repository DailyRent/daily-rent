"use client";
import React, { useState } from "react";
import FilterRoomItem from "./FilterRoomItem/FilterRoomItem";
import styles from "./FilterRooms.module.scss";

const data = [
  {
    id: 21,
    title: "1",
    text: "однокімнатні",
    ariaTextEn: "Search for one-room",
    ariaTextUk: "Шукати однокімнатні",
  },
  {
    id: 22,
    title: "2",
    text: "двокімнатні",
    ariaTextEn: "Search for two-room",
    ariaTextUk: "Шукати двокімнатні",
  },
  {
    id: 23,
    title: "3",
    text: "трикімнатні",
    ariaTextEn: "Search for three-room",
    ariaTextUk: "Шукати трикімнатні",
  },
];

const FilterRooms = ({ numberRoomsArr, setNumberRoomsArr }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className={styles.container}>
      {data.map(({ id, title, ariaTextEn, ariaTextUk }) => (
        <FilterRoomItem
          key={id}
          id={id}
          title={title}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          numberRoomsArr={numberRoomsArr}
          setNumberRoomsArr={setNumberRoomsArr}
          ariaTextEn={ariaTextEn}
          ariaTextUk={ariaTextUk}
        />
      ))}
    </ul>
  );
};

export default FilterRooms;
