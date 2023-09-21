import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const Header = () => {
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

      <BurgerBtn />
      {/* <Navigation /> */}
    </header>
  );
};

export default Header;
