import React from 'react';
import { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './OrderBtn.module.scss';

const OrderBtn = ({ openModal, className }) => {
  const {t}=useTranslation();

  const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    setIsLoading(false)
  },[])
  return (<>
    {!isLoading && (
    <button
      type="button"
      className={styles.button + ' ' + `${className}`}
      onClick={openModal}
    >
      {t("Buttons.OrderBtn")}
    </button>)}
    </>
  );
};

export default OrderBtn;
