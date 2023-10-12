'use client';
import React, { useState, createContext } from 'react';

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  return (
    <PaginationContext.Provider
      value={{
        firstIndex,
        lastIndex,
        recordsPerPage,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
