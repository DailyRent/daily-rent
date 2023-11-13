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
          </ol>
        </li>
      </ul></>}
    </section>
  );
};

export default RulesPage;
