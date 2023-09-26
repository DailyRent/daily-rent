"use client";

import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  console.log(burgerMenu);
  return (
    <header className={styles.container}>
      <div className={styles.leftLinks}>
        <Link href={"/apartments"}>Апартаменти</Link>
        <Link href={"/documents"}>Документи</Link>
      </div>

      <Logo className={styles.headerLogo} />

      <div className={styles.rightLinks}>
        <Link href={"/rools"}>Правила</Link>
        <Link href={"/contacts"}>Контакти</Link>
      </div>

      <div className={styles.langSwitcher}>Eng </div>

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
