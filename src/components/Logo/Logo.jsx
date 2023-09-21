import React from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        Daily <span>Rent</span>
      </Link>
    </div>
  );
};

export default Logo;
