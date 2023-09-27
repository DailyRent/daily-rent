'use client';
import React, { useState, createContext } from 'react';

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  // const records = data.slice(firstIndex, lastIndex);
  // const npage = Math.ceil(data.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1);

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
    <PaginationContext.Provider
      value={{
        prePage,
        changeCPage,
        nextPage,
        firstIndex,
        lastIndex,
        recordsPerPage,
        currentPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
