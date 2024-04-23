"use client";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "@/yupSchemas/loginSchema";
import styles from "./Login.module.scss";
import Loading from "@/app/loading";

const Login = () => {
  // дает данные о пользователе - data, залогинен он или нет - status
  const session = useSession();

  const router = useRouter();

  if (session.status === "loading") {
    return <Loading />;
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

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;
    signIn("credentials", { email, password });
    actions.resetForm();
  };

  return (
    <div className={styles.container}>
      <p className={styles.displaySizeMessage}>
        Для користування цим функціоналом розмір Вашого екрану повинен бути не
        менше 768 пікселів.
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
                  name="email"
                  className={styles.error}
                  component="p"
                />
                <Field
                  name="email"
                  type="email"
                  placeholder="Petrov@gmail.com"
                  className={styles.input}
                />

                <ErrorMessage
                  name="password"
                  className={styles.error}
                  component="p"
                />
                <Field
                  type="text"
                  name="password"
                  maxLength="100"
                  placeholder="IvanP12345"
                  className={styles.input}
                />

                <button
                  type="submit"
                  disabled={!isValid}
                  className={
                    isValid
                      ? `${styles.loginBtn} ${styles.active}`
                      : styles.loginBtn
                  }
                >
                  Залогінитися
                </button>
              </Form>
            );
          }}
        </Formik>

        <button
          onClick={() => {
            signIn("google");
          }}
          className={styles.loginGoogleBtn}
        >
          Залогінитися за допомогою Google
        </button>
      </div>
    </div>
  );
};

export default Login;
