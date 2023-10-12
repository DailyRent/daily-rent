import styles from "./ButtonFilter.module.scss";
import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/SiteContext";
import { useContext, useState, useEffect } from "react";

const ButtonFilter = () => {
  const { filterShown, setFilterShown } = useContext(SiteContext);
  const { t } = useTranslation();
  const[isLoad,setIsLoad]=useState(true)
  useEffect(() => {
    setIsLoad(false)
  },[])
  return (
    <div className={styles.filterContainer}>
      {!isLoad && <button
        type="button"
        className={styles.filterBtnContainer}
        onClick={() => setFilterShown(!filterShown)}
      >
        <svg className={styles.filterSvg}>
          <use href="/sprite.svg#icon-sliders" />
        </svg>
        <p className={styles.filter}>{t('Buttons.OpenFilterBtn')}</p>
      </button>}
    </div>
  );
};

export default ButtonFilter;
