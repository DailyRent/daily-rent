import React from "react";
import styles from "./Footer.module.scss";
import CallBtn from "../CallBtn/CallBtn";
import OrderBtn from "../OrderBtn/OrderBtn";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { socialLinks } from "@/data/socialLinks";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Logo className={styles.footerLogo} />

      <div className={styles.contactsWrapper}>
        <div className={styles.location}>
          <svg>
            <use href="/symbol-defs.svg#icon-map-pin-footer" />
          </svg>
          <p>м. Суми</p>
        </div>
        <div className={styles.phoneNumbers}>
          <a href="tel:+3803579608">+3803579608</a>
          <a href="tel:+3803579608">+3803579608</a>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <ul>
          {socialLinks.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.href}>
                  <Image
                    src={item.img}
                    width={24}
                    height={24}
                    alt={item.title}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <a href="mailto:BoomRoom@gmail.com">BoomRoom@gmail.com</a>
      {/* <Navigation />
      <CallBtn />
      <OrderBtn /> */}
    </footer>
  );
};

export default Footer;
