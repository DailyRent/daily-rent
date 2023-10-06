'use client';

import React from 'react';
import styles from './page.module.scss';
// import ButtonToBack from "@/components/share/ButtonToBack/ButtonToBack";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ContactsPage = () => {
  // const router = useRouter();

  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">Contacts Page</h1>
      <div className={styles.toBackContainer}>
        {/* <ButtonToBack onGoBack={() => router.back()} /> */}
        <span className="textLink">
          <Link href="/" className="textLinkAnimation">
            Головна
          </Link>
          / Контакти
        </span>
      </div>
      <div className={styles.contactsMap}>
        <iframe
          //   seamless
          src={
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.3393537943252!2d34.80805147617976!3d50.898936654971344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x412901f13d7baf35%3A0xe09c5774205d9d8c!2z0L_RgNC-0ZfQt9C0INCk0ZbQu9Cw0YLRltCy0YHRjNC60LjQuSwgMjUsINCh0YPQvNC4LCDQodGD0LzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDAwMDA!5e0!3m2!1suk!2sua!4v1695487103245!5m2!1suk!2sua'
          }
          width="600"
          height="600"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Адреса на мапі"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactsPage;
