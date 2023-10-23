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

  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isClient = typeof window !== "undefined";

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // if (isClient) {
    window.addEventListener("resize", handleResize);
    // } else {
    //   window.removeEventListener("resize", handleResize);
    // }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
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

      {isMobile && (
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

      {session.status === "authenticated" && (
        <button className={styles.logoutBtn} onClick={signOut}>
          Розлогінитися
        </button>
      )}
    </header>
  );
};

export default Header;
