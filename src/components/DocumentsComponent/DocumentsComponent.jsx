"use client";
import React from "react";
import styles from "./DocumentsComponent.module.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import seoStyles from "@/app/seoStyles.module.css";

const DocumentsComponent = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Зняти квартиру суми. Суми квартири. Квартири подобово.
      </h1>
      <nav className={styles.toBackContainer}>
        {!isLoading && (
          <article className="textLink">
            <h2 className={seoStyles.titleHidden}>Navigation</h2>
            <Link href="/" prefetch={false} className="textLinkAnimation">
              {t("Navigation.MainPage")}
            </Link>
            / <span className="active">{t("Navigation.Documents")}</span>
          </article>
        )}
      </nav>
      <article className={styles.documentListThumb}>
        <h3 className={seoStyles.titleHidden}>Documents files</h3>
        <ul className={styles.documentList}>
          <li className={styles.documentItem}>
            <a href="/pdf/doc1.pdf" target="_blank" rel="noopener noreferrer">
              <figure className={styles.documentTop}>
                <Image
                  className={styles.documentTopImg}
                  src="/imgDoc/img1.webp"
                  alt="Додатково про документ"
                  priority={true}
                  fill={true}
                  title="Перехід до документа"
                  sizes="(min-width: 1480px) 299px, (min-width: 780px) 204px, 259px"
                />
              </figure>
              <figcaption className={styles.documentText}>
                {!isLoading && t("DocumentsPage.Document1")}
              </figcaption>
            </a>
          </li>
          <li className={styles.documentItem}>
            <a href="/pdf/doc2.pdf" target="_blank" rel="noopener noreferrer">
              <figure className={styles.documentTop}>
                <Image
                  className={styles.documentTopImg}
                  src="/imgDoc/img2.webp"
                  alt="Додатково про документ"
                  fill={true}
                  loading="lazy"
                  title="Перехід до документа"
                  sizes="(min-width: 1480px) 299px, (min-width: 780px) 204px, 259px"
                />
              </figure>
              <figcaption className={styles.documentText}>
                {!isLoading && t("DocumentsPage.Document2")}
              </figcaption>
            </a>
          </li>
          <li className={styles.documentItem}>
            <a href="/pdf/doc3.pdf" target="_blank" rel="noopener noreferrer">
              <figure className={styles.documentTop}>
                <Image
                  className={styles.documentTopImg}
                  src="/imgDoc/img3.webp"
                  alt="Додатково про документ"
                  fill={true}
                  loading="lazy"
                  title="Перехід до документа"
                  sizes="(min-width: 1480px) 299px, (min-width: 780px) 204px, 259px"
                />
              </figure>
              <figcaption className={styles.documentText}>
                {!isLoading && t("DocumentsPage.Document3")}
              </figcaption>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default DocumentsComponent;
