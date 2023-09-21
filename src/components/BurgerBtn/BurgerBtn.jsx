"use client";

import React from "react";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = () => {
  return (
    <button
      className={styles.burgerBtn}
      onClick={() => {
        console.log("open mobile menu");
      }}
    >
      <svg className={styles.iconBurger}>
        <use href="/symbol-defs.svg#icon-burger-mobile" />
      </svg>
    </button>
  );
};

export default BurgerBtn;
