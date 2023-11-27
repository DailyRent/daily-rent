"use client";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "@/yupShemas/loginShema";
import styles from "./Login.module.scss";

const Login = () => {
    // дает данные о пользователе - data, залогинен он или нет - status
    const session = useSession();
    // console.log(session) // { "data": null,  "status": "unauthenticated"}

    const router = useRouter();

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    // перенаправляет на другую страницу за счет роутера (если не админ)
    if (
        session.status === "authenticated" &&
        session.data.user.email !== process.env.NEXT_PUBLIC_ADMIN
    ) {
        router?.push("/");
    }

    // перенаправляет на другую страницу за счет роутера (если админ)
    if (
        session.status === "authenticated" &&
        session.data.user.email === process.env.NEXT_PUBLIC_ADMIN
    ) {
        router.push("/dashboard");
    }

    const initialValues = {
        email: "",
        password: "",
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const email = e.target[0].value;
    //     const password = e.target[1].value;

    //     signIn("credentials", { email, password });
    // };

    const handleSubmit = async (values, actions) => {
        const { email, password } = values;
        signIn("credentials", { email, password });
        actions.resetForm();
    };

    return (
        <div className={styles.container}>
            <p className={styles.displaySizeMessage}>
                Для користування цим функціоналом розмір Вашого екрану повинен
                бути не менше 768 пікселів.
            </p>
            <div className={styles.contentWrapper}>
                <h1>Вхід</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={loginSchema}
                    onSubmit={(values, actions) => {
                        handleSubmit(values, actions);
                    }}
                >
                    {({ isValid }) => {
                        return (
                            <Form className={styles.form}>
                                <ErrorMessage
                                    name='email'
                                    className={styles.error}
                                    component='p'
                                />
                                <Field
                                    name='email'
                                    type='email'
                                    placeholder='Petrov@gmail.com'
                                    className={styles.input}
                                />

                                <ErrorMessage
                                    name='password'
                                    className={styles.error}
                                    component='p'
                                />
                                <Field
                                    type='text'
                                    name='password'
                                    maxLength='100'
                                    placeholder='IvanP12345'
                                    className={styles.input}
                                />

                                <button
                                    type='submit'
                                    disabled={!isValid}
                                    className={
                                        isValid
                                            ? `${styles.registerBtn} ${styles.active}`
                                            : styles.registerBtn
                                    }
                                >
                                    Залогінитися
                                </button>
                            </Form>
                        );
                    }}
                </Formik>

                {/* <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type='email'
                        placeholder='Petrov@gmail.com'
                        className={styles.input}
                        required
                    />

                    <input
                        type='password'
                        placeholder='IvanP12345'
                        className={styles.input}
                        required
                    />

                    <button
                        type='submit'
                        className={`${styles.registerBtn} ${styles.active}`}
                    >
                        Залогінитися
                    </button>
                </form> */}

                <button
                    onClick={() => {
                        signIn("google");
                    }}
                    className={styles.loginBtn}
                >
                    Залогінитися за допомогою Google
                </button>
            </div>
        </div>
    );
};

export default Login;
