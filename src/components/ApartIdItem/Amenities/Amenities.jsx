// import { amenities } from "@/data/amenities.data";
// import { currentLanguages } from "@/data/languages.data";
// import Image from "next/image";
// import { useTranslation } from "react-i18next";
// import styles from "./Amenities.module.scss";

// const Amenities = ({ dataId }) => {
//   const { i18n } = useTranslation();
//   const { t } = useTranslation();

//   const matchingAmenities = amenities.filter((amenity) =>
//     dataId.amenities.includes(amenity.title)
//   );

//   return (
//     <div className={styles.propositionContainer}>
//       <h2 className={styles.propositionTitle}>{t("ApartmentsPage.TextOfDescOptions")} ?</h2>
//       <ul className={styles.propositionList}>
//         {matchingAmenities.map((amenity) => (
//           <li key={amenity.id} className={styles.propositionItem}>
//             <div className={styles.imgSvgContainer}>
//               <Image
//                 src={amenity.img}
//                 alt="Shower"
//                 fill={true}
//                 className={styles.imgSvg}
//                 sizes="(min-width: 768px) 24px,"
//               />
//             </div>
//             {i18n.language === currentLanguages.EN ? (
//               <p>{amenity.titleEN}</p>
//             ) : (
//               <p>{amenity.title}</p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Amenities;
//
//
//
//
//
//

import { amenities, currentLanguages } from '@/data';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './Amenities.module.scss';

const Amenities = ({ dataId }) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const bed = {
    id: 100,
    titleEN: dataId.bedsQuantity,
    title: dataId.bedsQuantity,
    img: '/webp/Bed7.webp',
  };

  const matchingAmenities = amenities.filter((amenity) =>
    dataId.amenities.includes(amenity.title)
  );

  const matchingAmenitiesWithBed = [...matchingAmenities, bed];
  return (
    <article className={styles.propositionContainer}>
      <h5 className={styles.propositionTitle}>
        {t('ApartmentsPage.TextOfDescOptions')} ?
      </h5>
      <ul className={styles.propositionList}>
        {matchingAmenitiesWithBed.map((amenity) => (
          <li key={amenity.id} className={styles.propositionItem}>
            <figure
              className={
                amenity.title === dataId.bedsQuantity
                  ? styles.bedsQuantity + ' ' + styles.imgSvgContainer
                  : styles.imgSvgContainer
              }
            >
              <Image
                src={amenity.img}
                alt={
                  i18n.language === currentLanguages.EN
                    ? amenity.titleEN
                    : amenity.title
                }
                fill={true}
                className={styles.imgSvg}
                sizes="(min-width: 768px) 24px,"
              />
            </figure>
            {i18n.language === currentLanguages.EN ? (
              <figcaption>{amenity.titleEN}</figcaption>
            ) : (
              <figcaption>{amenity.title}</figcaption>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Amenities;
