import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

const OldApartments = () => {
  return (
    <section className={styles.container}>
      <Link href="/oldApartments/1" className={styles.roomsContainer}>
        <Image
          src="/one-room.jpg"
          alt="one room apartments"
          className={styles.img}
          fill="true"
        />
        <h2> Однокімнатні</h2>
      </Link>
      <Link href="/oldApartments/2" className={styles.roomsContainer}>
        <Image
          src="/two-room.jpg"
          alt="two room apartments"
          className={styles.img}
          fill="true"
        />
        <h2>Двокімнатні</h2>
      </Link>
      <Link href="/oldApartments/3" className={styles.roomsContainer}>
        <Image
          src="/three-room.jpg"
          alt="three room apartments"
          className={styles.img}
          fill="true"
        />
        <h2>Трикімнатні</h2>
      </Link>
    </section>
  );
};

export default OldApartments;
