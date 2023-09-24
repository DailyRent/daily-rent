import Link from "next/link";
import React from "react";
import styles from "./CallBtn.module.scss";

const CallBtn = ({ href, classname, title }) => {
  return (
    <Link href={href} className={styles.button + " " + `${classname}`}>
      {title}
    </Link>
  );
};

export default CallBtn;
