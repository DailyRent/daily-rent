import { amenities } from '@/data/amenities.data';
import { currentLanguages } from '@/data/languages.data';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './Amenities.module.scss';

const Amenities = ({ dataId }) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const matchingAmenities = amenities.filter((amenity) =>
    dataId.amenities.includes(amenity.title)
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
            {i18n.language === currentLanguages.EN ? (
              <p>{amenity.titleEN}</p>
            ) : (
              <p>{amenity.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;
