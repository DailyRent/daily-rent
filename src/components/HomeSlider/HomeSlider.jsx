"use client";

import React, { useEffect, useState } from "react";
import styles from "./HomeSlider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(5); // Default value for slidesPerView

  // Function to update slidesPerView based on viewport width
  const updateSlidesPerView = () => {
    if (window.innerWidth < 500) {
      setSlidesPerView(1); // Adjust this value for smaller screens
    } else if (window.innerWidth < 800) {
      setSlidesPerView(2); // Adjust this value for medium-sized screens
    } else if (window.innerWidth < 1100) {
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
      <Swiper
        slidesPerView={slidesPerView}
        // spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        speed={2000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        effect="slide"
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="HomeSliderSwiper"
      >
        <SwiperSlide>
          <div className="div">Slide 0</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="div">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="div">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="div">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="div">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="div">Slide 5</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="div">Slide 6</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="div">Slide 7</div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="div">Slide 8</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
