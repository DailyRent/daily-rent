"use client";
import React, { useState } from "react";
import FilterRoomItem from "./FilterRoomItem/FilterRoomItem";
import styles from "./FilterRooms.module.scss";

const data = [
  { id: 1, title: "1", text: "однокімнатні" },
  { id: 2, title: "2", text: "двокімнатні" },
  { id: 3, title: "3", text: "трикімнатні" },
];

const FilterRooms = ({ numberRoomsArr, setNumberRoomsArr }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className={styles.container}>
      {data.map(({ id, title }) => (
        <FilterRoomItem
          key={id}
          id={id}
          title={title}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          numberRoomsArr={numberRoomsArr}
          setNumberRoomsArr={setNumberRoomsArr}
        />
      ))}
    </ul>
  );
};

export default FilterRooms;
