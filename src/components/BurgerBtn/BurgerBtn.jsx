"use client";

import React from "react";
import styles from "./BurgerBtn.module.scss";
import { usePathname } from "next/navigation";

const BurgerBtn = ({ onClick, burgerMenu, isClient }) => {
  const pathname = usePathname();

  let iconCloseStyles;
  let iconBurgerStyles;
  if (
    (pathname === "/" && isClient && scrollY >= window.innerHeight - 50) ||
    pathname !== "/"
  ) {
    iconCloseStyles = styles.iconCloseDark;
    iconBurgerStyles = styles.iconBurgerDark;
  } else {
    iconCloseStyles = styles.iconClose;
    iconBurgerStyles = styles.iconBurger;
  }

  return (
    <button className={styles.burgerBtn} onClick={onClick}>
      {burgerMenu ? (
        <svg className={iconCloseStyles}>
          <use href="/sprite.svg#icon-close" />
        </svg>
      ) : (
        <svg className={iconBurgerStyles}>
          <use href="/sprite.svg#icon-burger-mobile" />
        </svg>
      )}
    </button>
  );
};

export default BurgerBtn;
