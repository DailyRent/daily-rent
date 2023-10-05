'use client';
import ButtonFilter from '@/components/share/ButtonFilter/ButtonFilter';
import { PaginationProvider } from '@/context/PaginationContext';
import Link from 'next/link';
import styles from './page.module.scss';

export default function OneRoomsLayout({ children }) {
  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">TwoRooms Appartments</h1>
      <div className={styles.oneRoomBox}>
        <div className={styles.backContainer}>
          <p className="textLink">
            <Link href="/">Головна</Link>/
            <Link href="/apartments">Апартаменти</Link>/
            <Link href="/apartments/2">Двокімнатні</Link>
          </p>
        </div>
        <ButtonFilter />
      </div>
      <PaginationProvider>
        <div className={styles.apartContainer}>{children}</div>
      </PaginationProvider>
    </section>
  );
}
