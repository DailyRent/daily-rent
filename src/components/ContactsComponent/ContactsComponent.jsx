'use client';

import React from 'react';
import styles from './ContactsComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import seoStyles from '@/app/seoStyles.module.css';

const ContactsComponent = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <section className={styles.container}>
      <h1 className={seoStyles.titleHidden}>
        Оренда квартири Суми. Сумы квартиры. Квартири подобово.
      </h1>
      <div className={styles.toBackContainer}>
        {!isLoading && (
          <span className="textLink">
            <Link href="/" prefetch={false} className="textLinkAnimation">
              {t('Navigation.MainPage')}
            </Link>
            / <span className={styles.active}>{t('Navigation.Contacts')}</span>
          </span>
        )}
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.titleContainer}>
          {!isLoading && (
            <>
              <h2 className={styles.title}>{t('ContactsPage.Title')}</h2>
              <p className={styles.text}>{t('ContactsPage.Text')}</p>
            </>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.mapImgContainer}>
            <Image
              src="/Basemap image.webp"
              alt="Image map"
              fill={true}
              priority={true}
              className={styles.mapImg}
              title="Image google map"
              sizes="(min-width: 1920px) 800px, (min-width: 1380px) 700px, (min-width: 1040px) 474px, (min-width: 780px) calc(7.5vw + 328px), 328px"
            />
          </div>
          <address className={styles.addressContainer}>
            <div className={styles.cityContainer}>
              <svg width="36" height="36" className={styles.citySvg}>
                <use href="sprite.svg#icon-flag-ukraine" />
              </svg>
              {!isLoading && (
                <h3 className={styles.city}>
                  {t('ContactsPage.CountryAndSity')}
                </h3>
              )}
            </div>
            <a
              href="https://maps.app.goo.gl/NTDTgDfgvo4h1nPj7"
              target="_blank"
              className={styles.address}
            >
              <div className={styles.imgContainer}>
                <Image
                  src="/png/Google Maps Old.png"
                  alt="google maps"
                  fill={true}
                  className={styles.img}
                  title="Icon google map"
                  sizes="36px"
                />
              </div>
              {!isLoading && <p>{t('ContactsPage.Adress')}</p>}
            </a>
            <div className={styles.telContainer}>
              <a href="tel:+380991930030" className={styles.tel}>
                +38 099 193 00 30
              </a>
              <a href="tel:+380675151939" className={styles.tel}>
                +38 067 515 19 39
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

export default ContactsComponent;

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
