'use client';

import styles from './Pagination.module.scss';
import { PaginationContext } from '@/context/PaginationContext';
import { useContext, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const PaginationPage = ({ numbers, npage }) => {
  const { currentPage, setCurrentPage } = useContext(PaginationContext);

  const router = useRouter();

  const currentRoute = router.asPath || '';

  const pathName = usePathname();
  // const searchParams = useSearchParams();
  // const page = searchParams.get('page');
  // console.log(page);

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

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('currentPages');
      setCurrentPage(1);
    }

    // eslint-disable-next-line
  }, [pathName]);

  // useEffect(() => {
  //   if (typeof localStorage !== 'undefined') {
  //     localStorage.setItem('currentPages', searchParams);
  //   }
  // }, [searchParams]);

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

  const centerPageCount = 5;
  const centerPage = Math.ceil(centerPageCount / 2);

  let visiblePageNumbers = [];

  if (npage <= centerPageCount) {
    visiblePageNumbers = [...Array(npage).keys()].map((n) => n + 1);
  } else if (currentPage <= centerPage) {
    visiblePageNumbers = [...Array(centerPageCount).keys()].map((n) => n + 1);
  } else if (currentPage >= npage - centerPage + 1) {
    visiblePageNumbers = [...Array(centerPageCount).keys()].map(
      (n) => npage - centerPageCount + n + 1
    );
  } else {
    visiblePageNumbers.push(currentPage);

    for (let i = 1; i <= centerPage - 1; i++) {
      visiblePageNumbers.unshift(currentPage - i);
      visiblePageNumbers.push(currentPage + i);
    }
  }

  return (
    <ul className={styles.pagination}>
      <li className={styles.pageItem}>
        <a href="#" className={styles.pageLink} onClick={prePage}>
          <div className={styles.svgArrow + ' ' + styles.arrowLeft}></div>
        </a>
      </li>
      <li>
        <ul className={styles.dotList}>
          {visiblePageNumbers?.map((n, i) => (
            <li
              key={i}
              className={`${styles.pageLinkDot} ${styles.pageItem} ${
                currentPage === n ? styles.active : ''
              }`}
            >
              <a
                href="#"
                onClick={() => changeCPage(n)}
                className={styles.pageLinkItem}
              >
                <span className={styles.pageDot}>{n}</span>
              </a>
            </li>
          ))}
        </ul>
      </li>
      <li className={styles.pageItem}>
        <a href="#" className={styles.pageLink} onClick={nextPage}>
          <div className={styles.svgArrow + ' ' + styles.arrowRight}></div>
        </a>
      </li>
    </ul>
  );
};

export default PaginationPage;
