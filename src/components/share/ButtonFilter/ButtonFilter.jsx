import styles from "./ButtonFilter.module.scss";
import { SiteContext } from "@/context/SiteContext";
import { useContext } from "react";

const ButtonFilter = () => {
  const { filterShown, setFilterShown } = useContext(SiteContext);

  return (
    <div className={styles.filterContainer}>
      <button
        type="button"
        className={styles.filterBtnContainer}
        onClick={() => setFilterShown(!filterShown)}
      >
        <svg className={styles.filterSvg}>
          <use href="/sprite.svg#icon-sliders" />
        </svg>
        <p className={styles.filter}>Filter</p>
      </button>
    </div>
  );
};

export default ButtonFilter;
