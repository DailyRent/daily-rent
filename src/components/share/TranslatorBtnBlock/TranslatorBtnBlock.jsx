"use client";
import { SiteContext } from "@/context/SiteContext";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "./LangSwitcher";
import styles from "./TranslatorBtnBlock.module.scss";


const TranslatorBtnBlock = ({ isClient }) => {
  const pathname = usePathname();
  const [language, setLanguage] = useState((prev) => (!prev || prev===undefined)  ? "ua" : prev);
  const { i18n } = useTranslation();
  const[isLoad,setIsLoad]=useState(true)

  useEffect(() => {
    setIsLoad(false)
    const lang=localStorage.getItem("whatLanguage")
    setLanguage(()=> lang ? lang : "ua");
  }, []);

  const changeLanguage = (languageUser) => {
    const whatLanguage = languageUser
    localStorage.setItem("whatLanguage", whatLanguage);
    const language = localStorage.getItem("whatLanguage");
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
    {/* <div ref={rootEl}>
      <div className={scrollStyles}>
        <button
          className={styles.dropBtn}
          type="button"
          onClick={(e) => {
            setIsOpen((prev) => !prev);
          }}
        >
          {typeof window !== "undefined" &&
            typeof language !== "undefined" &&
            (language || "UA")}

          <svg
            className={
              isOpen ? styles.svg + " " + styles.svgActive : styles.svg
            }
          >
            <use href="/sprite.svg#icon-chevron-down" />
          </svg>
        </button>
        {isOpen && (
          <div
            className={
              isOpen
                ? styles.dropdownContent + " " + styles.dropdownContentActive
                : styles.dropdownContent
            }
          >
            {options.map(({ id, label, value }) => (
              <div key={id} className={styles.dropdownBlock}>
                <label htmlFor={value} className={styles.label}>
                  {label}
                  <input
                    onClick={(e) => changeLanguage(e)}
                    type="text"
                    id={value}
                    name={value}
                    defaultValue={value}
                    className={styles.input}
                  />
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div> */}
</div>
  );
};

export default TranslatorBtnBlock;
