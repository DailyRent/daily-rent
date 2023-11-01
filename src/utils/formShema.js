import * as Yup from "yup";

const phoneRegExp = /^\+\d{12}$/;

export const formSchema = Yup.object({
    userName: Yup.string()
        .min(2, "Ім’я має бути довшим")
        .max(29, "Ім’я має бути коротшим")
        .required("Заповніть це поле"),
    phone: Yup.string()
        .matches(phoneRegExp, "+380123456789")
        .required('Заповніть це поле'),
    objNumber: Yup.number()
        .moreThan(-1, "Тільки позитивні цифри")
        .typeError("Тільки цифри")
        .test({
            name: "objNumber",
            test(value, ctx) {
                // console.log('this.options:', this.options)
                const listOfNumbers = this.options.context;
                if (!listOfNumbers.includes(String(value)) && value) {
                    return ctx.createError({
                        message: "Такого номера немає",
                    });
                }

                return true;
            },
        }),
    checkIn: Yup.date()
        .nullable(),
    checkOut: Yup.date()
        .nullable()

});