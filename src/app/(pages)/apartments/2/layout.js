'use client';
import ButtonFilter from '@/components/share/ButtonFilter/ButtonFilter';
import ButtonToBack from '@/components/share/ButtonToBack/ButtonToBack';
import { PaginationProvider } from '@/context/PaginationContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function OneRoomsLayout({ children }) {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">TwoRooms Appartments</h1>
      <div className={styles.oneRoomBox}>
        <div className={styles.backContainer}>
          <ButtonToBack onGoBack={() => router.back()} />
          <p className={styles.text}>
            <Link href="/" className={styles.link}>
              Головна
            </Link>
            /
            <Link href="/apartments" className={styles.link}>
              Апартаменти
            </Link>
            / Двокімнатні
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
