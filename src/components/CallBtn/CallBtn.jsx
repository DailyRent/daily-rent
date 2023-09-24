import React from "react";
import styles from "./CallBtn.module.scss";

const CallBtn = ({ classname }) => {
  return (
    <a
      href="tel:+380503738465"
      className={styles.button + " " + `${classname}`}
    >
      Звʼязатись
    </a>
  );
};

export default CallBtn;
