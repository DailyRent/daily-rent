import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';


const Header = () => {
  return <div className={styles.container}>
    <h1>Header</h1>
    <Logo />
    <Navigation />
  </div>;
};


export default Header;