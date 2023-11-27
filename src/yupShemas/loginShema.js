import * as Yup from "yup";


export const loginSchema = Yup.object({

    email: Yup.string()
        .email('Невірний формат')
        .required('email обовʼязкове поле'),
    password: Yup.string()
        .min(7, 'Too Short!')
        .max(40, 'Too Long!')
        .required('Пароль обовʼязкове поле'),

});