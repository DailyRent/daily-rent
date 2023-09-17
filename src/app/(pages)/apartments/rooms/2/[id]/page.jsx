import React from 'react';
import styles from './page.module.scss';
import ApartItem from '@/components/ApartItem/ApartItem';
import OrderBtn from '@/components/OrderBtn/OrderBtn';
import CallBtn from '@/components/CallBtn/CallBtn';


const ApartId = () => {
    return (
        <div className={styles.container}>
            <h1>ApartId</h1>
            <ApartItem />
            <OrderBtn />
            <CallBtn />
        </div>
    )
}


export default ApartId;