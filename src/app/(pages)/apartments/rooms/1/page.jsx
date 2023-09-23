import Image from 'next/image';
import React from 'react';
import styles from './page.module.scss';

const data = [
  {
    id: 1,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
  {
    id: 2,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
  {
    id: 2,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
  {
    id: 3,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
  {
    id: 4,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
  {
    id: 5,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
  {
    id: 6,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
  {
    id: 7,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
  {
    id: 8,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
  {
    id: 9,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
  {
    id: 10,
    img: '/apartTest.png',
    code: '8329533',
    address: 'проїзд Філатівський 25, Суми',
    price: '29',
  },
];

const OneRooms = () => {
  return (
    <ul className={styles.containerOneRooms}>
      {data.map((item) => (
        <li key={item.id} className={styles.oneRooms}>
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              alt="apartament"
              fill={true}
              className={styles.img}
            />
            <span className={styles.codeImg}>{item.code}</span>
          </div>
          <p className={styles.addressRooms}>{item.address}</p>
          <p className={styles.priceRooms}>{item.price}$ нічь</p>
          <span className={styles.codeRooms}>{item.code}</span>
          <button type="button" className={styles.btnRooms}>
            Детальніше
          </button>
        </li>
      ))}
    </ul>
  );
};

export default OneRooms;
