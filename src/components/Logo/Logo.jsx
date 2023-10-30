import React from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo = ({ className }) => {
  return (
    <div className={styles.container + " " + `${className}`}>
      <Link href="/" prefetch={false}>
        <span>Daily</span>Rent
      </Link>
    </div>
  );
};

export default Logo;
