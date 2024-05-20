'use client';

import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import OrderBtn from '../OrderBtn/OrderBtn';
import IsLoading from '../share/IsLoading/IsLoading';
import Amenities from './Amenities/Amenities';
import ApartDataList from './ApartDataList/ApartDataList';
import { currentLanguages, textInfoAppartId } from '@/data';
import styles from './ApartIdItem.module.scss';
import ItemSlider from './ItemSlider/ItemSlider';
import ModalR from '@/components/Modal/Modal';
import OrderForm from '@/components/OrderForm/OrderForm';
import { SiteContext } from '@/context/SiteContext';
import Link from 'next/link';
import seoStyles from '@/app/seoStyles.module.css';
// import useSWR from 'swr';
import { v4 } from 'uuid';
import { GetDataById } from '@/fetch/clientFetch';

const ApartIdItem = ({ params }) => {
  const { data, error, isLoading } = GetDataById(params.id)

  const dataId = data && !isLoading ? data : error;

  // массив для добавления description квартиры в карточку
  const descsToPushArray = [];

  // строки из БД, которые преобразуется в массивы
  const descArrayFromData = data?.description.split(' | ');
  const descEnArrayFromData = data?.descriptionEn.split(' | ');

  // наполнение массива данными из БД
  descArrayFromData?.map((item) => {
    const id = v4();
    const text = item;
    const obj = {
      id,
      text,
      textEN: '',
    };
    descsToPushArray.push(obj);
  });

  descsToPushArray.map((item, index) => {
    item.textEN = descEnArrayFromData[index];
  });

  // общий массив для рендера, созданный путем распыления массивов данных из локальной data и БД
  const allInformation = [...descsToPushArray, ...textInfoAppartId];

  const { t, i18n } = useTranslation();
  const { isModalOpen, openModal, closeModal } = useContext(SiteContext);

  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Оренда квартири суми. Суми квартири. Зняти квартиру суми. Сумы.
      </h1>
      <nav className={styles.backContainer}>
        {!isLoading && (
          <article className="textLink">
            <h2 className={seoStyles.titleHidden}>Navigation</h2>
            <Link href="/" prefetch={false} className="textLinkAnimation">
              {t('Navigation.MainPage')}
            </Link>
            /
            <Link href="/apartments" className="textLinkAnimation">
              {t('Navigation.Apartments')}
            </Link>
            /<span className="active"># {dataId?.objNumber}</span>
          </article>
        )}
      </nav>
      <ModalR isOpen={isModalOpen} closeModal={closeModal}>
        <OrderForm isOpen={isModalOpen} closeModal={closeModal} />
      </ModalR>
      {isLoading ? (
        <IsLoading />
      ) : (
        <article className={styles.apartContent}>
          <h3 className={seoStyles.titleHidden}>
            Detailed information about the apartments
          </h3>
          <ItemSlider dataId={dataId} />
          <article className={styles.content}>
            <h4 className={seoStyles.titleHidden}>
              Detailed information about the amenities
            </h4>
            <ApartDataList dataId={dataId} />
            <hr style={{ width: '100%' }} />
            <Amenities dataId={dataId} />
            <OrderBtn className={styles.orderBtn} openModal={openModal} />
          </article>
        </article>
      )}
      <article className={styles.textGrid}>
        <ul className={styles.textInfoContainer}>
          {!isLoading &&
            allInformation.map((el, index) => {
              return (
                <li key={index}>
                  <h5 className={styles.textInfoTitle}>
                    {i18n.language === currentLanguages.EN
                      ? el.titleEN
                      : el.title}
                  </h5>
                  <p className={styles.textInfoRulse}>
                    {i18n.language === currentLanguages.EN
                      ? el.textEN
                      : el.text}

                    {el.title === 'Правила:' &&
                      el.rulesList.map((el, index) => {
                        return (
                          <span key={index}>
                            {i18n.language === currentLanguages.EN
                              ? el.rulesEN
                              : el.rules}
                          </span>
                        );
                      })}
                  </p>
                </li>
              );
            })}
        </ul>
      </article>
    </section>
  );
};

export default ApartIdItem;
