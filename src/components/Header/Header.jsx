"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { usePathname } from "next/navigation";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { signOut, useSession } from "next-auth/react";
import TranslatorBtnBlock from "../share/TranslatorBtnBlock/TranslatorBtnBlock";

const Header = () => {
  const session = useSession();

  // console.log(window.innerHeight);
  // console.log(window.innerHeight - 10);

  const [burgerMenu, setBurgerMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0); // Track scroll position
  const pathname = usePathname();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if the background should change after scrolling 100vh
  // const headerBgClass =
  //   pathname === "/" && scrollY >= window.innerHeight ? styles.scrolledBg : "";

  let headerBgClass;
  if (pathname === "/") {
    headerBgClass =
      scrollY >= window.innerHeight - 50 ? styles.scrolledBg : " ";
  } else {
    headerBgClass = styles.scrolledBg;
  }

  let leftLinksStyles;
  if (
    (pathname === "/" && scrollY >= window.innerHeight - 50) ||
    pathname !== "/"
  ) {
    leftLinksStyles = " ";
  } else {
    leftLinksStyles = styles.leftLinkLight;
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

      <Logo
        className={
          pathname === "/" ? styles.headerLogoLight : styles.headerLogo
        }
      />

      <div className={styles.rightLinks}>
        <Link href={"/rools"}>Правила</Link>
        <Link href={"/contacts"}>Контакти</Link>
      </div>

      <TranslatorBtnBlock />

      {session.status === "authenticated" && (
        <button onClick={signOut}>Logout</button>
      )}

      <BurgerBtn
        onClick={() => {
          setBurgerMenu(!burgerMenu);
        }}
        burgerMenu={burgerMenu}
      />
      <Navigation
        className={
          burgerMenu ? styles.mobileNavigationVisible : styles.mobileNavigation
        }
        onClick={() => {
          setTimeout(() => {
            setBurgerMenu(false);
          }, 250);
        }}
      />
    </header>
  );
};

export default Header;
