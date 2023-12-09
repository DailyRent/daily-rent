"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import CallBtn from "../CallBtn/CallBtn";
import Logo from "../Logo/Logo";
import styles from "./Hero.module.scss";

const Hero = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.heroLogo}>DailyRent</h1>
      {!isLoading && (
        <>
          <p className={styles.heroTitle}>{t("MainPage.heroTitle")}</p>
          <p className={styles.heroText}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </>
      )}
      <CallBtn className={styles.heroCallBtn} />
    </section>
  );
};

export default Hero;
