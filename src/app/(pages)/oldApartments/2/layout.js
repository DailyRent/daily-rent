'use client';
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
            <Link href="/" className="textLinkAnimation">
              Головна
            </Link>
            /
            <Link href="/oldApartments" className="textLinkAnimation">
              Апартаменти
            </Link>
            /
            <Link href="/oldApartments/2" className="textLinkAnimation">
              Двокімнатні
            </Link>
          </p>
        </div>
      </div>
      <PaginationProvider>
        <div className={styles.apartContainer}>{children}</div>
      </PaginationProvider>
    </section>
  );
}
