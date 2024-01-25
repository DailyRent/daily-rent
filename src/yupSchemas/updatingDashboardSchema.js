import * as Yup from "yup";

import { regexUrl, regexGoogleLocation } from "@/utils/regularExpressions";


export const updatingDashboardSchema = Yup.object({
    newTop: Yup.boolean(),
    // newTitleImg: Yup.string()
    //     .required("Головне фото це обовʼязкове поле"),
    newImgs: Yup.array().min(2, "Мінімум дві додаткові фотографії"),
    newAddress: Yup.string()
        .required("Адреса це обовʼязкове поле"),
    newAddressEn: Yup.string()
        .required("Адреса англійською це обовʼязкове поле"),
    newFlatNumber: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Номер квартири це обовʼязкове поле"),
    newGoogleMapLocation: Yup.string()
        .required("Google-локація це обовʼязкове поле")
        .matches(regexGoogleLocation, "https://maps.app.goo.gl/qvW2LmZFsvEDxMFej"),
    newPrice: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Ціна це обовʼязкове поле"),
    // newRoomsQuantity: Yup.string()
    //     .required("Кількість кімнат це обовʼязкове поле"),
    newBookingUrl: Yup.string()
        .matches(regexUrl, "https://www.booking.com"),
    newAmenities: Yup.array()
        .min(1, "Мінімум одне вибране поле")
        // .required("Додатковий комфорт це обовʼязкове поле")
    ,
    // newBedsQuantity: Yup.string()
    //     .required("Кількість спальних місць це обовʼязкове поле"),
    newDescription: Yup.string()
        .required("Опис це обовʼязкове поле"),
    newDescriptionEn: Yup.string()
        .required("Опис англійською це обовʼязкове поле"),
})