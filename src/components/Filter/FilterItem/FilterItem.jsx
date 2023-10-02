"use client";
import React, { useState, useEffect } from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = ({
  id,
  //   titleEN,
  titleUA,
  activeIndex,
  setActiveIndex,
  //   amenitiesArr,
  setAmenitiesArr,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const isAmenityChecked = () =>
    id === activeIndex ? setIsChecked(!isChecked) : null;

  const toggleAmenityForFilter = () => {
    if (!isChecked) {
      setAmenitiesArr((amenitiesArr) => [...amenitiesArr, titleUA]);
    } else {
      setAmenitiesArr((amenitiesArr) =>
        amenitiesArr.filter((amenity) => amenity != titleUA)
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
    <li>
      <span>{titleUA}</span>
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
  );
};

export default FilterItem;
