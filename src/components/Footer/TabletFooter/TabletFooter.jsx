import Button from "@/components/Button/Button";
import CallBtn from "@/components/CallBtn/CallBtn";
import Logo from "@/components/Logo/Logo";

import SocialLinks from "@/components/SocialLinks/SocialLinks";
import Link from "next/link";
import React from "react";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import Support from "./Support/Support";

import styles from "./TabletFooter.module.scss";

const TabletFooter = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.tabletLinksWrapper}>
        <p>Зв’яжіться з нами</p> <SocialLinks />
      </div>

      <Logo className={styles.footerLogo} />

      <div className={styles.contentWrapper}>
        <div className={styles.leftContentWrapper}>
          <p className={styles.leftContentText}>
            Lorem ipsum dolor sit amet consectetur. Semper senectus nunc non
            aenean interdum sit sit. Ultrices habitasse massa pellentesque
            semper.
          </p>
          <div className={styles.contacts}>
            <Link href="tel:+3803579608">+3803579608</Link>
            <Link href="tel:+3803579608">+3803579608</Link>
            <Link href="mailto:BoomRoom@gmail.com">BoomRoom@gmail.com</Link>
          </div>
        </div>
        <div className={styles.rightContentWrapper}>
          <div className={styles.navWrapper}>
            <FooterNavigation />
            <Support />
          </div>
          <div className={styles.btnsWrapper}>
            <CallBtn href="tel:+380503738465" title="Звязатись" />
            <Button
              type="button"
              title="Забронювати"
              classname={styles.bookBtn}
            />
          </div>
        </div>
      </div>
      <p className={styles.rights}>ⓒ Boom Room. All rights reserved.</p>
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

export default TabletFooter;
