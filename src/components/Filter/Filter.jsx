"use client";
import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/SiteContext";
import styles from "./Filter.module.scss";
import { amenities } from "@/data";
// import { amenities, currentLanguages } from "@/data";
import FilterItem from "./FilterItem/FilterItem";
// import { usePathname } from "next/navigation";

const Filter = ({ amenitiesArr, setAmenitiesArr }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { filterShown, setFilterShown } = useContext(SiteContext);
  const [isLoad, setIsLoad] = useState(true);
  // const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {
    setIsLoad(false);
  }, []);

  const amenitiesWithoutWiFi = amenities.filter(
    (amenity) => amenity.title !== "Wi-Fi"
  );

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
                />
              );
            })}
        </ul>
      </div>
      {/* <div className={styles.filterSearchResetContainer}> */}

      {!isLoad && (
        <button
          type="button"
          className={styles.filterButtonSearch}
          onClick={() => setFilterShown(!filterShown)}
        >
          {t("Buttons.CloseFilterBtn")}
        </button>
      )}
      {/* <button
          type="button"
          className={styles.filterButtonSearch}
          onClick={() => handleResetFilter()}
        >
          Очистити фільтр //close filter
      </button>*/}
      {/* </div> */}
    </div>
  );
};

export default Filter;
