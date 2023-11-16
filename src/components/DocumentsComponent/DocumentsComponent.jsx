"use client";
import React from "react";
import styles from "./DocumentsComponent.module.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import seoStyles from "@/app/seoStyles.module.css";
// import { documents } from "@/data/documents.data";

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
      {/* <h1 className="visuallyHidden">Documents Page</h1> */}
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
      <article className={styles.documentListThumb}>
        <ul className={styles.documentList}>
          {/* {documents.map((item) => (
            <li key={item.id} className={styles.documentItem}>
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
              >
                <figure className={styles.documentTop}>
                  <Image
                    className={styles.documentTopImg}
                    src={item.img}
                    alt={item.alt}
                    fill={true}
                    title={item.title}
                    sizes="(min-width: 1480px) 299px, (min-width: 780px) 204px, 259px"
                  />
                </figure>
                <figcaption className={styles.documentText}>
                  {item.text}
                </figcaption>
              </a>
            </li>
          ))} */}
          <li className={styles.documentItem}>
            <a href="/pdf/doc1.pdf" target="_blank" rel="noopener noreferrer">
              <figure className={styles.documentTop}>
                <Image
                  className={styles.documentTopImg}
                  src="/imgDoc/img1.png"
                  alt="Додатково про документ"
                  priority={true}
                  fill={true}
                  title="Перехід до документа"
                  sizes="(min-width: 1480px) 299px, (min-width: 780px) 204px, 259px"
                />
              </figure>
              <figcaption className={styles.documentText}>
                Витяг з ЄДР юридичних осіб
              </figcaption>
            </a>
          </li>
          <li className={styles.documentItem}>
            <a href="/pdf/doc2.pdf" target="_blank" rel="noopener noreferrer">
              <figure className={styles.documentTop}>
                <Image
                  className={styles.documentTopImg}
                  src="/imgDoc/img2.png"
                  alt="Додатково про документ"
                  fill={true}
                  title="Перехід до документа"
                  sizes="(min-width: 1480px) 299px, (min-width: 780px) 204px, 259px"
                />
              </figure>
              <figcaption className={styles.documentText}>
                Витяг з ЄДР юридичних осіб
              </figcaption>
            </a>
          </li>
          <li className={styles.documentItem}>
            <a href="/pdf/doc3.pdf" target="_blank" rel="noopener noreferrer">
              <figure className={styles.documentTop}>
                <Image
                  className={styles.documentTopImg}
                  src="/imgDoc/img3.png"
                  alt="Додатково про документ"
                  fill={true}
                  title="Перехід до документа"
                  sizes="(min-width: 1480px) 299px, (min-width: 780px) 204px, 259px"
                />
              </figure>
              <figcaption className={styles.documentText}>
                Витяг з реєстру платників податку
              </figcaption>
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default DocumentsComponent;
