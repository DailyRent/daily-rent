import * as Yup from "yup";


export const registerSchema = Yup.object({
    name: Yup.string()
        .min(4, 'Імʼя занадто коротке!')
        .max(40, 'Імʼя занадто довге!')
        .required('Імʼя це обовʼязкове поле'),
    email: Yup.string()
        .email('Невірний формат')
        .required('Email це обовʼязкове поле'),
    password: Yup.string()
        .min(7, 'Пароль занадто короткий!')
        .max(40, 'Пароль занадто довгий!')
        .required('Пароль це обовʼязкове поле'),

});