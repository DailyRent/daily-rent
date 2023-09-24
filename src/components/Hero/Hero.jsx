import React from "react";
import CallBtn from "../CallBtn/CallBtn";
import Logo from "../Logo/Logo";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bgContainer}></div>
      <div className={styles.contentContainer}>
        <Logo className={styles.heroLogo} />
        <h1 className={styles.heroTitle}>Твій комфорт - наша турбота</h1>
        <p className={styles.heroText}>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <CallBtn />
      </div>
    </section>
  );
};

export default Hero;
