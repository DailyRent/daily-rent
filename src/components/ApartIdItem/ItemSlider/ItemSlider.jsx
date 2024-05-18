"use client";

import React, { useState, useEffect, useMemo } from "react";
import styles from "./ItemSlider.module.scss";
import { v4 } from "uuid";
import { CldImage } from "next-cloudinary";
import seoStyles from "@/app/seoStyles.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Thumbs,
  FreeMode,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ItemSliderTop.css";
import "./ItemSliderBottom.css";

const ItemSlider = ({ dataId }) => {
  // const [item, setItem] = useState(null);
  const [item, setItem] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = dataId?.imgs;

  const allImages = useMemo(
    () => [dataId?.titleImg, ...images],
    [dataId, images]
  );

  // const imgPtiority = dataId?.titleImg ? true : false;
  // const imgLoading = dataId?.titleImg ? "eager" : "lazy";

  useEffect(() => {
    setItem(
      // allImages.map((item) => {
      allImages.map((el, i, arr) => {
        const imgLoading = i === 0 ? "eager" : "lazy";
        const imgPtiority = i === 0 ? true : false;
        const imgSizes =
          i === 0
            ? "(max-width: 767px) 100vw, (max-width: 1440px) 50vw, 33vw"
            : "(max-width: 767px) 33vw,  17vw";
        return (
          <SwiperSlide key={v4()}>
            <CldImage
              src={el}
              alt="Flat image"
              fill={true}
              loading={imgLoading}
              sizes={imgSizes}
              priority={imgPtiority}
            />
          </SwiperSlide>
        );
      })
    );
    // }, [allImages, imgLoading, imgPtiority]);
  }, [allImages]);

  return (
    <article className={styles.swiperContainer}>
      <h4 className={seoStyles.titleHidden}>
        Detailed images of the apartment
      </h4>
      {/* {item && ( */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Pagination, Thumbs, Keyboard]}
        className="ItemSliderTop"
      >
        {item}
      </Swiper>
      {/* )} */}

      {/* {item && ( */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={16}
        slidesPerView={3}
        mousewheel={true}
        loop={true}
        freeMode={true}
        watchSlidesProgress={true}
        keyboard={{
          enabled: true,
        }}
        modules={[FreeMode, Navigation, Thumbs, Keyboard, Mousewheel]}
        className="ItemSliderBottom"
      >
        {item}
      </Swiper>
      {/* )} */}
    </article>
  );
};

export default ItemSlider;
