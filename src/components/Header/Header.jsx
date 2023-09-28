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

  // console.log(window.innerHeight);
  // console.log(window.innerHeight - 10);

  const [burgerMenu, setBurgerMenu] = useState(false);
  // const [scrollY, setScrollY] = useState(0); // Track scroll position
  const { scrollY, setScrollY } = useContext(SiteContext);
  console.log(scrollY);
  const pathname = usePathname();

  const isClient = typeof window !== "undefined";

  const handleScroll = () => {
    if (isClient) {
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    // Add event listener only on the client-side
    if (isClient) {
      window.addEventListener("scroll", handleScroll);

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isClient]);

  // Determine if the background should change after scrolling 100vh
  // const headerBgClass =
  //   pathname === "/" && scrollY >= window.innerHeight ? styles.scrolledBg : "";

  let headerBgClass;
  if (pathname === "/" && isClient) {
    headerBgClass =
      scrollY >= window.innerHeight - 50 ? styles.scrolledBg : " ";
  } else {
    headerBgClass = styles.scrolledBg;
  }

  let leftLinksStyles;
  let logoStyles;
  if (
    (pathname === "/" && scrollY && isClient >= window.innerHeight - 50) ||
    pathname !== "/"
  ) {
    leftLinksStyles = " ";
    logoStyles = styles.headerLogo;
  } else {
    leftLinksStyles = styles.leftLinkLight;
    logoStyles = styles.headerLogoLight;
  }

  return (
    <header className={`${styles.container} ${headerBgClass}`}>
      <div className={styles.leftLinks}>
        <Link href={"/apartments"} className={leftLinksStyles}>
          Апартаменти
        </Link>
        <Link href={"/documents"} className={leftLinksStyles}>
          Документи
        </Link>
      </div>
      <Logo className={logoStyles} />
      <div className={styles.rightLinks}>
        <Link href={"/rools"}>Правила</Link>
        <Link href={"/contacts"}>Контакти</Link>
      </div>
      {/* <TranslatorBtnBlock /> */}
      {session.status === "authenticated" && (
        <button onClick={signOut}>Logout</button>
      )}
      {/* <BurgerBtn
        onClick={() => {
          setBurgerMenu(!burgerMenu);
        }}
        burgerMenu={burgerMenu}
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
    </header>
  );
};

export default Header;
