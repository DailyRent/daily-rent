"use client";

import React from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from "./page.module.scss";

const Loading = ({ className }) => {
  return (
    <div className={styles.loading + " " + `${className}`}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </div>
  );
};

export default Loading;
