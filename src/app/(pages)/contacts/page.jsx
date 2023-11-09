"use client";

import React from "react";
import styles from "./page.module.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks/SocialLinks";

const ContactsPage = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.toBackContainer}>
        {!isLoading && (
          <span className="textLink">
            <Link href="/" prefetch={false} className="textLinkAnimation">
              {t("Navigation.MainPage")}
            </Link>
            / <span className={styles.active}>{t("Navigation.Contacts")}</span>
          </span>
        )}
      </div>

      <div className={styles.contactContainer}>
        {!isLoading && (
          <>
            <h1 className={styles.title}>{t("ContactsPage.Title")}</h1>
            <p className={styles.text}>{t("ContactsPage.Text")}</p>
          </>
        )}
        <div className={styles.content}>
          <div className={styles.mapImgContainer}>
            <Image
              src="/Basemap image.webp"
              alt="map"
              fill={true}
              className={styles.mapImg}
              title="Image google map"
            />
          </div>
          <address className={styles.addressContainer}>
            {!isLoading && (
              <h2 className={styles.city}>
                <svg width="36" height="36" className={styles.citySvg}>
                  <use href="sprite.svg#icon-flag-ukraine" />
                </svg>
                {t("ContactsPage.CountryAndSity")}
              </h2>
            )}
            <div className={styles.address}>
              {/* <a href="#" className={styles.address}> */}
              <div className={styles.imgContainer}>
                <Image
                  src="/png/Google Maps Old.png"
                  alt="google maps"
                  fill={true}
                  className={styles.img}
                  title="Icon google map"
                />
              </div>
              {!isLoading && <p>{t("ContactsPage.Adress")}</p>}
            </div>
            {/* </a> */}
            <div className={styles.telContainer}>
              <a href="tel:+380357960808" className={styles.tel}>
                +38 035 796 08 08
              </a>
              <a href="tel:+380357960808" className={styles.tel}>
                +38 035 796 08 08
              </a>
            </div>
            <div className={styles.box}>
              <div className={styles.socialLinks}>
                <SocialLinks />
              </div>
              <a href="mailto:dailyrent4@gmail.com" className={styles.mail}>
                dailyrent4@gmail.com
              </a>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;

// 'use client';

// import React from 'react';
// import styles from './page.module.scss';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// const ContactsPage = () => {

//   return (
//     <section className={styles.container}>
//       <h1 className="visuallyHidden">Contacts Page</h1>
//       <div className={styles.toBackContainer}>
//         <span className="textLink">
//           <Link href="/" className="textLinkAnimation">
//             Головна
//           </Link>
//           / Контакти
//         </span>
//       </div>
//       <div className={styles.contactsMap}>
//         <iframe
//           src={
//             'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.3393537943252!2d34.80805147617976!3d50.898936654971344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412901f13d7baf35%3A0xe09c5774205d9d8c!2z0L_RgNC-0ZfQt9C0INCk0ZbQu9Cw0YLRltCy0YHRjNC60LjQuSwgMjUsINCh0YPQvNC4LCDQodGD0LzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDAwMDA!5e0!3m2!1suk!2sua!4v1695487103245!5m2!1suk!2sua'
//           }
//           width="600"
//           height="600"
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Адреса на мапі"
//         ></iframe>
//       </div>
//     </section>
//   );
// };

// export default ContactsPage;
