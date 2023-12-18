"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { SiteContext } from "@/context/SiteContext";
import OrderBtn from "@/components/OrderBtn/OrderBtn";
import CallBtn from "@/components/CallBtn/CallBtn";
import Logo from "@/components/Logo/Logo";
// import Navigation from "@/components/Navigation/Navigation";
// import SocialLinks from "@/components/SocialLinks/SocialLinks";
import ModalR from "@/components/Modal/Modal";
import OrderForm from "@/components/OrderForm/OrderForm";
import styles from "./Footer.module.scss";
import { navigationData, currentLanguages } from "@/data";

const Footer = ({ onClick }) => {
  const { isModalOpen, openModal, closeModal } = useContext(SiteContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const { i18n } = useTranslation();

  // const isClient = typeof window !== "undefined";

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    setIsLoading(false);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ModalR isOpen={isModalOpen} closeModal={closeModal}>
        <OrderForm isOpen={isModalOpen} closeModal={closeModal} />
      </ModalR>
      <footer className={styles.container}>
        {/* {isMobile && ( */}
        <div className={styles.mobileContentWrapper}>
          {isMobile && (
            <>
              <div className={styles.mobileItem}>
                <Logo className={`${styles.footerLogo}  textLinkAnimation`} />
                <Link
                  href="mailto:dailyrent4@gmail.com"
                  className="textLinkAnimation"
                >
                  dailyrent4@gmail.com
                </Link>
              </div>
              <div className={styles.mobileItem}>
                <Link href="tel:+380991930030" className="textLinkAnimation">
                  +380991930030
                </Link>
                <Link href="tel:+380675151939" className="textLinkAnimation">
                  +380675151939
                </Link>
              </div>
            </>
          )}
        </div>
        {/* )} */}
        {/* {!isMobile && <Logo className={styles.footerLogo} />} */}
        {!isMobile && (
          <>
            <div className={styles.contentWrapper}>
              {/* {!isMobile && (
            <> */}
              <div className={styles.contacts}>
                <Link
                  href="mailto:dailyrent4@gmail.com"
                  className="textLinkAnimation"
                >
                  dailyrent4@gmail.com
                </Link>
                <Link href="tel:+380991930030" className="textLinkAnimation">
                  +380991930030
                </Link>
                <Link href="tel:+380675151939" className="textLinkAnimation">
                  +380675151939
                </Link>
              </div>
              <ul className={styles.navigation}>
                {!isLoading &&
                  navigationData.slice(0, 2).map((item) => {
                    return (
                      <li key={item.id} onClick={onClick}>
                        <Link href={item.path} className="textLinkAnimation">
                          {i18n.language === currentLanguages.EN
                            ? item.titleEN
                            : item.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
              <ul className={styles.navigation}>
                {!isLoading &&
                  navigationData.slice(2, 4).map((item) => {
                    return (
                      <li key={item.id} onClick={onClick}>
                        <Link href={item.path} className="textLinkAnimation">
                          {i18n.language === currentLanguages.EN
                            ? item.titleEN
                            : item.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
              {/* </>
          )} */}
              <div className={styles.btnsWrapper}>
                <CallBtn className={isMobile ? `${styles.mobileBtn}` : " "} />
                <OrderBtn
                  openModal={openModal}
                  className={isMobile ? `${styles.mobileBtn}` : " "}
                />
              </div>
            </div>
          </>
        )}
        <p className={styles.rights}>
          made by{" "}
          <Link href="https://webevery.dev/" target="_blank">
            webevery.dev{" "}
          </Link>
          ⓒ all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
