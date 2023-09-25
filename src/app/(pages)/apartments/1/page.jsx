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

const OneRooms = () => {
  // console.log(data);
  // const { firstIndex, lastIndex, recordsPerPage } =
  //   useContext(PaginationContext);

  // const records = data.slice(firstIndex, lastIndex);
  // const npage = Math.ceil(data.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <ApartItem data={data} />
      {/* <ul className={styles.containerOneRooms}>
        {records.map((item) => (
          <ApartItem
            key={item._id}
            img={item.img}
            code={item.code}
            address={item.address}
            prise={item.prise}
          />
        ))}
      </ul>
      <Pagination numbers={numbers} /> */}
    </>
  );
};

export default OneRooms;
