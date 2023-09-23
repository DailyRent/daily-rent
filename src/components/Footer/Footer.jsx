import React from "react";
// import styles from "./Footer.module.scss";
// import CallBtn from "../CallBtn/CallBtn";
// import OrderBtn from "../OrderBtn/OrderBtn";
// import Navigation from "../Navigation/Navigation";
// import Logo from "../Logo/Logo";

// import SocialLinks from "../SocialLinks/SocialLinks";
// import Link from "next/link";
import MobileFooter from "./MobileFooter/MobileFooter";
import TabletFooter from "./TabletFooter/TabletFooter";

const Footer = () => {
  return (
    <>
      <MobileFooter />
      <TabletFooter />
    </>
  );
};

export default Footer;
