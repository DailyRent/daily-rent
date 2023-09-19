"use client";
import React from 'react';
import styles from './page.module.scss';
import { useSession } from 'next-auth/react';


const Dashboard = () => {
    const session = useSession();
    console.log("session", session);


    return (
        <div className={styles.container}>Dashboard</div>
    )
}


export default Dashboard;