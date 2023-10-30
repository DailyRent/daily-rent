"use client";
import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/SiteContext";
import styles from "./Filter.module.scss";
import { amenities } from "@/data/amenities.data";
import { currentLanguages } from "@/data/languages.data";
import FilterItem from "./FilterItem/FilterItem";
// import { usePathname } from "next/navigation";

const Filter = ({ amenitiesArr, setAmenitiesArr }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { filterShown, setFilterShown } = useContext(SiteContext);
  const [isLoad, setIsLoad] = useState(true);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  useEffect(() => {
    setIsLoad(false);
  }, []);

  const amenitiesWithoutWiFi = amenities.filter(
    (amenity) => amenity.title !== "Wi-Fi"
  );
  //   console.log(amenitiesWithoutWiFi);
  //   const [checkedAmenity, setCheckedAmenity] = useState(false);
  //   const [amenitiesArr, setAmenitiesArr] = useState([]);
  //   const pathname = usePathname();
  //   console.log(pathname);
  //   const numberOfRooms = Number(pathname.slice(-1));
  //   console.log(numberOfRooms);
  //   const isClient = typeof window !== "undefined";
  //   let string;
  //   if (isClient) {
  //     string = window.location.href.toString().slice(-1);
  //   }
  //   console.log(string);

  //   console.log(amenitiesArr);

  //   const isRoomsNumber = () => {
  //     switch (numberOfRooms) {
  //       case 1:
  //         return true;
  //         break;
  //       case 2:
  //         return true;
  //         break;
  //       case 3:
  //         return true;
  //         break;
  //       default:
  //         false;
  //     }
  //   };

  //   const filterCheckboxStyles = checkedAmenity
  //     ? styles.filterInputCheckbox__Checked
  //     : styles.filterInputCheckbox;

  //   const handleChangeAmenity = () => {
  //     setCheckedAmenity(!checkedAmenity);

  //   const handleResetFilter = () => {
  //     setAmenitiesArr([]);
  //   };
  //   };
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
                  title={
                    i18n.language === currentLanguages.EN
                      ? item.titleEN
                      : item.title
                  }
                  // titleUA={item.titleUA}
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
