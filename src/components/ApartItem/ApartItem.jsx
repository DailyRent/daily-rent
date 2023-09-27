import React from 'react';
import Image from 'next/image';
import styles from './ApartItem.module.scss';

const ApartItem = ({ img, code, address, price }) => {
  return (
    <li className={styles.oneRooms}>
      <div className={styles.imgContainer}>
        <Image src={img} alt="apartament" fill={true} className={styles.img} />
        <span className={styles.codeImg}>{code}</span>
      </div>
      <p className={styles.addressRooms}>{address}</p>
      <p className={styles.priceRooms}>{price}$ нічь</p>
      <span className={styles.codeRooms}>{code}</span>
      <button type="button" className={styles.btnRooms}>
        Детальніше
      </button>
    </li>
  );
  // return <div className={styles.container}>ApartItem</div>;
};

export default ApartItem;
