"use client";

import React, { useEffect, useState } from "react";
import styles from "./HomeSlider.module.scss";

import Link from "next/link";

import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data";
import { CldImage } from "next-cloudinary";

import { GetData } from "@/fetch/clientFetch";
import Loading from "@/app/loading";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  const { data, error, isLoading } = GetData();
  const { i18n } = useTranslation();
  // Filter the data to get only the item with top === true
  const topData = data ? data.filter((item) => item.top === true) : [];

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
    <section className={styles.container}>
      {isLoading ? (
        <Loading className={styles.sliderLoader} />
      ) : (
        <Swiper
          slidesPerView={slidesPerView}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 2400,
            pauseOnMouseEnter: true,
          }}
          effect="slide"
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Pagination, Navigation, Keyboard, Autoplay]}
          className="HomeSliderSwiper"
        >
          {topData?.map((el) => {
            return (
              <SwiperSlide key={el._id}>
                <Link
                  href={`apartments/${el._id}`}
                  className="link"
                  data-title={
                    i18n.language === currentLanguages.EN
                      ? el.addressEn
                      : el.address
                  }
                >
                  <div className="div">
                    <CldImage
                      src={el.titleImg}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={
                        i18n.language === currentLanguages.EN
                          ? el.addressEn
                          : el.address
                      }
                      loading="lazy"
                    />
                  </div>
                  <div className="slideDescr">
                    <p>{el.objNumber}</p>
                    <p>{el.price} &#8372;</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default HomeSlider;