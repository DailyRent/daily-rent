import { amenities } from '@/data/amenities.data';
import Image from 'next/image';
import styles from './Amenities.module.scss';

const Amenities = ({ dataId }) => {
  const matchingAmenities = amenities.filter((amenity) =>
    dataId.amenities.includes(amenity.titleUA)
  );

  return (
    <div className={styles.propositionContainer}>
      <h2 className={styles.propositionTitle}>Що буде в апартаментах ?</h2>
      <ul className={styles.propositionList}>
        {matchingAmenities.map((amenity) => (
          <li key={amenity.id} className={styles.propositionItem}>
            <div className={styles.imgSvgContainer}>
              <Image
                src={amenity.img}
                alt="Shower"
                fill={true}
                className={styles.imgSvg}
                sizes="(min-width: 768px) 24px,"
              />
            </div>
            {amenity.titleUA}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;

// import Image from 'next/image';
// import styles from './Amenities.module.scss';

// const Amenities = () => {
//   return (
//     <div className={styles.propositionContainer}>
//       <h2 className={styles.propositionTitle}>Що буде в апартаментах ?</h2>
//       <ul className={styles.propositionList}>
//         <li className={styles.propositionItem}>
//           <div className={styles.imgSvgContainer}>
//             <Image
//               src="/png/Shower.png"
//               alt="Shower"
//               fill={true}
//               className={styles.imgSvg}
//             />
//           </div>
//           Shower
//         </li>
//         <li className={styles.propositionItem}>
//           <div className={styles.imgSvgContainer}>
//             <Image
//               src="/png/Wi-Fi.png"
//               alt="Shower"
//               fill={true}
//               className={styles.imgSvg}
//             />
//           </div>
//           WiFi
//         </li>
//         <li className={styles.propositionItem}>
//           <div className={styles.imgSvgContainer}>
//             <Image
//               src="/png/Microwave.png"
//               alt="Shower"
//               fill={true}
//               className={styles.imgSvg}
//             />
//           </div>
//           Microwave
//         </li>
//         <li className={styles.propositionItem}>
//           <div className={styles.imgSvgContainer}>
//             <Image
//               src="/png/Washing Machine.png"
//               alt="Shower"
//               fill={true}
//               className={styles.imgSvg}
//             />
//           </div>
//           Washing machine
//         </li>
//         <li className={styles.propositionItem}>
//           <div className={styles.imgSvgContainer}>
//             <Image
//               src="/png/Air Quality.png"
//               alt="Shower"
//               fill={true}
//               className={styles.imgSvg}
//             />
//           </div>
//           Air conditioning
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Amenities;
