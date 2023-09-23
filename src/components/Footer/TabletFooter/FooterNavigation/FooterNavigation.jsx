import React from "react";
import styles from "./FooterNavigation.module.scss";
import { navigationData } from "@/data/navigation.data";
import Link from "next/link";

const FooterNavigation = () => {
  return (
    <ul>
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

export default FooterNavigation;
