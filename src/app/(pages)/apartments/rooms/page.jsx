import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

const RoomsQuantity = () => {
  return (
    <section className={styles.container}>
      <Link href="/apartments/rooms/1" className={styles.roomsContainer}>
        <h2 className={styles.title}>Однокімнатні</h2>
      </Link>
      <Link href="/apartments/rooms/2" className={styles.roomsContainer}>
        <h2 className={styles.title}>Двокімнатні</h2>
      </Link>
      <Link href="/apartments/rooms/3" className={styles.roomsContainer}>
        <h2 className={styles.title}>Трикімнатні</h2>
      </Link>
    </section>
  );
};

export default RoomsQuantity;
