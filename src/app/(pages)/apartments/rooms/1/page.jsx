'use client';
import ApartItem from '@/components/ApartItem/ApartItem';
import React, { useState } from 'react';
import styles from './page.module.scss';
import { data } from '../../../../../data/apartamentTest';

const OneRooms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <ul className={styles.containerOneRooms}>
        {records.map((item) => (
          <ApartItem
            key={item.id}
            img={item.img}
            code={item.code}
            address={item.address}
            prise={item.prise}
          />
        ))}
      </ul>
      <ul className={styles.pagination}>
        <li className={styles.pageItem}>
          <a href="#" className={styles.pageLink} onClick={prePage}>
            <div className={styles.svgArrow + ' ' + styles.arrowLeft}></div>
          </a>
        </li>
        {numbers.map((n, i) => (
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
    </>
  );
};

export default OneRooms;
