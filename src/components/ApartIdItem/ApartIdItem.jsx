'use client';

import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import OrderBtn from '../OrderBtn/OrderBtn';
import IsLoading from '../share/IsLoading/IsLoading';
import Amenities from './Amenities/Amenities';
import ApartDataList from './ApartDataList/ApartDataList';
import styles from './ApartIdItem.module.scss';
// import ApartIdSlider from './ApartIdSlider/ApartIdSlider';
import ItemSlider from './ItemSlider/ItemSlider';
import ApartStar from './ApartStar/ApartStar';
import ModalR from '@/components/Modal/Modal';
import OrderForm from '@/components/OrderForm/OrderForm';
import { SiteContext } from '@/context/SiteContext';
import Link from 'next/link';
import seoStyles from '@/app/seoStyles.module.css';
import useSWR from 'swr';

const ApartIdItem = ({ params }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/apartments/${params.id}`,
    fetcher
  );

  const dataId = data && !isLoading ? data : error;
  // console.log(dataId?.googleMapLocation);

  const { t, i18n } = useTranslation();
  const { isModalOpen, openModal, closeModal } = useContext(SiteContext);

  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Оренда квартири суми. Суми квартири. Зняти квартиру суми. Сумы.
      </h1>
      <div className={styles.backContainer}>
        {!isLoading && (
          <span className="textLink">
            <Link href="/" prefetch={false} className="textLinkAnimation">
              {t('Navigation.MainPage')}
            </Link>
            /
            <Link href="/apartments" className="textLinkAnimation">
              {t('Navigation.Apartments')}
            </Link>
            /<span className={styles.active}># {dataId?.objNumber}</span>
          </span>
        )}
      </div>
      <ModalR isOpen={isModalOpen} closeModal={closeModal}>
        <OrderForm isOpen={isModalOpen} closeModal={closeModal} />
      </ModalR>
      {/* <h1 className="visuallyHidden">ApartId Page</h1> */}
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className={styles.apartContent}>
          <ItemSlider dataId={dataId} />
          <div className={styles.content}>
            <ApartDataList dataId={dataId} />
            <div className={styles.arrow}></div>
            <Amenities dataId={dataId} />
            <ApartStar dataId={dataId} />
            <OrderBtn className={styles.orderBtn} openModal={openModal} />
          </div>
        </div>
      )}
      {/* <p className={styles.textInfo}>
        {i18n.language === "ua" ? dataId?.description : dataId?.descriptionEn}
      </p> */}
      <div className={styles.textGrid}>
        <p className={styles.textWelcome}>Ласкаво просимо до DailyRent.</p>
        <div className={styles.textInfo}>
          <span>
            &#8226; Наші просторі квартири вражають комфортом та стилем,
            ідеально підходять для відпочинку чи робочого перебування у місті
            Суми.
          </span>
          <span>
            &#8226; Кожна квартира обладнана зручними меблями, повністю
            укомплектована кухнею, технікою та Wi-Fi.
          </span>
          <span>
            &#8226; Гарантуємо комфорт та стиль для вашого відпочинку чи роботи
            в місті.
          </span>
          <span>
            &#8226; Локації квартир забезпечують легкий доступ до пам&#39;яток
            та інфраструктури. Забронюйте подобово за доступною ціною та
            насолоджуйтеся зручністю житла в центрі міста.
          </span>
          <span>
            &#8226; Виберіть наше житло для оренди та насолоджуйтеся комфортом
            та стилем. Зробіть своє перебування незабутнім з нашими зручними
            квартирами.
          </span>
          <span>
            &#8226; Заходьте до нас та насолоджуйтеся комфортом у кожній
            квартирі на подобову оренду у Сумах.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ApartIdItem;
