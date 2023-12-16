"use client";
import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/SiteContext";
import styles from "./Filter.module.scss";
import { amenities } from "@/data";
import { beds } from "@/data";
// import { amenities, currentLanguages } from "@/data";
import FilterItem from "./FilterItem/FilterItem";
import FilterItemBeds from "./FilterItem/FilterItemBeds";
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
  // const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {
    setIsLoad(false);
  }, []);

  const amenitiesWithoutWiFi = amenities.filter(
    (amenity) => amenity.title !== "Wi-Fi"
  );

  const handleResetFilter = () => {
    setIsFilterClear(true);
  };

  const isFilterShown = filterShown
    ? styles.container
    : styles.container__hidden;

  return (
    <div className={isFilterShown}>
      <div className={styles.filterButtonsContainer}>
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
          {!isLoad &&
            beds.map((bed) => {
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
