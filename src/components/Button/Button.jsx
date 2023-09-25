"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useContext } from "react";
import styles from "./Button.module.scss";

const Button = ({ classname, type, title }) => {
  const { state, setState } = useContext(SiteContext);
  return (
    <button
      type={type}
      className={styles.button + " " + `${classname}`}
      onClick={() => {
        console.log("Button is clicked"), setState(!state);
      }}
    >
      {title}
    </button>
  );
};
export default Button;
