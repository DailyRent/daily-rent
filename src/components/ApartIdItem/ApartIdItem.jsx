"use client";

import { useContext } from "react";
import { useTranslation } from "react-i18next";
import OrderBtn from "../OrderBtn/OrderBtn";
import IsLoading from "../share/IsLoading/IsLoading";
import Amenities from "./Amenities/Amenities";
import ApartDataList from "./ApartDataList/ApartDataList";
import styles from "./ApartIdItem.module.scss";
// import ApartIdSlider from './ApartIdSlider/ApartIdSlider';
import ItemSlider from "./ItemSlider/ItemSlider";
import ApartStar from "./ApartStar/ApartStar";
import ModalR from "@/components/Modal/Modal";
import OrderForm from "@/components/OrderForm/OrderForm";
import { SiteContext } from "@/context/SiteContext";
import Link from "next/link";
import seoStyles from "@/app/seoStyles.module.css";
import useSWR from "swr";

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
      <nav className={styles.backContainer}>
        {!isLoading && (
          <article className="textLink">
            <h2 className={seoStyles.titleHidden}>Navigation</h2>
            <Link href="/" prefetch={false} className="textLinkAnimation">
              {t("Navigation.MainPage")}
            </Link>
            /
            <Link href="/apartments" className="textLinkAnimation">
              {t("Navigation.Apartments")}
            </Link>
            /<span className="active"># {dataId?.objNumber}</span>
          </article>
        )}
      </nav>
      <ModalR isOpen={isModalOpen} closeModal={closeModal}>
        <OrderForm isOpen={isModalOpen} closeModal={closeModal} />
      </ModalR>
      {/* <h1 className="visuallyHidden">ApartId Page</h1> */}
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
            <div className={styles.arrow}></div>
            <Amenities dataId={dataId} />
            <ApartStar dataId={dataId} />
            <OrderBtn className={styles.orderBtn} openModal={openModal} />
          </article>
        </article>
      )}
      {/* <p className={styles.textInfo}>
        {i18n.language === "ua" ? dataId?.description : dataId?.descriptionEn}
      </p> */}
      <article className={styles.textGrid}>
        <h6 className={styles.textWelcome}>Ласкаво просимо до DailyRent.</h6>
        <ul className={styles.textInfo}>
          <li>
            <p>
              &#8226; Наші просторі квартири вражають комфортом та стилем,
              ідеально підходять для відпочинку чи робочого перебування у місті
              Суми.
            </p>
          </li>
          <li>
            <p>
              &#8226; Кожна квартира обладнана зручними меблями, повністю
              укомплектована кухнею, технікою та Wi-Fi.
            </p>
          </li>
          <li>
            <p>
              &#8226; Гарантуємо комфорт та стиль для вашого відпочинку чи
              роботи в місті.
            </p>
          </li>
          <li>
            <p>
              &#8226; Локації квартир забезпечують легкий доступ до пам&#39;яток
              та інфраструктури. Забронюйте подобово за доступною ціною та
              насолоджуйтеся зручністю житла в центрі міста.
            </p>
          </li>
          <li>
            <p>
              &#8226; Виберіть наше житло для оренди та насолоджуйтеся комфортом
              та стилем. Зробіть своє перебування незабутнім з нашими зручними
              квартирами.
            </p>
          </li>
          <li>
            <p>
              &#8226; Заходьте до нас та насолоджуйтеся комфортом у кожній
              квартирі на подобову оренду у Сумах.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default ApartIdItem;
