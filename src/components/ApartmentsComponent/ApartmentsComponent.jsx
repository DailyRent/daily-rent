// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import styles from "./Apartments.module.scss";
// import { useTranslation } from "react-i18next";
// import { GetData } from "@/fetch/clientFetch";
// import ApartItem from "@/components/ApartItem/ApartItem";
// import IsLoading from "@/components/share/IsLoading/IsLoading";
// import ButtonFilter from "@/components/share/ButtonFilter/ButtonFilter";
// import Link from "next/link";
// import FilterRooms from "@/components/FilterRooms/FilterRooms";
// import Filter from "@/components/Filter/Filter";
// import seoStyles from "@/app/seoStyles.module.css";

// const ApartmentsComponent = () => {
//   const { data, error, isLoading } = GetData();
//   const [loadedCount, setLoadedCount] = useState(12);
//   const [showLoading, setShowLoading] = useState(false);
//   const [amenitiesArr, setAmenitiesArr] = useState([]);
//   const [numberRoomsArr, setNumberRoomsArr] = useState([]);
//   const { t } = useTranslation();

//   const containerRef = useRef();

//   const filteredRoomsData = data?.filter((room) => {
//     if (numberRoomsArr.length === 0) return true; //якщо фільтр пустий, виводимо всі квартири

//     const filteredRooms = numberRoomsArr.some(
//       (numberRoom) => numberRoom == room.roomsQuantity //якщо хоча б один з фільтрів співпадає, виводимо цю квартиру
//     );
//     return filteredRooms;
//   });

//   const filteredAmenitiesData = filteredRoomsData?.filter((room) => {
//     const amenities = room.amenities;

//     const filteredAmenities = amenitiesArr.every((amenity) =>
//       amenities.includes(amenity)
//     );

//     return filteredAmenities;
//   });

//   const notFoundText = () => {
//     if (
//       numberRoomsArr.includes("1") &&
//       !numberRoomsArr.includes("2") &&
//       !numberRoomsArr.includes("3")
//     )
//       return t("ApartmentsPage.OneRoom");

//     if (
//       !numberRoomsArr.includes("1") &&
//       numberRoomsArr.includes("2") &&
//       !numberRoomsArr.includes("3")
//     )
//       return t("ApartmentsPage.TwoRoom");

//     if (
//       !numberRoomsArr.includes("1") &&
//       !numberRoomsArr.includes("2") &&
//       numberRoomsArr.includes("3")
//     )
//       return t("ApartmentsPage.ThreeRoom");
//     if (
//       numberRoomsArr.includes("1") &&
//       numberRoomsArr.includes("2") &&
//       !numberRoomsArr.includes("3")
//     )
//       return t("ApartmentsPage.OneAndTwoRoom");
//     if (
//       numberRoomsArr.includes("1") &&
//       !numberRoomsArr.includes("2") &&
//       numberRoomsArr.includes("3")
//     )
//       return t("ApartmentsPage.OneAndThreeRoom");

//     if (
//       !numberRoomsArr.includes("1") &&
//       numberRoomsArr.includes("2") &&
//       numberRoomsArr.includes("3")
//     )
//       return t("ApartmentsPage.TwoAndThreeRoom");
//   };
//   const handleScroll = () => {
//     const container = containerRef.current;

//     if (!showLoading && filteredAmenitiesData?.length && container) {
//       const containerHeight = container.offsetHeight;
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const bottomOffset = containerHeight - scrollY - windowHeight;

//       if (bottomOffset < 100 && loadedCount < filteredAmenitiesData.length) {
//         setShowLoading(true);

//         setTimeout(() => {
//           setLoadedCount(loadedCount + 12);
//           setShowLoading(false);
//         }, 500);
//       }
//     }
//   };

//   // const handleScroll = () => {
//   //   if (!showLoading && data?.length) {
//   //     if (
//   //       window.innerHeight + window.scrollY >= document.body.offsetHeight &&
//   //       loadedCount < data.length
//   //     ) {
//   //       setShowLoading(true);
//   //       setTimeout(() => {
//   //         setLoadedCount(loadedCount + 12);
//   //         setShowLoading(false);
//   //       }, 1000);
//   //     }
//   //   }
//   // };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//     // eslint-disable-next-line
//   }, [filteredAmenitiesData, loadedCount]);

//   return (
//     <section className={styles.container}>
//       <h1 className={seoStyles.titleHidden}>
//         Оренда квартири суми. Суми квартири. Квартири подобово.
//       </h1>
//       <div className={styles.filterContainer}>
//         <div className={styles.backContainer}>
//           {!isLoading && (
//             <span className="textLink">
//               <Link href="/" prefetch={false} className="textLinkAnimation">
//                 {t("Navigation.MainPage")}
//               </Link>
//               /{" "}
//               <span className={styles.active}>
//                 {t("Navigation.Apartments")}
//               </span>
//             </span>
//           )}
//         </div>
//         <ButtonFilter />
//       </div>
//       <Filter amenitiesArr={amenitiesArr} setAmenitiesArr={setAmenitiesArr} />
//       <FilterRooms
//         numberRoomsArr={numberRoomsArr}
//         setNumberRoomsArr={setNumberRoomsArr}
//       />
//       {isLoading ? (
//         <IsLoading />
//       ) : (
//         <ul ref={containerRef} className={styles.containerOneRooms}>
//           {filteredAmenitiesData?.length > 0 &&
//             filteredAmenitiesData
//               .slice(0, loadedCount)
//               .map((item) => (
//                 <ApartItem
//                   key={item._id}
//                   titleImg={item.titleImg}
//                   code={item.code}
//                   address={item.address}
//                   price={item.price}
//                   objNumber={item.objNumber}
//                   roomsQuantity={item.roomsQuantity}
//                   id={item._id}
//                 />
//               ))}
//         </ul>
//       )}
//       {filteredAmenitiesData?.length <= 0 && (
//         <div className={styles.notFoundTextStyles}>
//           <p>
//             {notFoundText()} {t("ApartmentsPage.NotFound")}
//           </p>
//         </div>
//       )}
//       {showLoading && (
//         <div className={styles.loading}>
//           <IsLoading />
//         </div>
//       )}
//     </section>
//   );
// };

// export default ApartmentsComponent;

"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Apartments.module.scss";
import { useTranslation } from "react-i18next";
import { GetData } from "@/fetch/clientFetch";
import ApartItem from "@/components/ApartItem/ApartItem";
import IsLoading from "@/components/share/IsLoading/IsLoading";
import ButtonFilter from "@/components/share/ButtonFilter/ButtonFilter";
import Link from "next/link";
import FilterRooms from "@/components/FilterRooms/FilterRooms";
import Filter from "@/components/Filter/Filter";
import seoStyles from "@/app/seoStyles.module.css";
import { currentLanguages } from "@/data";

const ApartmentsComponent = () => {
  const { data, error, isLoading } = GetData();
  const [loadedCount, setLoadedCount] = useState(12);
  const [showLoading, setShowLoading] = useState(false);
  const [amenitiesArr, setAmenitiesArr] = useState([]);
  const [numberRoomsArr, setNumberRoomsArr] = useState([]);
  const [numberBedsArr, setNumberBedsArr] = useState([]);
  const { t, i18n } = useTranslation();
  const containerRef = useRef();
  // console.log(data);
  const filteredRoomsData = data?.filter((room) => {
    if (numberRoomsArr.length === 0) return true; //якщо фільтр пустий, виводимо всі квартири

    const filteredRooms = numberRoomsArr.some(
      (numberRoom) => numberRoom == room.roomsQuantity //якщо хоча б один з фільтрів співпадає, виводимо цю квартиру
    );
    return filteredRooms;
  });

  const filteredBedsData = filteredRoomsData?.filter((bed) => {
    const filteredBeds = numberBedsArr.every(
      (numberBed) => numberBed != bed.bedsQuantity
    );
    return filteredBeds;
  });

  const filteredAmenitiesData = filteredBedsData?.filter((room) => {
    const amenities = room.amenities;

    const filteredAmenities = amenitiesArr.every((amenity) =>
      amenities.includes(amenity)
    );

    return filteredAmenities;
  });

  const notFoundText = () => {
    if (
      numberRoomsArr.includes("1") &&
      !numberRoomsArr.includes("2") &&
      !numberRoomsArr.includes("3")
    )
      return t("ApartmentsPage.OneRoom");

    if (
      !numberRoomsArr.includes("1") &&
      numberRoomsArr.includes("2") &&
      !numberRoomsArr.includes("3")
    )
      return t("ApartmentsPage.TwoRoom");

    if (
      !numberRoomsArr.includes("1") &&
      !numberRoomsArr.includes("2") &&
      numberRoomsArr.includes("3")
    )
      return t("ApartmentsPage.ThreeRoom");
    if (
      numberRoomsArr.includes("1") &&
      numberRoomsArr.includes("2") &&
      !numberRoomsArr.includes("3")
    )
      return t("ApartmentsPage.OneAndTwoRoom");
    if (
      numberRoomsArr.includes("1") &&
      !numberRoomsArr.includes("2") &&
      numberRoomsArr.includes("3")
    )
      return t("ApartmentsPage.OneAndThreeRoom");

    if (
      !numberRoomsArr.includes("1") &&
      numberRoomsArr.includes("2") &&
      numberRoomsArr.includes("3")
    )
      return t("ApartmentsPage.TwoAndThreeRoom");
  };
  const handleScroll = () => {
    const container = containerRef.current;

    if (!showLoading && filteredAmenitiesData?.length && container) {
      const containerHeight = container.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bottomOffset = containerHeight - scrollY - windowHeight;

      if (bottomOffset < 100 && loadedCount < filteredAmenitiesData.length) {
        setShowLoading(true);

        setTimeout(() => {
          setLoadedCount(loadedCount + 12);
          setShowLoading(false);
        }, 500);
      }
    }
  };

  // const handleScroll = () => {
  //   if (!showLoading && data?.length) {
  //     if (
  //       window.innerHeight + window.scrollY >= document.body.offsetHeight &&
  //       loadedCount < data.length
  //     ) {
  //       setShowLoading(true);
  //       setTimeout(() => {
  //         setLoadedCount(loadedCount + 12);
  //         setShowLoading(false);
  //       }, 1000);
  //     }
  //   }
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, [filteredAmenitiesData, loadedCount]);

  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Оренда квартири суми. Суми квартири. Квартири подобово.
      </h1>
      <div className={styles.filterContainer}>
        <nav className={styles.backContainer}>
          {!isLoading && (
            <article className="textLink">
              <h2 className={seoStyles.titleHidden}>Navigation</h2>
              <Link href="/" prefetch={false} className="textLinkAnimation">
                {t("Navigation.MainPage")}
              </Link>
              / <span className="active">{t("Navigation.Apartments")}</span>
            </article>
          )}
        </nav>
        <ButtonFilter />
      </div>
      <Filter
        amenitiesArr={amenitiesArr}
        setAmenitiesArr={setAmenitiesArr}
        numberBedsArr={numberBedsArr}
        setNumberBedsArr={setNumberBedsArr}
      />
      <FilterRooms
        numberRoomsArr={numberRoomsArr}
        setNumberRoomsArr={setNumberRoomsArr}
      />
      {isLoading ? (
        <IsLoading />
      ) : (
        <ul ref={containerRef} className={styles.containerOneRooms}>
          {filteredAmenitiesData?.length > 0 &&
            filteredAmenitiesData
              .slice(0, loadedCount)
              .map((item) => (
                <ApartItem
                  key={item._id}
                  titleImg={item.titleImg}
                  code={item.code}
                  address={
                    i18n.language === currentLanguages.EN
                      ? item.addressEn
                      : item.address
                  }
                  price={item.price}
                  objNumber={item.objNumber}
                  roomsQuantity={item.roomsQuantity}
                  id={item._id}
                />
              ))}
        </ul>
      )}
      {filteredAmenitiesData?.length <= 0 && (
        <div className={styles.notFoundTextStyles}>
          <p>
            {notFoundText()} {t("ApartmentsPage.NotFound")}
          </p>
        </div>
      )}
      {showLoading && (
        <div className={styles.loading}>
          <IsLoading />
        </div>
      )}
    </section>
  );
};

export default ApartmentsComponent;
