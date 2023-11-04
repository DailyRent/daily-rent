"use client";
import React, { useState, useEffect } from "react";
import styles from "./FilterItem.module.scss";
import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data";

const FilterItem = ({
  id,
  titleEN,
  title,
  activeIndex,
  setActiveIndex,
  // amenitiesArr,
  setAmenitiesArr,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const { i18n } = useTranslation();
  // const { t } = useTranslation();
  useEffect(() => {
    setIsLoad(false);
  }, []);

  const isAmenityChecked = () =>
    id === activeIndex ? setIsChecked(!isChecked) : null;

  const toggleAmenityForFilter = () => {
    if (!isChecked) {
      setAmenitiesArr((amenitiesArr) => [...amenitiesArr, title]);
    } else {
      setAmenitiesArr((amenitiesArr) =>
        amenitiesArr.filter((amenity) => amenity != title)
      );
    }
  };

  useEffect(() => {
    isAmenityChecked();
  }, [activeIndex]);

  const filterCheckboxStyles = isChecked
    ? styles.filterInputCheckbox__Checked
    : styles.filterInputCheckbox;

  return (
    <>
      {!isLoad && (
        <li className={styles.filterItem}>
          <p className={styles.filterCheckboxTitle}>
            {i18n.language === currentLanguages.EN ? titleEN : title}
          </p>
          <input
            id={id}
            type="checkbox"
            className={filterCheckboxStyles}
            checked={isChecked}
            onChange={() => {
              setActiveIndex(id), isAmenityChecked(), toggleAmenityForFilter();
            }}
          />
        </li>
      )}
    </>
  );
};

export default FilterItem;
