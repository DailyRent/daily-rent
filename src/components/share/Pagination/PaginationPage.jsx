'use client';

import styles from './Pagination.module.scss';
import { PaginationContext } from '@/context/PaginationContext';
import { useContext } from 'react';

const PaginationPage = ({ numbers, npage }) => {
  const { currentPage, setCurrentPage } = useContext(PaginationContext);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
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
