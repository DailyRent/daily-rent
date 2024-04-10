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
      <nav className={styles.toBackContainer}>
        {!isLoading && (
          <article className="textLink">
            <h2 className={seoStyles.titleHidden}>Navigation</h2>
            <Link href="/" prefetch={false} className="textLinkAnimation">
              {t('Navigation.MainPage')}
            </Link>
            / <span className="active">{t('Navigation.Contacts')}</span>
          </article>
        )}
      </nav>

      <div className={styles.contactContainer}>
        <article className={styles.titleContainer}>
          {!isLoading && (
            <>
              <h3 className={styles.text}>{t('ContactsPage.Title')}</h3>
            </>
          )}
        </article>
        <article className={styles.content}>
          <h4 className={seoStyles.titleHidden}>Contact information</h4>
          <figure className={styles.mapImgContainer}>
            <Image
              src="/Basemap image.webp"
              alt="Image map"
              fill={true}
              priority={true}
              className={styles.mapImg}
              title="Image google map"
              sizes="(min-width: 1920px) 800px, (min-width: 1380px) 700px, (min-width: 1040px) 474px, (min-width: 780px) calc(7.5vw + 328px), 328px"
            />
          </figure>
          <address className={styles.addressContainer}>
            <figure className={styles.cityContainer}>
              <svg width="36" height="36" className={styles.citySvg}>
                <use href="sprite.svg#icon-flag-ukraine" />
              </svg>
              {!isLoading && (
                <figcaption className={styles.city}>
                  {t('ContactsPage.CountryAndSity')}
                </figcaption>
              )}
            </figure>
            <a
              href="https://maps.app.goo.gl/NTDTgDfgvo4h1nPj7"
              target="_blank"
              className={styles.address}
            >
              <figure className={styles.imgContainer}>
                <Image
                  src="/png/Google Maps Old.png"
                  alt="google maps"
                  fill={true}
                  className={styles.img}
                  title="Icon google map"
                  sizes="36px"
                />
              </figure>

              {!isLoading && (
                <figcaption>{t('ContactsPage.Adress')}</figcaption>
              )}
            </a>
            <address className={styles.telContainer}>
              <a href="tel:+380991930030" className={styles.tel}>
                +38 099 193 00 30
              </a>
              <a href="tel:+380675151939" className={styles.tel}>
                +38 067 515 19 39
              </a>
            </address>
            <address className={styles.box}>
              <div className={styles.socialLinks}>
                <SocialLinks />
              </div>
              <a href="mailto:dailyrent4@gmail.com" className={styles.mail}>
                dailyrent4@gmail.com
              </a>
            </address>
          </address>
        </article>
      </div>
    </section>
  );
};

export default ContactsComponent;
