import React from "react";
import styles from "./Button.module.scss";

const Button = ({ classname, type, title }) => {
  return (
    <button type={type} className={styles.button + " " + `${classname}`}>
      {title}
    </button>
  );
};
export default Button;
