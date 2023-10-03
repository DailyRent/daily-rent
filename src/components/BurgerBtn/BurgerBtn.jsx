"use client";

import React from "react";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = ({
  onClick,
  burgerMenu,
  iconCloseStyles,
  iconBurgerStyles,
}) => {
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
