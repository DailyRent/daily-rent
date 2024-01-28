"use client";

import React from "react";
import styles from "./CallBtnRound.module.scss";
import { FaPhone } from "react-icons/fa6";

const CallBtnRound = () => {
  return (
    <div className={styles.callBtn}>
      <a href="tel:+380991930030">
        <FaPhone />
      </a>
    </div>
  );
};

export default CallBtnRound;
