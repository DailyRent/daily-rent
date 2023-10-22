'use client';

import Link from 'next/link';
import { PaginationProvider } from '@/context/PaginationContext';
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
            <Link href="/" className="textLinkAnimation">
              Головна
            </Link>
            /
            <Link href="/oldApartments" className="textLinkAnimation">
              Апартаменти
            </Link>
            /
            <Link href="/oldApartments/1" className="textLinkAnimation">
              Однокімнатні
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
