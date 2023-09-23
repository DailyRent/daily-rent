import React from "react";
import styles from "./Navigation.module.scss";
import { navigationData } from "@/data/navigation.data";
import Link from "next/link";

const Navigation = ({ className }) => {
  return (
    <ul className={styles.container + " " + `${className}`}>
      {navigationData.map((item, index) => (
        <li key={index}>
          <Link href={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
