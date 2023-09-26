import React from "react";
import styles from "./Navigation.module.scss";
import { navigationData } from "@/data/navigation.data";
import Link from "next/link";

const Navigation = ({ className }) => {
  return (
    <ul className={styles.container + " " + `${className}`}>
      {navigationData.slice(0, 4).map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
