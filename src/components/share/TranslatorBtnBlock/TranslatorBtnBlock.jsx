"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./TranslatorBtnBlock.module.scss";

const options = [
  {
    id: 1,
    label: "Eng",
    value: "en",
  },
  {
    id: 2,
    label: "Укр",
    value: "ua",
  },
];

const TranslatorBtnBlock = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState();
  const { i18n } = useTranslation();
  const rootEl = useRef(null);

  useEffect(() => {
    setLanguage(localStorage.getItem("whatLanguage"));
  }, []);

  const changeLanguage = (e) => {
    const whatLanguage = e.target.value;
    localStorage.setItem("whatLanguage", whatLanguage);
    const language = localStorage.getItem("whatLanguage");
    setLanguage(language);
    setIsOpen(false);

    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const onClick = (e) =>
      rootEl.current.contains(e.target) || setIsOpen(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={rootEl}>
      {/* <div className={styles.dropdown}> */}
      <div className={pathname === "/" ? styles.dropdown : styles.dropdownDark}>
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
    </div>
  );
};

export default TranslatorBtnBlock;
