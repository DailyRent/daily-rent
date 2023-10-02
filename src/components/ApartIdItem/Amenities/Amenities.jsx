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
