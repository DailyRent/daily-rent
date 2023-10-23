"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { usePathname } from "next/navigation";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { signOut, useSession } from "next-auth/react";
import TranslatorBtnBlock from "../share/TranslatorBtnBlock/TranslatorBtnBlock";
import { SiteContext } from "@/context/SiteContext";

const Header = () => {
  const session = useSession();
  const pathname = usePathname();

  // console.log(window.innerHeight);
  // console.log(window.innerHeight - 10);

  const [burgerMenu, setBurgerMenu] = useState(false);
  // const [scrollY, setScrollY] = useState(0); // Track scroll position
  // const { scrollY, setScrollY } = useContext(SiteContext);

  const isClient = typeof window !== "undefined";

  // const handleScroll = () => {
  //   if (isClient) {
  //     setScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   // Add event listener only on the client-side
  //   if (isClient) {
  //     window.addEventListener("scroll", handleScroll);

  //     // Remove event listener on cleanup
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }

  //   // eslint-disable-next-line
  // }, [isClient]);

  // let headerBgClass;
  // let leftLinksStyles;
  // let logoStyles;

  // let iconCloseStyles;
  // let iconBurgerStyles;
  // if (
  //   (pathname === "/" && isClient && scrollY >= window.innerHeight - 50) ||
  //   pathname !== "/"
  // ) {
  //   headerBgClass = styles.scrolledBg;
  //   leftLinksStyles = " ";
  //   logoStyles = styles.headerLogo;

  //   iconCloseStyles = styles.iconCloseDark;
  //   iconBurgerStyles = styles.iconBurgerDark;
  // } else {
  //   headerBgClass = " ";
  //   leftLinksStyles = styles.leftLinkLight;
  //   logoStyles = styles.headerLogoLight;

  //   iconCloseStyles = styles.iconClose;
  //   iconBurgerStyles = styles.iconBurger;
  // }
  return (
    // <header className={`${styles.container} ${headerBgClass}`}>
    <header className={styles.container}>
      <p className={styles.promotion}>
        -10% НА ВСІ КВАРТИРИ ПРИ ПЕРШОМУ ЗВЕРНЕННІ
      </p>
      <div className={styles.navBar}>
        <TranslatorBtnBlock isClient={isClient} />

        <Logo className={styles.logo} isClient={isClient} />

        <BurgerBtn
          onClick={() => {
            setBurgerMenu(!burgerMenu);
          }}
          burgerMenu={burgerMenu}
          isClient={isClient}
        />
      </div>
      {/* <div className={styles.leftLinks}>
        <Link
          href={"/apartments"}
          className={
            pathname === "/apartments"
              ? styles.activeLink
              : " textLinkAnimation"
          }
        >
          Апартаменти
        </Link>

        <Link
          href={"/documents"}
          className={
            pathname === "/documents" ? styles.activeLink : " textLinkAnimation"
          }
        >
          Документи
        </Link>

        <Link
          href={"/rules"}
          className={
            pathname === "/documents" ? styles.activeLink : " textLinkAnimation"
          }
        >
          Правила
        </Link>
      </div> */}
      {/* <Logo className={logoStyles} isClient={isClient} /> */}
      {/* <div className={styles.rightLinks}>
        <Link
          href={"/rules"}
          className={
            pathname === "/rules" ? styles.activeLink : " textLinkAnimation"
          }
        >
          Правила
        </Link>
        <Link
          href={"/contacts"}
          className={
            pathname === "/contacts" ? styles.activeLink : " textLinkAnimation"
          }
        >
          Контакти
        </Link>
      </div> */}
      {/* <TranslatorBtnBlock isClient={isClient} />
      {session.status === "authenticated" && (
        <button className={styles.logoutBtn} onClick={signOut}>
          Розлогінитися
        </button>
      )} */}
      {/* <BurgerBtn
        onClick={() => {
          setBurgerMenu(!burgerMenu);
        }}
        burgerMenu={burgerMenu}
        isClient={isClient}
        iconCloseStyles={iconCloseStyles}
        iconBurgerStyles={iconBurgerStyles}
      /> */}
      {/* <Navigation
        className={
          burgerMenu ? styles.mobileNavigationVisible : styles.mobileNavigation
        }
        onClick={() => {
          setTimeout(() => {
            setBurgerMenu(false);
          }, 250);
        }}
      /> */}

      {session.status === "authenticated" && (
        <button className={styles.logoutBtn} onClick={signOut}>
          Розлогінитися
        </button>
      )}
    </header>
  );
};

export default Header;
