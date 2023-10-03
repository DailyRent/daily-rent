'use client';

import styles from './Pagination.module.scss';
import { PaginationContext } from '@/context/PaginationContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PaginationPage = ({ numbers, npage }) => {
  const { currentPage, setCurrentPage } = useContext(PaginationContext);
  const router = useRouter();

  const currentRoute = router.asPath || '';

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const currentPages = localStorage.getItem('currentPages');
      if (currentPages !== null) {
        setCurrentPage(parseInt(currentPages));
      }
    }
  }, [setCurrentPage]);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('currentPages', currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    const newRoute = `${currentRoute}?page=${currentPage}`;
    router.push(newRoute);
  }, [currentPage, currentRoute, router]);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      const newRoute = `${currentRoute}?page=${currentPage - 1}`;
      router.push(newRoute);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
    const newRoute = `${currentRoute}?page=${id}`;
    router.push(newRoute);
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      const newRoute = `${currentRoute}?page=${currentPage + 1}`;
      router.push(newRoute);
    }
  };

  return (
    <ul className={styles.pagination}>
      <li className={styles.pageItem}>
        <a href="#" className={styles.pageLink} onClick={prePage}>
          <div className={styles.svgArrow + ' ' + styles.arrowLeft}></div>
        </a>
      </li>
      {numbers?.map((n, i) => (
        <li
          key={i}
          className={`${styles.pageLinkDot} ${styles.pageItem} ${
            currentPage === n ? styles.active : ''
          }`}
        >
          <a href="#" onClick={() => changeCPage(n)}>
            <span className={styles.pageDot}>{n}</span>
          </a>
        </li>
      ))}
      <li className={styles.pageItem}>
        <a href="#" className={styles.pageLink} onClick={nextPage}>
          <div className={styles.svgArrow + ' ' + styles.arrowRight}></div>
        </a>
      </li>
    </ul>
  );
};

export default PaginationPage;
