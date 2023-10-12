'use client';

import { useCallback, useContext, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { PaginationContext } from '@/context/PaginationContext';
import styles from './Pagination.module.scss';

const PaginationPage = ({ npage }) => {
  const { currentPage, setCurrentPage } = useContext(PaginationContext);

  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const page = searchParams.get('page');
    if (page !== null) {
      setCurrentPage(parseInt(page));
    }
  }, [searchParams, setCurrentPage]);

  useEffect(() => {
    const queryString = createQueryString('page', currentPage);
    const newRoute = `${pathname}?${queryString}`;
    router.replace(newRoute, undefined, { shallow: true });
  }, [currentPage, pathname, createQueryString, router]);

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

// 'use client';

// import styles from './Pagination.module.scss';
// import { PaginationContext } from '@/context/PaginationContext';
// import { useContext, useEffect } from 'react';
// import { usePathname, useRouter } from 'next/navigation';

// const PaginationPage = ({ numbers, npage }) => {
//   const { currentPage, setCurrentPage } = useContext(PaginationContext);

//   const router = useRouter();

//   const currentRoute = router.asPath || '';

//   const pathName = usePathname();

//   useEffect(() => {
//     if (typeof localStorage !== 'undefined') {
//       const currentPages = localStorage.getItem('currentPages');
//       if (currentPages !== null) {
//         setCurrentPage(parseInt(currentPages));
//       } else {
//         setCurrentPage(1);
//       }
//     }
//   }, [setCurrentPage]);

//   useEffect(() => {
//     if (typeof localStorage !== 'undefined') {
//       localStorage.setItem('currentPages', currentPage.toString());
//     }
//   }, [currentPage]);

//   useEffect(() => {
//     const path = window.location.pathname + window.location.search;
//     if (path === pathName) {
//       if (typeof localStorage !== 'undefined') {
//         localStorage.removeItem('currentPages');
//         setCurrentPage(1);
//       }
//     }
//     // eslint-disable-next-line
//   }, [pathName]);

//   useEffect(() => {
//     const newRoute = `${currentRoute}?page=${currentPage}`;
//     router.push(newRoute);
//     // }, []);
//   }, [currentPage, currentRoute, router]);

//   const prePage = () => {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const changeCPage = (id) => {
//     setCurrentPage(id);
//   };

//   const nextPage = () => {
//     if (currentPage !== npage) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const centerPageCount = 5;
//   const centerPage = Math.ceil(centerPageCount / 2);

//   let visiblePageNumbers = [];

//   if (npage <= centerPageCount) {
//     visiblePageNumbers = [...Array(npage).keys()].map((n) => n + 1);
//   } else if (currentPage <= centerPage) {
//     visiblePageNumbers = [...Array(centerPageCount).keys()].map((n) => n + 1);
//   } else if (currentPage >= npage - centerPage + 1) {
//     visiblePageNumbers = [...Array(centerPageCount).keys()].map(
//       (n) => npage - centerPageCount + n + 1
//     );
//   } else {
//     visiblePageNumbers.push(currentPage);

//     for (let i = 1; i <= centerPage - 1; i++) {
//       visiblePageNumbers.unshift(currentPage - i);
//       visiblePageNumbers.push(currentPage + i);
//     }
//   }

//   return (
//     <ul className={styles.pagination}>
//       <li className={styles.pageItem}>
//         <a href="#" className={styles.pageLink} onClick={prePage}>
//           <div className={styles.svgArrow + ' ' + styles.arrowLeft}></div>
//         </a>
//       </li>
//       <li>
//         <ul className={styles.dotList}>
//           {visiblePageNumbers?.map((n, i) => (
//             <li
//               key={i}
//               className={`${styles.pageLinkDot} ${styles.pageItem} ${
//                 currentPage === n ? styles.active : ''
//               }`}
//             >
//               <a
//                 href="#"
//                 onClick={() => changeCPage(n)}
//                 className={styles.pageLinkItem}
//               >
//                 <span className={styles.pageDot}>{n}</span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </li>
//       <li className={styles.pageItem}>
//         <a href="#" className={styles.pageLink} onClick={nextPage}>
//           <div className={styles.svgArrow + ' ' + styles.arrowRight}></div>
//         </a>
//       </li>
//     </ul>
//   );
// };
