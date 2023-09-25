import React from 'react';
import ApartItem from '@/components/ApartItem/ApartItem';
// import styles from './page.module.scss';

async function getData() {
  const result = await fetch(`${process.env.NEXTAUTH_URL}/api/apartments`, {
    cache: 'no-store',
  });

  if (!result.ok) {
    throw new Error('Failed to fetch data.');
  }

  return result.json();
}

const data = await getData();

const TwoRooms = () => {
  return <ApartItem data={data} />;
};

export default TwoRooms;
