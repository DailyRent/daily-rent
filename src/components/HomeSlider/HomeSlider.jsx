"use client";

import React, { useEffect, useState } from "react";
import styles from "./HomeSlider.module.scss";
import useSWR from "swr";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay, Mousewheel } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const HomeSlider = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/apartments", fetcher);
  // console.log(data);

  // Filter the data to get only the item with top === true
  const topData = data ? data.filter((item) => item.top === true) : [];
  // const topData = data?.filter((item) => item.top === true)

  // Now, filteredData contains only the item(s) with flatNumber=66

  const [slidesPerView, setSlidesPerView] = useState(5); // Default value for slidesPerView

  // Function to update slidesPerView based on viewport width
  const updateSlidesPerView = () => {
    if (window.innerWidth < 500) {
      setSlidesPerView(1); // Adjust this value for smaller screens
    } else if (window.innerWidth < 700) {
      setSlidesPerView(2); // Adjust this value for medium-sized screens
    } else if (window.innerWidth < 900) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1400) {
      setSlidesPerView(4);
    } else if (window.innerWidth < 1700) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(5); // Default value for larger screens
    }
  };

  // Initial setup
  useEffect(() => {
    updateSlidesPerView();

    // Add an event listener to update slidesPerView when the window is resized
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.sliderText}>Lorem ipsum</p>
      <h2 className={styles.sliderTitle}>Lorem ipsum</h2>
      {isLoading ? (
        <p className={styles.isLoading}>Loading...</p>
      ) : (
        <Swiper
          slidesPerView={slidesPerView}
          // spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          // speed={1000}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          // }}
          // effect="slide"

          // loop={true}
          mousewheel={true}
          modules={[Pagination, Navigation, Autoplay, Mousewheel]}
          className="HomeSliderSwiper"
        >
          {topData?.map((el) => {
            return (
              <SwiperSlide key={el._id}>
                <Link href={`home/${el._id}`} className="link">
                  <div className="div">
                    <Image src={el.titleImg} fill={true} alt={el.objNumber} />
                  </div>
                  <p className="slideDescr">{el.objNumber}</p>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default HomeSlider;
