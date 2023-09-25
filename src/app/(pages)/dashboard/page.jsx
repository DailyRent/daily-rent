"use client";
import React from 'react';
import styles from './page.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import Image from 'next/image';


const Dashboard = () => {
    const session = useSession();
    // console.log("session", session);

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR('/api/apartments', fetcher);

    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login');
    }

    if (session.status === "authenticated" && session.data.user.email !== process.env.NEXT_PUBLIC_ADMIN) {
        router.push("/")
    }


    if (session.status === "authenticated" && session.data.user.email === process.env.NEXT_PUBLIC_ADMIN) {
        return <div className={styles.container}>
            <h1>Welcome, {session.data.user.name} Admin!</h1>
            <div className={styles.apartments}>
                {isLoading
                    ? <p>Loading...</p>
                    : data?.map(apart => (
                        <div key={apart._id} className={styles.apartment}>
                            <h2>objNumber: {apart.objNumber}</h2>
                            <p>top: {apart.top}</p>
                            <p>Main photo:</p>
                            <div className={styles.imgContainer}>
                                <Image src={apart.titleImg} alt={apart.address} fill={true} />
                            </div>
                            <p>All photos:</p>
                            <ul className={styles.imgsWrapper}>{apart.imgs.map((item, index) => (<li className={styles.imgsCont} key={index}>
                                <Image src={item} alt="image" fill={true} />
                            </li>)
                            )}</ul>
                            <p>Address: {apart.address}, квартира {apart.flatNumber}</p>
                            <p>GoogleMapLocation: {apart.googleMapLocation}</p>
                            <p>RoomsQuantity: {apart.roomsQuantity}</p>
                            <p>AirbnbUrl: {apart.airbnbUrl}</p>
                            <p>BookingUrl: {apart.bookingUrl}</p>
                            <ul>Amenities: {apart.amenities.map((item, index) => (<li key={index}>{item}</li>))}
                            </ul>
                            <p>Description: {apart.description}</p>

                            <span className={styles.delete}
                            // onClick={() => handleDelete(card._id)}
                            >X</span>
                        </div>))}
            </div>

        </div>
    }
}


export default Dashboard;