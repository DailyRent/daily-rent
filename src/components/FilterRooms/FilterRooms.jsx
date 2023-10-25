'use client';

import FilterRoomItem from './FilterRoomItem/FilterRoomItem';
import styles from './FilterRooms.module.scss';

const data = [
  { id: 1, title: 1 },
  { id: 2, title: 2 },
  { id: 3, title: 3 },
];

const FilterRooms = () => {
  return (
    <ul className={styles.container}>
      {data.map(({ id, title }) => (
        <FilterRoomItem key={id} id={id} title={title} />
      ))}
    </ul>
  );
};

export default FilterRooms;
