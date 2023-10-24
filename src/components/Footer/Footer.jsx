"use client";

import React, { useContext } from "react";
import Link from "next/link";

import { SiteContext } from "@/context/SiteContext";
import OrderBtn from "@/components/OrderBtn/OrderBtn";
import CallBtn from "@/components/CallBtn/CallBtn";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import ModalR from "@/components/Modal/Modal";
import OrderForm from "@/components/OrderForm/OrderForm";
import styles from "./Footer.module.scss";
import { navigationData } from "@/data/navigation.data";

const Footer = ({ onClick }) => {
  const { isModalOpen, openModal, closeModal } = useContext(SiteContext);

  return (
    <>
      <ModalR isOpen={isModalOpen} closeModal={closeModal}>
        <OrderForm isOpen={isModalOpen} closeModal={closeModal} />
      </ModalR>
      <footer className={styles.container}>
        <Logo className={styles.footerLogo} />
        <div className={styles.contentWrapper}>
          <div className={styles.contacts}>
            <Link href="mailto:dailyrent4@gmail.com">dailyrent4@gmail.com</Link>
            <Link href="tel:+380357960801">+380357960801</Link>
            <Link href="tel:+380357960802">+380357960802</Link>
          </div>
          <ul className={styles.navigation}>
            {navigationData.slice(0, 2).map((item) => {
              return (
                <li key={item.id} onClick={onClick}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          <ul className={styles.navigation}>
            {navigationData.slice(2, 4).map((item) => {
              return (
                <li key={item.id} onClick={onClick}>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.btnsWrapper}>
            <CallBtn />
            <OrderBtn openModal={openModal} />
          </div>
        </div>
        <p className={styles.rights}>
          made by
          <Link
            href="https://webevery.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            webevery.dev{" "}
          </Link>
          ⓒ all rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
