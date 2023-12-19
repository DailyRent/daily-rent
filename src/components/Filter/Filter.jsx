"use client";
import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/SiteContext";
import styles from "./Filter.module.scss";
import { amenities } from "@/data";
// import { beds } from "@/data";
// import { amenities, currentLanguages } from "@/data";
import FilterItem from "./FilterItem/FilterItem";
// import FilterItemBeds from "./FilterItem/FilterItemBeds";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

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
  // const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {
    setIsLoad(false);
  }, []);

  const amenitiesWithoutWiFi = amenities.filter(
    (amenity) => amenity.title !== "Wi-Fi"
  );

  const handleIncrementFilter = () => {
    console.log(numberBedsArr);
    if (filterBeds === 6) return;
    setFilterBeds((prevFilterBeds) => prevFilterBeds + 1);

    setNumberBedsArr((numberBedsArr) => [...numberBedsArr, filterBeds]);
  };

  const handleDecrementFilter = () => {
    // console.log(numberBedsArr);
    if (filterBeds === 2) return;
    setFilterBeds((prevFilterBeds) => prevFilterBeds - 1);
    setNumberBedsArr((numberBedsArr) =>
      numberBedsArr.filter((numberBeds) => numberBeds != filterBeds - 1)
    );
  };
  // console.log(numberBedsArr);
  // console.log(filterBeds);
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
          <p>Спальні місця</p>
          {/* <div className={styles.imgSvgContainer}>
            <Image
              src="/webp/Bed7.webp"
              alt="bed"
              fill={true}
              className={styles.imgSvg}
              sizes="(min-width: 768px) 24px,"
            />
          </div> */}
          <button className={styles.buttonBeds} onClick={handleDecrementFilter}>
            -
          </button>
          <span className={styles.textBeds}>{filterBeds}</span>
          <button className={styles.buttonBeds} onClick={handleIncrementFilter}>
            +
          </button>
        </div>
        {/* <h4>Amenities</h4> */}
        <ul className={styles.filterAmenitisContainer}>
          {/* {console.log(amenitiesArr)} */}
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

        {/* <ul className={styles.filterAmenitisContainer}>
          {!isLoad &&
            beds.map((bed) => {
              // console.log(bed);
              return (
                <FilterItemBeds
                  key={bed.id}
                  id={bed.id}
                  title={bed.title}
                  img={bed.img}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  numberBedsArr={numberBedsArr}
                  setNumberBedsArr={setNumberBedsArr}
                  isFilterClear={isFilterClear}
                  setIsFilterClear={setIsFilterClear}
                />
              );
            })}
        </ul> */}
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
