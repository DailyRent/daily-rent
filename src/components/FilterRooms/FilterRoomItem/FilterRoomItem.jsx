"use client";

import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import styles from "./FilterRoomItem.module.scss";

const FilterRoomItem = ({
  id,
  title,
  activeIndex,
  setActiveIndex,
  // numberRoomsArr,
  setNumberRoomsArr,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading]=useState(true)
  
  const {t}=useTranslation();

  const isNumberRoomsChecked = () => {
    id === activeIndex ? setIsChecked(!isChecked) : null;
  };

  const toggleNumberRoomsForFilter = () => {
    if (!isChecked) {
      setNumberRoomsArr((numberRoomsArr) => [...numberRoomsArr, title]);
    } else {
      setNumberRoomsArr((numberRoomsArr) =>
        numberRoomsArr.filter((numberRooms) => numberRooms != title)
      );
    }
  };
  useEffect(()=>setIsLoading(false),[])
  useEffect(() => {
    isNumberRoomsChecked();
  }, [activeIndex]);

  const filterCheckboxStyles = isChecked
    ? styles.filterInputCheckbox__Checked
    : styles.filterInputCheckbox;

  return (
    <li className={styles.filterRoom}>
      {!isLoading && (<p className={styles.filterRoomText}>{title}{t("Buttons.FilterQuantRooms")}</p>)}
      <input
        id={id}
        type="checkbox"
        className={filterCheckboxStyles}
        checked={isChecked}
        onChange={() => {
          setActiveIndex(id),
            isNumberRoomsChecked(),
            toggleNumberRoomsForFilter();
        }}
      />
    </li>
  );
};

export default FilterRoomItem;
