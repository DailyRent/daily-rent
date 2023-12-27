"use client";
import React, { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const [scrollY, setScrollY] = useState(0);

  const [filterShown, setFilterShown] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const [scrolledWindow, setScrolledWindow] = useState(0);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <SiteContext.Provider
      value={{
        language,
        setLanguage,
        scrollY,
        setScrollY,
        filterShown,
        setFilterShown,
        isModalOpen,
        openModal,
        closeModal,
        scrolledWindow,
        setScrolledWindow,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
