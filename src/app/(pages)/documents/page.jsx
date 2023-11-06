"use client";
import React from "react";
import styles from "./page.module.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DocsPage = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">Documents Page</h1>
      <div className={styles.toBackContainer}>
        {!isLoading && (
          <span className="textLink">
            <Link href="/" prefetch={false} className="textLinkAnimation">
              {t("Navigation.MainPage")}
            </Link>
            / <span className={styles.active}>{t("Navigation.Documents")}</span>
          </span>
        )}
      </div>
      <div className={styles.documentListThumb}>
        <ul className={styles.documentList}>
          <li className={styles.documentItem}>
            <a href="/pdf/doc1.pdf" target="_blank" rel="noopener noreferrer">
              <div className={styles.documentTop}>
                <Image
                  className={styles.documentTopImg}
                  src="/imgDoc/img1.png"
                  alt="Виписка з ЄДР юридичних осіб"
                  fill={true}
                />
              </div>
              <p className={styles.documentText}>
                Виписка з ЄДР юридичних осіб
              </p>
            </a>
          </li>

          <li className={styles.documentItem}>
            <a href="/pdf/doc2.pdf" target="_blank" rel="noopener noreferrer">
              <div className={styles.documentTop}>
                <Image
                  className={styles.documentTopImg}
                  src="/imgDoc/img2.png"
                  alt="Витяг з ЄДР юридичних осіб"
                  fill={true}
                />
              </div>
              <p className={styles.documentText}>Витяг з ЄДР юридичних осіб</p>
            </a>
          </li>
          <li className={styles.documentItem}>
            <a href="/pdf/doc3.pdf" target="_blank" rel="noopener noreferrer">
              <div className={styles.documentTop}>
                <Image
                  className={styles.documentTopImg}
                  src="/imgDoc/img3.png"
                  alt="Витяг з реєстру платників податку"
                  fill={true}
                />
              </div>
              <p className={styles.documentText}>
                Витяг з реєстру платників податку
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DocsPage;
