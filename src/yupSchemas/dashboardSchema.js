import * as Yup from "yup";

import { regexUrl, regexGoogleLocation } from "@/utils/regularExpressions";

export const dashboardSchema = Yup.object({
    objNumber: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Номер обʼєкту це обовʼязкове поле")
        .test({
            name: "objNumber",
            test(value, ctx) {
                const listOfNumbers = this.options.context;
                if (listOfNumbers.includes(String(value)) && value) {
                    return ctx.createError({
                        message: "Такий номер вже існує !",
                    });
                }

                return true;
            },
        }),
    top: Yup.boolean(),
    priority: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Пріоритет це обовʼязкове поле"),
    titleImg: Yup.string()
        .required("Головне фото це обовʼязкове поле"),
    imgs: Yup.array().min(2, "Мінімум дві додаткові фотографії"),
    address: Yup.string()
        .required("Адреса це обовʼязкове поле"),
    addressEn: Yup.string()
        .required("Адреса англійською це обовʼязкове поле"),
    flatNumber: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Номер квартири це обовʼязкове поле"),
    googleMapLocation: Yup.string()
        .required("Google-локація це обовʼязкове поле")
        .matches(regexGoogleLocation, "https://maps.app.goo.gl/qvW2LmZFsvEDxMFej"),
    price: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Ціна це обовʼязкове поле"),
    roomsQuantity: Yup.string()
        .required("Кількість кімнат це обовʼязкове поле"),
    bookingUrl: Yup.string()
        .matches(regexUrl, "https://www.booking.com"),
    amenities: Yup.array().min(1, "Мінімум одне вибране поле"),
    bedsQuantity: Yup.string()
        .required("Кількість спальних місць це обовʼязкове поле"),
    description: Yup.string()
        .required("Опис це обовʼязкове поле"),
    descriptionEn: Yup.string()
        .required("Опис англійською це обовʼязкове поле"),
})