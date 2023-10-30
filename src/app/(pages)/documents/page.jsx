import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";

const DocsPage = () => {
  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">Documents Page</h1>
      <div className={styles.toBackContainer}>
        <span className="textLink">
          <Link href="/" className="textLinkAnimation">
            Головна
          </Link>
          / <span className={styles.active}>Документи</span>
        </span>
      </div>
      <div className={styles.documentListThumb}>
        <ul className={styles.documentList}>
          <li className={styles.documentItem}>
            <div className={styles.documentTop}></div>
            <p className={styles.documentText}>lorem</p>
          </li>

          <li className={styles.documentItem}>
            <div className={styles.documentTop}></div>
            <p className={styles.documentText}>lorem</p>
          </li>
          <li className={styles.documentItem}>
            <div className={styles.documentTop}></div>
            <p className={styles.documentText}>lorem</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DocsPage;
