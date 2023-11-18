// "use client";
// import React from "react";
// import styles from "./page.module.scss";
// import { useTranslation } from "react-i18next";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import seoStyles from "@/app/seoStyles.module.css";
// import { documents } from "@/data/documents.data";

import DocumentsComponent from "@/components/DocumentsComponent/DocumentsComponent";

export const metadata = {
  title: "Квартири подобово Daily Rent ⭐ оренда квартири Суми",
  description:
    "Оренда квартир подобово або погодинно Суми ⭐ Зняти квартиру на добу, день або ніч ✔️ Квартири подобово на Daily Rent",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}documents`,
  },
};

const DocsPage = () => {
  // const { t } = useTranslation();

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);

  return (
    <DocumentsComponent />
    // <section className={styles.container}>
    //   <h1 className={seoStyles.titleHidden}>
    //     Зняти квартиру суми. Суми квартири. Квартири подобово.
    //   </h1>
    //   {/* <h1 className="visuallyHidden">Documents Page</h1> */}
    //   <div className={styles.toBackContainer}>
    //     {!isLoading && (
    //       <span className="textLink">
    //         <Link href="/" prefetch={false} className="textLinkAnimation">
    //           {t("Navigation.MainPage")}
    //         </Link>
    //         / <span className={styles.active}>{t("Navigation.Documents")}</span>
    //       </span>
    //     )}
    //   </div>
    //   <div className={styles.documentListThumb}>
    //     <ul className={styles.documentList}>
    //       {documents.map((item) => (
    //         <li key={item.id} className={styles.documentItem}>
    //           <a
    //             href={item.pdf}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             title={item.title}
    //           >
    //             <div className={styles.documentTop}>
    //               <Image
    //                 className={styles.documentTopImg}
    //                 src={item.img}
    //                 alt={item.alt}
    //                 fill={true}
    //                 title={item.title}
    //               />
    //             </div>
    //             <p className={styles.documentText}>{item.text}</p>
    //           </a>
    //         </li>
    //       ))}

    /* <li className={styles.documentItem}>
            <a href="/pdf/doc2.pdf" target="_blank" rel="noopener noreferrer">
              <div className={styles.documentTop}>
                <Image
                  className={styles.documentTopImg}
                  src="/imgDoc/img2.png"
                  alt="Додатково про документ"
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
                  alt="Додатково про документ"
                  fill={true}
                />
              </div>
              <p className={styles.documentText}>
                Витяг з реєстру платників податку
              </p>
            </a>
          </li> */
    //     </ul>
    //   </div>
    // </section>
  );
};

export default DocsPage;
