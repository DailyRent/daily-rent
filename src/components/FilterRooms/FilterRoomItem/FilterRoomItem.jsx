'use client';

import { useState } from 'react';

import styles from './FilterRoomItem.module.scss';

const FilterRoomItem = ({ id, title }) => {
  const [isChecked, setIsChecked] = useState(false);

  const filterCheckboxStyles = isChecked
    ? styles.filterInputCheckbox__Checked
    : styles.filterInputCheckbox;

  return (
    <li className={styles.filterRoom}>
      <p className={styles.filterRoomText}>{title} rooms</p>
      <input type="checkbox" className={filterCheckboxStyles} />
    </li>
  );
};

export default FilterRoomItem;
