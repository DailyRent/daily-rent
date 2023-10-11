// "use client";
import React from "react";
import styles from "./page.module.scss";
// import ButtonToBack from "@/components/share/ButtonToBack/ButtonToBack";
// import { useRouter } from "next/navigation";
import Link from "next/link";

const RulesPage = () => {
  // const router = useRouter();
  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">Rules Page</h1>
      <div className={styles.toBackContainer}>
        <span className="textLink">
          <Link href="/" className="textLinkAnimation">
            Головна
          </Link>
          / Правила
        </span>
      </div>
      <div className={styles.ruleListThumb}>
        <ul className={styles.ruleList}>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
          <li className={styles.ruleItem}>
            <div className={styles.circleBlock}></div>
            <div>
              <h2 className={styles.ruleItemName}>Lorem ipsum</h2>
              <p className={styles.ruleItemDescription}>
                Lorem ipsum dolor sit amet consectetur. Consequat imperdiet sed
                mauris tincidunt praesent tellus eget in. mauris tincidunt
                praesent tellus eget in.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RulesPage;
