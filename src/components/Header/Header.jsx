"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import TranslatorBtnBlock from "../share/TranslatorBtnBlock/TranslatorBtnBlock";
import SocialLinks from "../SocialLinks/SocialLinks";

const Header = () => {
  const session = useSession();
  const pathname = usePathname();

  // console.log(pathname);

  const { t } = useTranslation();

  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isClient = typeof window !== "undefined";

  console.log(session.status);
  console.log("isMobile", isMobile);
  console.log("window.innerWidth", window.innerWidth);

  // if (session.status === "authenticated" && window.innerWidth < 1200) {
  // }

  const handleResize = () => {
    if (
      window.innerWidth < 768 ||
      (session.status === "authenticated" && window.innerWidth < 1200)
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    setIsLoading(false);
    // Add an event listener for window resize

    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [session.status]);

  return (
    <header className={styles.container}>
      {!isLoading && (
        <p className={styles.promotion}>{t("Header.headerSale")}</p>
      )}
      <div className={styles.navBar}>
        {!isMobile && (
          <div className={styles.leftLinks}>
            {!isLoading && (
              <Link
                href={"/apartments"}
                className={
                  pathname === "/apartments"
                    ? styles.activeLink
                    : " textLinkAnimation"
                }
              >
                {t("Header.linkApartments")}
              </Link>
            )}
            {!isLoading && (
              <Link
                href={"/documents"}
                className={
                  pathname === "/documents"
                    ? styles.activeLink
                    : " textLinkAnimation"
                }
              >
                {t("Header.linkDocuments")}
              </Link>
            )}

            {!isLoading && (
              <Link
                href={"/rules"}
                className={
                  pathname === "/rules"
                    ? styles.activeLink
                    : " textLinkAnimation"
                }
              >
                {t("Header.linkRules")}
              </Link>
            )}
          </div>
        )}

        {!isMobile && (
          <div className={styles.rightLinks}>
            {!isLoading && (
              <Link
                href={"/contacts"}
                className={
                  pathname === "/contacts"
                    ? styles.activeLink
                    : " textLinkAnimation"
                }
              >
                {t("Header.linkContacts")}
              </Link>
            )}

            <SocialLinks />

            <TranslatorBtnBlock isClient={isClient} />
          </div>
        )}

        {isMobile && <TranslatorBtnBlock isClient={isClient} />}

        <Logo className={styles.logo} isClient={isClient} />

        {isMobile && (
          <BurgerBtn
            onClick={() => {
              setBurgerMenu(!burgerMenu);
            }}
            burgerMenu={burgerMenu}
            isClient={isClient}
          />
        )}

        {session.status === "authenticated" && !isLoading && (
          <button className={styles.logoutBtn} onClick={signOut}>
            {t("Buttons.LogOutBtn")}
          </button>
        )}
      </div>

      {(isMobile || !isLoading) && (
        <Navigation
          className={
            burgerMenu
              ? styles.mobileNavigationVisible
              : styles.mobileNavigation
          }
          onClick={() => {
            setTimeout(() => {
              setBurgerMenu(false);
            }, 250);
          }}
        />
      )}
    </header>
  );
};

export default Header;
