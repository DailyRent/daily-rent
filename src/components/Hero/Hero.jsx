import React from "react";
import CallBtn from "../CallBtn/CallBtn";
import Logo from "../Logo/Logo";
import styles from "./Hero.module.scss";

const Hero = async () => {
  return (
    <section className={styles.container}>
      {/* <div className={styles.bgContainer}></div> */}
      {/* <div className={styles.contentContainer}> */}
      <Logo className={styles.heroLogo} />
      <h1 className={styles.heroTitle}>Твій комфорт - наша турбота</h1>
      <p className={styles.heroText}>Lorem ipsum dolor sit amet consectetur.</p>
      <CallBtn className={styles.heroCallBtn} />
      {/* </div> */}
    </section>
  );
};

export default Hero;
