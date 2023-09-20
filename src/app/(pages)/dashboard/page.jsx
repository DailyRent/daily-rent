"use client";
import React from 'react';
import styles from './page.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Dashboard = () => {
    const session = useSession();
    console.log("session", session);
    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login');
    }


    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>Dashboard</div>
        )
    }

}


export default Dashboard;