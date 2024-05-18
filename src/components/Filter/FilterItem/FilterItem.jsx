"use client";
import React, { useState, useEffect } from "react";
import styles from "./FilterItem.module.scss";
import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data";
import { useCallback } from "react";

const FilterItem = ({
  id,
  titleEN,
  title,
  activeIndex,
  setActiveIndex,
  setAmenitiesArr,
  isFilterClear,
  setIsFilterClear,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    setIsChecked(false);
    setIsFilterClear(false);
    setAmenitiesArr([]);
  }, [isFilterClear, setAmenitiesArr, setIsFilterClear]);

  useEffect(() => {
    setIsLoad(false);
  }, []);

  const isAmenityChecked = useCallback(
    () => (id === activeIndex ? setIsChecked(!isChecked) : null),
    [id, activeIndex, isChecked]
  );

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
  }, [activeIndex, isAmenityChecked]);

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
            aria-label={i18n.language === currentLanguages.EN ? titleEN : title}
            checked={isChecked}
            onChange={() => {
              setActiveIndex(id),
                isAmenityChecked(),
                toggleAmenityForFilter(),
                setIsFilterClear(false);
            }}
          />
        </li>
      )}
    </>
  );
};

export default FilterItem;
