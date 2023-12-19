"use client";
import React, { useState, useEffect } from "react";
import styles from "./FilterItem.module.scss";
import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data";
import Image from "next/image";

const FilterItemBeds = ({
  id,
  title,
  img,
  activeIndex,
  setActiveIndex,
  numberBedsArr,
  setNumberBedsArr,
  isFilterClear,
  setIsFilterClear,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsChecked(false);
    setIsFilterClear(false);
    setNumberBedsArr([]);
  }, [isFilterClear]);

  useEffect(() => {
    setIsLoad(false);
  }, []);

  const isBedChecked = () =>
    id === activeIndex ? setIsChecked(!isChecked) : null;

  const toggleBedForFilter = () => {
    if (!isChecked) {
      setNumberBedsArr((numberBedsArr) => [...numberBedsArr, title]);
    } else {
      setNumberBedsArr((numberBedsArr) =>
        numberBedsArr.filter((bed) => bed != title)
      );
    }
  };

  useEffect(() => {
    isBedChecked();
  }, [activeIndex]);

  const filterCheckboxStyles = isChecked
    ? styles.filterInputCheckbox__Checked
    : styles.filterInputCheckbox;

  return (
    <>
      {!isLoad && (
        <li className={styles.filterItem}>
          <p className={styles.filterCheckboxTitle}>{title}</p>
          <div className={styles.imgSvgContainer}>
            <Image
              src={img}
              alt="bed"
              fill={true}
              className={styles.imgSvg}
              sizes="(min-width: 768px) 24px,"
            />
          </div>
          <input
            id={id}
            type="checkbox"
            className={filterCheckboxStyles}
            aria-label={title}
            checked={isChecked}
            onChange={() => {
              setActiveIndex(id),
                isBedChecked(),
                toggleBedForFilter(),
                setIsFilterClear(false);
            }}
          />
        </li>
      )}
    </>
  );
};

export default FilterItemBeds;
