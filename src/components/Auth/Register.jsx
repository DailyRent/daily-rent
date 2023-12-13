"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSchema } from "@/yupSchemas/registerSchema";
import styles from "./Register.module.scss";

const Register = () => {
  const [err, setErr] = useState(false);
  // для перенаправления после регистрации
  const router = useRouter();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, actions) => {
    const { name, email, password } = values;
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      response.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
      actions.resetForm();
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.displaySizeMessage}>
        Для користування цим функціоналом розмір Вашого екрану повинен бути не
        менше 768 пікселів.
      </p>
      <div className={styles.contentWrapper}>
        <h1>Реєстрація</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
          }}
        >
          {({ isValid }) => {
            return (
              <Form className={styles.form}>
                <ErrorMessage
                  name="name"
                  className={styles.error}
                  component="p"
                />
                <Field
                  name="name"
                  type="text"
                  placeholder="Ivan Petrov"
                  className={styles.input}
                />
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
                      ? `${styles.registerBtn} ${styles.active}`
                      : styles.registerBtn
                  }
                >
                  Зареєструватися
                </button>
              </Form>
            );
          }}
        </Formik>
        {err && "Щось трапилося ((("}
        <Link href="/dashboard/login">Ви вже зареєстровані ?</Link>
      </div>
    </div>
  );
};

export default Register;
