"use client"
import React from "react";
import styles from "./page.module.scss";
import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";
import Link from "next/link";

const DocsPage = () => {
  const {t}=useTranslation()

  const [isLoading, setIsLoading]= useState(true)

  useEffect(()=>{
    setIsLoading(false)
  },[])

  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">Documents Page</h1>
      <div className={styles.toBackContainer}>
        {!isLoading && (<span className="textLink">
          <Link href="/" className="textLinkAnimation">
            {t("Navigation.MainPage")}
          </Link>
          / <span className={styles.active}>{t("Navigation.Documents")}</span>
        </span>)}
      </div>
      <div className={styles.documentListThumb}>
        <ul className={styles.documentList}>
          <li className={styles.documentItem}>
            <a href="/pdf/figma.pdf" target="_blank" rel="noopener noreferrer">
              <div className={styles.documentTop}></div>
              <p className={styles.documentText}>lorem</p>
            </a>
          </li>

          <li className={styles.documentItem}>
            <a href="/pdf/figma.pdf" target="_blank" rel="noopener noreferrer">
              <div className={styles.documentTop}></div>
              <p className={styles.documentText}>lorem</p>
            </a>
          </li>
          <li className={styles.documentItem}>
            <a href="/pdf/figma.pdf" target="_blank" rel="noopener noreferrer">
              <div className={styles.documentTop}></div>
              <p className={styles.documentText}>lorem</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DocsPage;
