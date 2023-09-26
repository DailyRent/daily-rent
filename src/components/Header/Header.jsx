"use client";

import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import { usePathname } from "next/navigation";
import LangSwitcher from "../LangSwitcher/LangSwitcher";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const pathname = usePathname();

  console.log(pathname === "/");

  return (
    <header className={styles.container}>
      <div className={styles.leftLinks}>
        <Link
          href={"/apartments"}
          className={pathname === "/" && styles.leftLinkLight}
        >
          Апартаменти
        </Link>
        <Link
          href={"/documents"}
          className={pathname === "/" && styles.leftLinkLight}
        >
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

      <LangSwitcher />

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
