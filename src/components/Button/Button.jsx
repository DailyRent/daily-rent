"use client";

import React from "react";
import styles from "./Button.module.scss";

const Button = ({ classname, type, title }) => {
  return (
    <button
      type={type}
      className={styles.button + " " + `${classname}`}
      onClick={() => {
        console.log("Button is clicked");
      }}
    >
      {title}
    </button>
  );
};
export default Button;
