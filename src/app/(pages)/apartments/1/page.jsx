'use client';

import React, { useContext, useState } from 'react';

// import { useRouter } from 'next/navigation';

import ApartItem from '@/components/ApartItem/ApartItem';
import { PaginationContext } from '@/context/PaginationContext';
import PaginationPage from '@/components/share/Pagination/PaginationPage';
import styles from './page.module.scss';
import { GetData } from '@/fetch/clientFetch';
import IsLoading from '@/components/share/IsLoading/IsLoading';
import Filter from '@/components/Filter/Filter';
import ButtonFilter from '@/components/share/ButtonFilter/ButtonFilter';

const OneRooms = () => {
  const { data, error, isLoading } = GetData();
  const [amenitiesArr, setAmenitiesArr] = useState([]);

  const { firstIndex, lastIndex, recordsPerPage, currentPage, setCurrentPage } =
    useContext(PaginationContext);

  const roomsData = data?.filter((item) => item.roomsQuantity === '1');

  const filteredRoomsData = roomsData?.filter((room) => {
    const amenities = room.amenities;
    // console.log(amenities);
    const filteredAmenities = amenitiesArr.every((amenity) =>
      amenities.includes(amenity)
    );
    // console.log(filteredAmenities);
    return filteredAmenities;
    // room.amenities.includes();
  });
  // console.log(filteredRooms);

  // filteredRoomsData();
  // console.log(filteredRoomsData);

  const records = filteredRoomsData?.slice(firstIndex, lastIndex);
  const npage = filteredRoomsData
    ? Math.ceil(filteredRoomsData?.length / recordsPerPage)
    : 0;

  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <ButtonFilter />
      <Filter amenitiesArr={amenitiesArr} setAmenitiesArr={setAmenitiesArr} />
      {/* {console.log(amenitiesArr)} */}
      {isLoading ? (
        <IsLoading />
      ) : (
        <ul className={styles.containerOneRooms}>
          {records?.length > 0 ? (
            records?.map((item) => (
              <ApartItem
                key={item._id}
                titleImg={item.titleImg}
                code={item.code}
                address={item.address}
                price={item.price}
                objNumber={item.objNumber}
                roomsQuantity={item.roomsQuantity}
                id={item._id}
              />
            ))
          ) : (
            <div className={styles.notFoundText}>
              <p>Однокімнатних квартир не знайдено</p>
            </div>
          )}
        </ul>
      )}
      {records?.length > 0 && !isLoading && (
        <PaginationPage numbers={numbers} npage={npage} />
      )}
    </>
  );
};

export default OneRooms;
