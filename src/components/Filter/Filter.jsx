"use client";
import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/SiteContext";
import styles from "./Filter.module.scss";
import { amenities } from "@/data";
import FilterItem from "./FilterItem/FilterItem";


const Filter = ({
  amenitiesArr,
  setAmenitiesArr,
  numberBedsArr,
  setNumberBedsArr,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { filterShown, setFilterShown } = useContext(SiteContext);
  const [isLoad, setIsLoad] = useState(true);
  const [isFilterClear, setIsFilterClear] = useState(false);
  const [filterBeds, setFilterBeds] = useState(2);
  const { t } = useTranslation();
  useEffect(() => {
    setIsLoad(false);
  }, []);

  const amenitiesWithoutWiFi = amenities.filter(
    (amenity) => amenity.title !== "Wi-Fi"
  );

  const handleIncrementFilter = () => {
    if (filterBeds === 6) return;
    setFilterBeds((prevFilterBeds) => prevFilterBeds + 1);

    setNumberBedsArr((numberBedsArr) => [...numberBedsArr, filterBeds]);
  };

  const handleDecrementFilter = () => {
    if (filterBeds === 2) return;
    setFilterBeds((prevFilterBeds) => prevFilterBeds - 1);
    setNumberBedsArr((numberBedsArr) =>
      numberBedsArr.filter((numberBeds) => numberBeds != filterBeds - 1)
    );
  };

  const handleResetFilter = () => {
    setIsFilterClear(true);
  };

  const isFilterShown = filterShown
    ? styles.container
    : styles.container__hidden;

  return (
    <div className={isFilterShown}>
      <div className={styles.filterButtonsContainer}>
        <div className={styles.filterAmenitisContainer}>
          <p className={styles.textBeds}>{!isLoad && t("Buttons.FilterSleepingPlaces")}</p>

          <button className={styles.buttonBeds} onClick={handleDecrementFilter}>
            -
          </button>
          <span className={styles.numberBeds}>{filterBeds}</span>
          <button className={styles.buttonBeds} onClick={handleIncrementFilter}>
            +
          </button>
        </div>
        <ul className={styles.filterAmenitisContainer}>
          {!isLoad &&
            amenitiesWithoutWiFi.map((item) => {
              return (
                <FilterItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  titleEN={item.titleEN}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  amenitiesArr={amenitiesArr}
                  setAmenitiesArr={setAmenitiesArr}
                  isFilterClear={isFilterClear}
                  setIsFilterClear={setIsFilterClear}
                />
              );
            })}
        </ul>

      </div>
      <div className={styles.filterSearchResetContainer}>
        {!isLoad && (
          <>
            {" "}
            <button
              type="button"
              className={styles.filterButtonSearch}
              onClick={() => handleResetFilter()}
            >
              {t("Buttons.FilterClear")}
            </button>
            <button
              type="button"
              className={styles.filterButtonSearch}
              onClick={() => setFilterShown(!filterShown)}
            >
              {t("Buttons.CloseFilterBtn")}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
