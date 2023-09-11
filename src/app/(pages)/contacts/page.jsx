import React from 'react';
import styles from './page.module.scss';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import OrderBtn from '@/components/OrderBtn/OrderBtn';
import CallBtn from '@/components/CallBtn/CallBtn';


const ContactsPage = () => {
    return (
        <div className={styles.container}>
            <h1>Contacts Page</h1>
            <SocialLinks />
            <OrderBtn />
            <CallBtn />
        </div>
    )
}


export default ContactsPage;