"use client";
import React from "react";
import styles from "./page.module.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
// import ButtonToBack from "@/components/share/ButtonToBack/ButtonToBack";
// import { useRouter } from "next/navigation";
import Link from "next/link";

const RulesPage = () => {
  // const router = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">Rules Page</h1>
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
      {/* <div className={styles.ruleListThumb}>
        <ul className={styles.ruleList}>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
        </ul>
      </div> */}
      <h2>ПРАВИЛА ПРОЖИВАННЯ:</h2>
      <ul>
        <li>
          <h3>Правила поведінки в квартирі:</h3>
          <ol>
            <li>
              1. Необхідно зберігати тишу та громадський порядок в квартирі.
            </li>
            <li>
              2. У випадку пошкодження майна, яке знаходиться в квартирі,
              орендар компенсує орендодавцю ринкову вартість пошкодженого
              майна. 
            </li>
            <li>
              3. Заселення відбувається з 13.00. Виселення відбувається о 12.00.
            </li>
            <li>4. Розрахунковий час – 12.00, незалежно від часу заселення.</li>
            <li>
              5. Адміністрація не несе відповідальності за збереження речей
              орендаря.
            </li>
            <li>
              6. Адміністрація не несе відповідальності за роботу міських
              комунікацій ( вимкнення води, світла, газу, опалення)
            </li>
            <li>
              7. Адміністрація не несе відповідальності за роботу міських
              комунікацій (відключення води, світла, газу, опалення).
            </li>
            <li>
              8. Орендна плата за проживання не повертається, якщо Ви вирішите
              залишити орендоване приміщення раніше запланованої дати.
            </li>
            <li>9. Передплата за проживання не повертається.</li>
            <li>
              10. Кількість людей, які можуть перебувати у квартирі-готелі, не
              може перевищувати 2-х осіб. У разі перебування у квартирі людей,
              більше домовленої кількості, адміністрація має право негайно
              виселити орендаря без повернення грошей за проживання.
            </li>
          </ol>
        </li>
        <li>
          <h3>Категорично забороняється:</h3>
          <ol>
            <li>
              1. Палити у приміщенні квартири-готелі. У разі паління у
              приміщенні квартири-готелю орендар зобов&apos;язується сплатити
              штраф у розмірі плати за проживання за 1 добу. ПАЛИТИ ЗАБОРОНЕНО.
            </li>
            <li>2. Порушувати тишу та громадський порядок.</li>
            <li>
              3. Проводити в орендованій квартирі-готелі святкування, зустрічі,
              гуляння тощо.
            </li>
            <li>
              4. Поміщати в квартиру-готель, що орендується, сторонніх людей,
              більш домовленої кількості. 
            </li>
            <li>
              5. Залишати в квартирі-готелі, що орендується, сторонніх людей,
              передавати їм ключі від квартири, паролі доступу до мережі
              «Інтернет».
            </li>
            <li>
              6. Квартира-готель категорично не здається для заходів, групам
              осіб, компаніям, для святкування будь-яких урочистостей та інших
              зустрічей за участю більше 2-х осіб. Забороняється запрошувати у
              квартиру-готель гостей на чай та інші зустрічі.
            </li>
          </ol>
        </li>
        <li>
          <h3>
            Адміністрація має право негайно виселити орендаря без повер - нення
            грошей за проживання, у разі:
          </h3>
          <ol>
            <li>1. Порушення цих правил.</li>
            <li>2. Паління у квартирі-готелі.</li>
            <li>3. Порушення правил громадського порядку у квартирі-готелі.</li>
            <li>
              4. Пред&apos;явлення претензій з боку сусідів, що проживають
              поруч.
            </li>
            <li>
              5. Перебування у квартирі людей, більше домовленої кількості.
            </li>
            <li>
              6. Проведення у квартирі-готелі святкувань, зустрічей, гулянь
              тощо.
            </li>
            <li>7. Заподіяння значних матеріальних збитків орендодавцю.</li>
          </ol>
        </li>
      </ul>
    </section>
  );
};

export default RulesPage;
