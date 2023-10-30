"use client"
import React from "react";
import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";
import CallBtn from "../CallBtn/CallBtn";
import Logo from "../Logo/Logo";
import styles from "./Hero.module.scss";

const Hero = () => {
  
  const {t}=useTranslation()
  const [isLoading, setIsLoading]=useState(true)
  
  useEffect(()=> {setIsLoading(false)},[])

  return (
    <section className={styles.container}>
      <Logo className={styles.heroLogo} />
      {!isLoading && (<><h1 className={styles.heroTitle}>{t("MainPage.heroTitle")}</h1>
      <p className={styles.heroText}>Lorem ipsum dolor sit amet consectetur.</p></>)}
      <CallBtn 
      className={styles.heroCallBtn}/>
    </section>
  );
};

export default Hero;
