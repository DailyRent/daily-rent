// "use client";

// import React from "react";
// import styles from "./page.module.scss";
// import { useTranslation } from "react-i18next";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import SocialLinks from "@/components/SocialLinks/SocialLinks";
// import seoStyles from "@/app/seoStyles.module.css";
import ContactsComponent from "@/components/ContactsComponent/ContactsComponent.jsx";

export const metadata = {
  title: "Квартири подобово Daily Rent ⭐ оренда квартири Суми",
  description:
    "Оренда квартир подобово або погодинно Суми ⭐ Зняти квартиру на добу, день або ніч ✔️ Квартири подобово на Daily Rent",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}contacts`,
  },
};

const ContactsPage = () => {
  // const { t } = useTranslation();

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);
  return (
    <ContactsComponent />
    // <section className={styles.container}>
    //   <h1 className={seoStyles.titleHidden}>
    //     Оренда квартири Суми. Сумы квартиры. Квартири подобово.
    //   </h1>
    //   <div className={styles.toBackContainer}>
    //     {!isLoading && (
    //       <span className="textLink">
    //         <Link href="/" prefetch={false} className="textLinkAnimation">
    //           {t("Navigation.MainPage")}
    //         </Link>
    //         / <span className={styles.active}>{t("Navigation.Contacts")}</span>
    //       </span>
    //     )}
    //   </div>

    //   <div className={styles.contactContainer}>
    //     {!isLoading && (
    //       <>
    //         <h2 className={styles.title}>{t("ContactsPage.Title")}</h2>
    //         <p className={styles.text}>{t("ContactsPage.Text")}</p>
    //       </>
    //     )}
    //     <div className={styles.content}>
    //       <div className={styles.mapImgContainer}>
    //         <Image
    //           src="/Basemap image.webp"
    //           alt="map"
    //           fill={true}
    //           className={styles.mapImg}
    //           title="Image google map"
    //         />
    //       </div>
    //       <address className={styles.addressContainer}>
    //         {!isLoading && (
    //           <h3 className={styles.city}>
    //             <svg width="36" height="36" className={styles.citySvg}>
    //               <use href="sprite.svg#icon-flag-ukraine" />
    //             </svg>
    //             {t("ContactsPage.CountryAndSity")}
    //           </h3>
    //         )}
    //         <div className={styles.address}>
    //           {/* <a href="#" className={styles.address}> */}
    //           <div className={styles.imgContainer}>
    //             <Image
    //               src="/png/Google Maps Old.png"
    //               alt="google maps"
    //               fill={true}
    //               className={styles.img}
    //               title="Icon google map"
    //             />
    //           </div>
    //           {!isLoading && <p>{t("ContactsPage.Adress")}</p>}
    //         </div>
    //         {/* </a> */}
    //         <div className={styles.telContainer}>
    //           <a href="tel:+380357960808" className={styles.tel}>
    //             +38 035 796 08 08
    //           </a>
    //           <a href="tel:+380357960808" className={styles.tel}>
    //             +38 035 796 08 08
    //           </a>
    //         </div>
    //         <div className={styles.box}>
    //           <div className={styles.socialLinks}>
    //             <SocialLinks />
    //           </div>
    //           <a href="mailto:dailyrent4@gmail.com" className={styles.mail}>
    //             dailyrent4@gmail.com
    //           </a>
    //         </div>
    //       </address>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ContactsPage;
