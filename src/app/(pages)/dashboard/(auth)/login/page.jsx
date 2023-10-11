"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";


const Login = () => {
    // дает данные о пользователе - data, залогинен он или нет - status
    const session = useSession();
    // console.log(session) // { "data": null,  "status": "unauthenticated"}

    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    // перенаправляет на другую страницу за счет роутера (если не админ)
    if (session.status === "authenticated" && session.data.user.email !== process.env.NEXT_PUBLIC_ADMIN) {
        router?.push("/");
    }

    // перенаправляет на другую страницу за счет роутера (если админ)
    if (session.status === "authenticated" && session.data.user.email === process.env.NEXT_PUBLIC_ADMIN) {
        router.push("/dashboard");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", { email, password });
    }


    return <div className={styles.container}>
        <h1>Вхід</h1>
        <form className={styles.form} onSubmit={handleSubmit}>

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

            <button type="submit" className={styles.registerBtn}>Залогінитися</button>
        </form>

        <button onClick={() => signIn("google")} className={styles.loginBtn}>Залогінитися за допомогою Google</button>
    </div>;
};


export default Login;