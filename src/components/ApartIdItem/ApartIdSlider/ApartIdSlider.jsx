import Image from 'next/image';
import styles from './ApartIdSlider.module.scss';

const ApartIdSlider = ({ dataId }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={dataId.titleImg}
          alt="titleImg"
          className={styles.img}
          fill={true}
          sizes="(min-width: 768px) 356px, (min-width: 1280px) 770px"
        />
      </div>
      <ul className={styles.imgsList}>
        {dataId.imgs.map((img, index) => (
          <li key={index}>
            <div className={styles.imgSliderContainer}>
              <Image
                src={img}
                alt="image"
                fill={true}
                className={styles.img}
                sizes="(min-width: 768px) 220px"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApartIdSlider;

// import { useState } from 'react';
// import Image from 'next/image';
// import styles from './ApartIdSlider.module.scss';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import './styles.css';

// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// const ApartIdSlider = ({ dataId }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   return (
//     <div>
//       <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         {dataId.imgs.map((img, index) => (
//           <SwiperSlide key={index}>
//             {/* <div className={styles.imgSliderContainer}> */}
//             <Image src={img} alt="image" fill={true} className={styles.img} />
//             {/* </div> */}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         {dataId.imgs.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div className={styles.imgSliderContainer}>
//               <Image src={img} alt="image" fill={true} className={styles.img} />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ApartIdSlider;
