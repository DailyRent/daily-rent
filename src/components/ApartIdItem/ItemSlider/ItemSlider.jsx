import React, { useState } from "react";
import styles from "./ItemSlider.module.scss";
import { v4 } from "uuid";
import Image from "next/image";

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

  const item = images.map((item) => {
    // console.log(item);
    return (
      <SwiperSlide key={v4()}>
        <Image
          src={item}
          alt="Flat image"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </SwiperSlide>
    );
  });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[
          FreeMode,
          Navigation,
          Pagination,
          Thumbs,
          Mousewheel,
          Keyboard,
        ]}
        loop={true}
        // mousewheel={true}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="ItemSliderTop"
      >
        {item}
      </Swiper>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs, Mousewheel, Keyboard]}
        onSwiper={setThumbsSwiper}
        spaceBetween={16}
        slidesPerView={3}
        mousewheel={true}
        freeMode={true}
        // loop={true}
        watchSlidesProgress={true}
        className="ItemSliderBottom"
      >
        {item}
      </Swiper>
    </div>
  );
};

export default ItemSlider;
