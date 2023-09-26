import React from "react";
import styles from "./CallBtn.module.scss";

const CallBtn = ({ className }) => {
  return (
    <a
      href="tel:+380503738465"
      className={styles.button + " " + `${className}`}
    >
      Звʼязатись
    </a>
  );
};

export default CallBtn;
