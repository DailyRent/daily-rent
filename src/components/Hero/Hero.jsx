"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import CallBtn from "../CallBtn/CallBtn";
import styles from "./Hero.module.scss";
import seoStyles from "@/app/seoStyles.module.css";

const Hero = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Оренда квартири суми. Квартири подобово. Суми квартири.
      </h1>
      <h2 className={styles.heroLogo}>DailyRent</h2>
      <div className={styles.heroTitleWrapper}>
        <h3 className={styles.heroTitle}>
          {!isLoading && t("MainPage.heroTitle")}
        </h3>
        <p className={styles.heroText}>
          {!isLoading && t("MainPage.heroSubTitle")}
        </p>
      </div>
      <CallBtn className={styles.heroCallBtn} />
    </section>
  );
};

export default Hero;
