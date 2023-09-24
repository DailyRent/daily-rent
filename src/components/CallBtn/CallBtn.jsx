import React from "react";
import styles from "./CallBtn.module.scss";

const CallBtn = ({ href, classname, title }) => {
  return (
    <a href={href} className={styles.button + " " + `${classname}`}>
      {title}
    </a>
  );
};

export default CallBtn;
