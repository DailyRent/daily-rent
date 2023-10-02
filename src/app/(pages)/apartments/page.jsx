import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";

const Apartments = () => {
  return (
    <section className={styles.container}>
      <Link href="/apartments/1" className={styles.roomsContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/one-room.jpg"
            alt="one rooms"
            className={styles.img}
            fill="true"
          />
        </div>
        <h2 className={styles.title}>Однокімнатні</h2>
      </Link>
      <Link href="/apartments/2" className={styles.roomsContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/two-room.jpg"
            alt="one rooms"
            className={styles.img}
            fill="true"
          />
        </div>
        <h2 className={styles.title}>Двокімнатні</h2>
      </Link>
      <Link href="/apartments/3" className={styles.roomsContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/three-room.jpg"
            alt="one rooms"
            className={styles.img}
            fill="true"
          />
        </div>
        <h2 className={styles.title}>Трикімнатні</h2>
      </Link>
    </section>
  );
};

export default Apartments;
