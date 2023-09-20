"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';


const RegisterPage = () => {
    const [err, setErr] = useState(false);
    // для перенаправления после регистрации
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {

            const response = await fetch('/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                })
            })

            response.status === 201 && router.push('/dashboard/login?success=Account has been created');
        } catch (error) {
            setErr(true);
        }
    }


    return (
        <div className={styles.container}>
            <h1>Register Page</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ivan Petrov"
                    className={styles.input}
                    required />

                <input
                    type="email"
                    placeholder="Petrov@gmail.com"
                    className={styles.input}
                    required
                />

                <input
                    type="password"
                    placeholder="IvanP12345"
                    className={styles.input}
                    required
                />

                <button type="submit" className={styles.registerBtn}>Register</button>
            </form>

            {err && "Something went wrong ((("}
            <Link href='/dashboard/login'>Login with an existing account</Link>
        </div>
    )
}


export default RegisterPage;