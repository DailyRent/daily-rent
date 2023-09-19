import React from 'react';
import styles from './Footer.module.scss';
import CallBtn from '../CallBtn/CallBtn';
import OrderBtn from '../OrderBtn/OrderBtn';
import Navigation from '../Navigation/Navigation';


const Footer = () => {
  return <div className={styles.container}>
    <h1>Footer</h1>
    <Navigation />
    <CallBtn />
    <OrderBtn />
  </div>;
};


export default Footer;