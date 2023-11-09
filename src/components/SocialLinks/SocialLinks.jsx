import React from "react";
import styles from "./SocialLinks.module.scss";
import { socialLinks } from "@/data/socialLinks";
import Image from "next/image";

const SocialLinks = ({ className }) => {
  return (
    <ul className={styles.socialLinks + " " + `${className}`}>
      {socialLinks.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.href}>
              <Image
                src={item.img}
                width={24}
                height={24}
                alt={item.title}
                title={item.title}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
