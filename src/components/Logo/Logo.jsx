import React from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo = ({ className }) => {
  return (
    <Link
      href="/"
      prefetch={false}
      className={styles.container + " " + `${className}`}
    >
      <span>Daily</span>Rent
    </Link>
  );
};

export default Logo;
