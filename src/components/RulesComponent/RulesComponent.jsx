"use client";
import React from "react";
import styles from "./RulesComponent.module.scss";
import {
  RulesInApartment,
  Prohibited,
  Eviction,
  currentLanguages,
} from "@/data";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
// import ButtonToBack from "@/components/share/ButtonToBack/ButtonToBack";
import Link from "next/link";
import seoStyles from "@/app/seoStyles.module.css";

const RulesComponent = () => {
  // const router = useRouter();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Оренда квартири суми. Квартири подобово. Суми квартири.
      </h1>
      {/* <h1 className="visuallyHidden">Rules Page</h1> */}
      <nav className={styles.toBackContainer}>
        {!isLoading && (
          <article className="textLink">
            <h2 className={seoStyles.titleHidden}>Navigation</h2>
            <Link href="/" prefetch={false} className="textLinkAnimation">
              {t("Navigation.MainPage")}
            </Link>
            / <span className="active">{t("Navigation.Rules")}</span>
          </article>
        )}
      </nav>
      {!isLoading && (
        <>
          <h2 className={styles.rulesListItem}>{t("RulesPage.MainTitle")}</h2>
          <ul className={styles.rulesList}>
            <li>
              <h3 className={styles.decimalListTitle}>
                {t("RulesPage.TitleSection1")}
              </h3>
              <ol className={styles.decimalList}>
                {RulesInApartment.map(({ id, rule, ruleEN }) => {
                  return (
                    <li key={id}>
                      <p>
                        {i18n.language === currentLanguages.EN ? ruleEN : rule}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </li>
            <li>
              <h3 className={styles.decimalListTitle}>
                {t("RulesPage.TitleSection2")}
              </h3>
              <ol className={styles.decimalList}>
                {Prohibited.map(({ id, rule, ruleEN }) => {
                  return (
                    <li key={id}>
                      <p>
                        {i18n.language === currentLanguages.EN ? ruleEN : rule}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </li>
            <li>
              <h3 className={styles.decimalListTitle}>
                {t("RulesPage.TitleSection3")}
              </h3>
              <ol className={styles.decimalList}>
                {Eviction.map(({ id, rule, ruleEN }) => {
                  return (
                    <li key={id}>
                      <p>
                        {i18n.language === currentLanguages.EN ? ruleEN : rule}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </li>
          </ul>
        </>
      )}
    </section>
  );
};

export default RulesComponent;
