import Logo from "@/components/Logo/Logo";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import Link from "next/link";
import React from "react";
import styles from "./MobileFooter.module.scss";

const MobileFooter = () => {
  return (
    <footer className={styles.container}>
      <Logo className={styles.footerLogo} />

      <div className={styles.contactsWrapper}>
        <div className={styles.location}>
          <svg>
            <use href="/sprite.svg#icon-map-pin-footer" />
          </svg>
          <p>м. Суми</p>
        </div>
        <div className={styles.phoneNumbers}>
          <a href="tel:+380357960801">+380357960801</a>
          <a href="tel:+380357960802">+380357960802</a>
        </div>
      </div>
      <SocialLinks />
      {/* <Link href="mailto:dailyrent4@gmail.com" className={styles.email}>
        dailyrent4@gmail.com
      </Link>
      <Link
        href="https://webevery.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.webevery}
      >
        webevery.dev
      </Link> */}
      <p className={styles.rights}>made by
        <Link
          href='https://webevery.dev/'
          target='_blank'
          rel='noopener noreferrer'
        > webevery.dev </Link>
        ⓒ all rights reserved.
      </p>
    </footer>
  );
};

export default MobileFooter;
