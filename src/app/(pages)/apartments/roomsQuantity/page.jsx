import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';


const RoomsQuantity = () => {
    return (
        <div className={styles.container}>
            <h1>RoomsQuantity</h1>
            <Link href='/apartments/roomsQuantity/1'>OneRooms Appartments</Link>
            <Link href='/apartments/roomsQuantity/2'>TwoRooms Appartments</Link>
            <Link href='/apartments/roomsQuantity/3'>ThreeRooms Appartments</Link>
        </div>
    )
}


export default RoomsQuantity;