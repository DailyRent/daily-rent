import React, { useState } from "react";
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
  const images = dataId?.imgs;

  const allImages = [dataId?.titleImg, ...images];
  const priorityImg = dataId?.titleImg ? true : false;

  const item = allImages.map((item) => {
    // console.log(item);
    return (
      <SwiperSlide key={v4()}>
        <CldImage
          src={item}
          alt="Flat image"
          fill={true}
          loading="lazy"
          sizes="50vw"
        />
      </SwiperSlide>
    );
  });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <article className={styles.swiperContainer}>
      <h4 className={seoStyles.titleHidden}>
        Detailed images of the apartment
      </h4>
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
        // mousewheel={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[
          FreeMode,
          Navigation,
          Pagination,
          Thumbs,
          Mousewheel,
          Keyboard,
        ]}
        className="ItemSliderTop"
      >
        {item}
      </Swiper>
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
        // breakpoints={{
        //   580: { slidesPerView: 4 },
        //   768: { slidesPerView: 3 },
        // }}
        modules={[FreeMode, Navigation, Thumbs, Mousewheel, Keyboard]}
        className="ItemSliderBottom"
      >
        {item}
      </Swiper>
    </article>
  );
};

export default ItemSlider;
