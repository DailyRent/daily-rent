"use client";
import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { signOut, useSession } from 'next-auth/react';


const Header = () => {
  const session = useSession();


  return <div className={styles.container}>
    <h1>Header</h1>
    <Logo />
    <Navigation />
    {session.status === "authenticated" && <button onClick={signOut}>Logout</button>}
  </div>;
};


export default Header;