"use client";

import React, { useEffect, useState } from "react";

import MobileFooter from "./MobileFooter/MobileFooter";
import TabletFooter from "./TabletFooter/TabletFooter";

const Footer = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{mobile ? <MobileFooter /> : <TabletFooter />}</>;
};

export default Footer;
