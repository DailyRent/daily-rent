"use client";
import { SiteContext } from "@/context/SiteContext";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "./LangSwitcher";
import styles from "./TranslatorBtnBlock.module.scss";


const TranslatorBtnBlock = ({ isClient }) => {
  const pathname = usePathname();
  const [language, setLanguage] = useState((prev) => (!prev || prev === undefined) ? "ua" : prev);
  const { i18n } = useTranslation();
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    setIsLoad(false)
    const lang = localStorage.getItem("whatLanguage")
    setLanguage(() => lang ? lang : "ua");
  }, []);


  const changeLanguage = (languageUser) => {
    const whatLanguage = languageUser
    localStorage.setItem("i18nextLng", whatLanguage);
    const language = localStorage.getItem("i18nextLng");
    setLanguage(language);

    i18n.changeLanguage(language);
  };

  const { scrollY } = useContext(SiteContext);

  let scrollStyles;
  if (
    (pathname === "/" && isClient && scrollY >= window.innerHeight - 50) ||
    pathname !== "/"
  ) {
    scrollStyles = styles.dropdownDark;
  } else {
    scrollStyles = styles.dropdown;
  }

  return (<div className={scrollStyles}>
    {!isLoad && <LangSwitcher
      changeLanguage={changeLanguage}
      currentLanguage={language} />}
  </div>
  );
};

export default TranslatorBtnBlock;