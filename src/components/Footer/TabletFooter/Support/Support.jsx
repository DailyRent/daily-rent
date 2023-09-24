import Link from "next/link";
import React from "react";
import styles from "./Support.module.scss";

import { support } from "../../../../data/support";

const Support = () => {
  return (
    <ul className={styles.Support}>
      {support.map((el) => {
        return (
          <li key={el.id}>
            <Link href={el.href}>{el.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Support;
