import ApartItem from '@/components/ApartItem/ApartItem';
// import Image from 'next/image';
import React from 'react';
import styles from './page.module.scss';
import { data } from '../../../../../data/apartamentTest';

const OneRooms = () => {
  return (
    <ul className={styles.containerOneRooms}>
      {data.map((item) => (
        <ApartItem
          key={item.id}
          img={item.img}
          code={item.code}
          address={item.address}
          prise={item.prise}
        />
        // <li key={item.id} className={styles.oneRooms}>
        //   <div className={styles.imgContainer}>
        //     <Image
        //       src={item.img}
        //       alt="apartament"
        //       fill={true}
        //       className={styles.img}
        //     />
        //     <span className={styles.codeImg}>{item.code}</span>
        //   </div>
        //   <p className={styles.addressRooms}>{item.address}</p>
        //   <p className={styles.priceRooms}>{item.price}$ нічь</p>
        //   <span className={styles.codeRooms}>{item.code}</span>
        //   <button type="button" className={styles.btnRooms}>
        //     Детальніше
        //   </button>
        // </li>
      ))}
    </ul>
  );
};

export default OneRooms;
