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
          <a href="tel:+3803579608">+3803579608</a>
          <a href="tel:+3803579608">+3803579608</a>
        </div>
      </div>
      <SocialLinks />
      <Link href="mailto:BoomRoom@gmail.com" className={styles.email}>
        BoomRoom@gmail.com
      </Link>
      <Link
        href="https://webevery.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.webevery}
      >
        webevery.dev
      </Link>
    </footer>
  );
};

export default MobileFooter;
