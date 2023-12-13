import * as Yup from "yup";


export const loginSchema = Yup.object({

    email: Yup.string()
        .email('Невірний формат')
        .required('Email це обовʼязкове поле'),
    password: Yup.string()
        .min(7, 'Пароль занадто короткий!')
        .max(40, 'Пароль занадто довгий!')
        .required('Пароль це обовʼязкове поле'),

});