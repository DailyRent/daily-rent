import React from 'react';
import styles from './Logo.module.scss';
import Link from 'next/link';


const Logo = () => {
    return (
        <div className={styles.container}>
            <Link href='/'>Logo</Link>
        </div>
    )
}


export default Logo;