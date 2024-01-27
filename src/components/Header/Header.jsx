"use client";
import React, { useEffect, useState, useCallback, useContext } from "react";
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
import { SiteContext } from "@/context/SiteContext";

const Header = () => {
  const session = useSession();
  const pathname = usePathname();

  const { t } = useTranslation();

  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { scrolledWindow, setScrolledWindow } = useContext(SiteContext);

  const isClient = typeof window !== "undefined";
  const isDocument = typeof document !== "undefined";

  const handleResize = useCallback(() => {
    if (
      window.innerWidth < 768 ||
      (session.status === "authenticated" && window.innerWidth < 1200)
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [session.status]);

  const header = isDocument && document.getElementById("header");

  const headerScrollclassName = useCallback(() => {
    if (window.scrollY <= 12) {
      header.classList.remove(`${styles.containerHidden}`);
      header.classList.add(`${styles.containerVisible}`);
    } else if (window.scrollY > scrolledWindow) {
      header.classList.add(`${styles.containerHidden}`);
      header.classList.remove(`${styles.containerVisible}`);
    } else {
      header.classList.remove(`${styles.containerHidden}`);
      header.classList.add(`${styles.containerVisible}`);
    }

    setScrolledWindow(window.scrollY);
  }, [scrolledWindow, setScrolledWindow, header.classList]);

  const closeBurgerMenu = () => {
    setTimeout(() => {
      setBurgerMenu(false);
    }, 250);
  };

  const closeBurgerMenuOnClick = useCallback((e) => {
    if (
      e.target.id === "mobileNavigation" ||
      e.target.nodeName === "use" ||
      e.target.nodeName === "svg"
    ) {
      return;
    } else {
      closeBurgerMenu();
    }
  }, []);

  useEffect(() => {
    setIsLoading(false);
    // Add an event listener for window resize

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", headerScrollclassName, { passive: true });
    window.addEventListener("click", closeBurgerMenuOnClick);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", headerScrollclassName, {
        passive: true,
      });
      window.removeEventListener("click", closeBurgerMenuOnClick);
    };
  }, [handleResize, headerScrollclassName, closeBurgerMenuOnClick]);

  return (
    <header id="header" className={styles.container}>
      <div className={styles.promotion}>
        {!isLoading && <p>{t("Header.headerSale")}</p>}
      </div>

      <div className={styles.navBar}>
        {!isMobile && (
          <div className={styles.leftLinks}>
            {!isLoading && (
              <>
                <Link
                  href={"/apartments"}
                  className={
                    pathname === "/apartments"
                      ? "activeLink"
                      : " textLinkAnimation"
                  }
                >
                  {t("Header.linkApartments")}
                </Link>

                <Link
                  href={"/documents"}
                  className={
                    pathname === "/documents"
                      ? "activeLink"
                      : " textLinkAnimation"
                  }
                >
                  {t("Header.linkDocuments")}
                </Link>

                <Link
                  href={"/rules"}
                  className={
                    pathname === "/rules" ? "activeLink" : " textLinkAnimation"
                  }
                >
                  {t("Header.linkRules")}
                </Link>
              </>
            )}
          </div>
        )}

        {!isMobile && (
          <div className={styles.rightLinks}>
            {!isLoading && (
              <Link
                href={"/contacts"}
                className={
                  pathname === "/contacts" ? "activeLink" : " textLinkAnimation"
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
            id="burgerBtn"
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
          id="mobileNavigation"
          className={
            burgerMenu
              ? styles.mobileNavigationVisible
              : styles.mobileNavigation
          }
          onClick={closeBurgerMenu}
        />
      )}
    </header>
  );
};

export default Header;
