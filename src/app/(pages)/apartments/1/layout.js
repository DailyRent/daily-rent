'use client';

import Link from 'next/link';
import { PaginationProvider } from '@/context/PaginationContext';
import ButtonFilter from '@/components/share/ButtonFilter/ButtonFilter';
// import ButtonToBack from "@/components/share/ButtonToBack/ButtonToBack";
// import { useRouter } from "next/navigation";
import styles from './page.module.scss';

export default function OneRoomsLayout({ children }) {
  // const router = useRouter();

  return (
    <section className={styles.container}>
      <h1 className="visuallyHidden">OneRooms Appartments</h1>
      <div className={styles.oneRoomBox}>
        <div className={styles.backContainer}>
          {/* <ButtonToBack onGoBack={() => router.back()} /> */}
          <p className="textLink">
            <Link href="/">Головна</Link>/
            <Link href="/apartments">Апартаменти</Link>
            <Link href="/apartments/1">/ Однокімнатні</Link>
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
