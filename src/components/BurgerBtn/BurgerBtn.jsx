"use client";

import React from "react";
import styles from "./BurgerBtn.module.scss";
import { usePathname } from "next/navigation";

const BurgerBtn = ({ onClick, burgerMenu }) => {
  const pathname = usePathname();
  return (
    <button className={styles.burgerBtn} onClick={onClick}>
      {burgerMenu ? (
        <svg
          className={pathname === "/" ? styles.iconClose : styles.iconCloseDark}
        >
          <use href="/sprite.svg#icon-close" />
        </svg>
      ) : (
        <svg
          className={
            pathname === "/" ? styles.iconBurger : styles.iconBurgerDark
          }
        >
          <use href="/sprite.svg#icon-burger-mobile" />
        </svg>
      )}
    </button>
  );
};

export default BurgerBtn;
