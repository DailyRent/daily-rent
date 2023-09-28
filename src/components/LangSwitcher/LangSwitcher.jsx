"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useContext } from "react";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = () => {
  const { language, setLanguage } = useContext(SiteContext);
  return (
    <>
      <div
        className={styles.langSwitcher}
        onClick={() => {
          setLanguage((prev) => (prev === "uk" ? "en" : "uk"));
        }}
      >
        {language === "uk" ? "uk" : "en"}
        <svg className={styles.arrow}>
          <use href="/sprite.svg#icon-chevron-down" />
        </svg>
      </div>
    </>
  );
};

export default LangSwitcher;
