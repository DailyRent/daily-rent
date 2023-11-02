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
  const {t}=useTranslation()

  const [isLoading, setIsLoading]= useState(true)

  useEffect(()=>{
    setIsLoading(false)
  },[])
  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">Rules Page</h1>
      <div className={styles.toBackContainer}>
        {!isLoading && (<span className="textLink">
          <Link href="/" prefetch={false} className="textLinkAnimation">
            {t("Navigation.MainPage")}
          </Link>
          / <span className={styles.active}>{t("Navigation.Rules")}</span>
        </span>)}
      </div>
      <div className={styles.ruleListThumb}>
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
      </div>
    </section>
  );
};

export default RulesPage;
