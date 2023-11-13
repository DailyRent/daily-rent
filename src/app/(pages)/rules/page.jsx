"use client";
import React from "react";
import styles from "./page.module.scss";
import { RulesInApartment, Prohibited, Eviction, currentLanguages } from "@/data";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
// import ButtonToBack from "@/components/share/ButtonToBack/ButtonToBack";
import Link from "next/link";
import seoStyles from "@/app/seoStyles.module.css";

const RulesPage = () => {
  // const router = useRouter();
  const { t } = useTranslation();
  const {i18n}= useTranslation()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Оренда квартири суми. Аренда квартиры Сумы. Суми квартири.
      </h1>
      {/* <h1 className="visuallyHidden">Rules Page</h1> */}
      <div className={styles.toBackContainer}>
        {!isLoading && (
          <span className="textLink">
            <Link href="/" prefetch={false} className="textLinkAnimation">
              {t("Navigation.MainPage")}
            </Link>
            / <span className={styles.active}>{t("Navigation.Rules")}</span>
          </span>
        )}
      </div>

      {!isLoading && <><h2 className={styles.rulesListItem}>{t("RulesPage.MainTitle")}</h2>
      <ul className={styles.rulesList}>
        <li>
          <h3 className={styles.decimalListTitle}>
          {t("RulesPage.TitleSection1")}
          </h3>
          <ol className={styles.decimalList}>
            {RulesInApartment.map(({id,rule,ruleEN})=>{
              return (<li key={id}>{i18n.language===currentLanguages.EN ? ruleEN : rule  }</li>)
            })}
            {/* <li>Необхідно зберігати тишу та громадський порядок в квартирі.</li>
            <li>
              У випадку пошкодження майна, яке знаходиться в квартирі, орендар
              компенсує орендодавцю ринкову вартість пошкодженого майна. 
            </li>
            <li>
              Заселення відбувається з 13.00. Виселення відбувається о 12.00.
            </li>
            <li>Розрахунковий час – 12.00, незалежно від часу заселення.</li>
            <li>
              Адміністрація не несе відповідальності за збереження речей
              орендаря.
            </li>
            <li>
              Адміністрація не несе відповідальності за роботу міських
              комунікацій (відключення води, світла, газу, опалення).
            </li>
            <li>
              Орендна плата за проживання не повертається, якщо Ви вирішите
              залишити орендоване приміщення раніше запланованої дати.
            </li>
            <li>Передплата за проживання не повертається.</li>
            <li>
              Кількість людей, які можуть перебувати у квартирі-готелі, не може
              перевищувати 2-х осіб. У разі перебування у квартирі людей, більше
              домовленої кількості, адміністрація має право негайно виселити
              орендаря без повернення грошей за проживання.
            </li> */}
          </ol>
        </li>
        <li>
          <h3 className={styles.decimalListTitle}>
          {t("RulesPage.TitleSection2")}
          </h3>
          <ol className={styles.decimalList}>
            {Prohibited.map(({id,rule,ruleEN})=>{
              return (<li key={id}>{i18n.language===currentLanguages.EN ? ruleEN : rule  }</li>)
            })}
            {/* <li>
              Палити у приміщенні квартири-готелі. У разі паління у приміщенні
              квартири-готелю орендар зобов&apos;язується сплатити штраф у
              розмірі плати за проживання за 1 добу. ПАЛИТИ ЗАБОРОНЕНО.
            </li>
            <li>Порушувати тишу та громадський порядок.</li>
            <li>
              Проводити в орендованій квартирі-готелі святкування, зустрічі,
              гуляння тощо.
            </li>
            <li>
              Поміщати в квартиру-готель, що орендується, сторонніх людей, більш
              домовленої кількості. 
            </li>
            <li>
              Залишати в квартирі-готелі, що орендується, сторонніх людей,
              передавати їм ключі від квартири, паролі доступу до мережі
              «Інтернет».
            </li>
            <li>
              Квартира-готель категорично не здається для заходів, групам осіб,
              компаніям, для святкування будь-яких урочистостей та інших
              зустрічей за участю більше 2-х осіб. Забороняється запрошувати у
              квартиру-готель гостей на чай та інші зустрічі.
            </li> */}
          </ol>
        </li>
        <li>
          <h3 className={styles.decimalListTitle}>
          {t("RulesPage.TitleSection3")}
          </h3>
          <ol className={styles.decimalList}>
            {Eviction.map(({id,rule,ruleEN})=>{
              return (<li key={id}>{i18n.language===currentLanguages.EN ? ruleEN : rule  }</li>)
            })}
            {/* <li>Порушення цих правил.</li>
            <li>Паління у квартирі-готелі.</li>
            <li>Порушення правил громадського порядку у квартирі-готелі.</li>
            <li>
              Пред&apos;явлення претензій з боку сусідів, що проживають поруч.
            </li>
            <li>Перебування у квартирі людей, більше домовленої кількості.</li>
            <li>
              Проведення у квартирі-готелі святкувань, зустрічей, гулянь тощо.
            </li>
            <li>Заподіяння значних матеріальних збитків орендодавцю.</li> */}
          </ol>
        </li>
      </ul></>}
    </section>
  );
};

export default RulesPage;
