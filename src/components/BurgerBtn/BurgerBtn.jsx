"use client";

import React from "react";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = ({ onClick, burgerMenu }) => {
  return (
    <button
      className={styles.burgerBtn}
      onClick={onClick}
      aria-label="Button burger menu"
      title="Burger Menu"
    >
      {burgerMenu ? (
        <svg className={styles.iconClose}>
          <use href="/sprite.svg#icon-close" />
        </svg>
      ) : (
        <svg className={styles.iconBurger}>
          <use href="/sprite.svg#icon-burger-mobile" />
        </svg>
      )}
    </button>
  );
};

export default BurgerBtn;
