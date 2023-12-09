import * as Yup from "yup";
import { regExprUrl, regExprGoogleLocation } from "@/utils/regularExpressions";


export const upDashboardSchema = Yup.object({
    newTop: Yup.boolean(),
    newTitleImg: Yup.string()
        .required("Головне фото це обовʼязкове поле"),
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
        .matches(regExprGoogleLocation, "https://www.google.com/maps/place/Starbucks/...повний url..."),
    newPrice: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Ціна це обовʼязкове поле"),
    newRoomsQuantity: Yup.string()
        .required("Кількість кімнат це обовʼязкове поле"),
    newBookingUrl: Yup.string()
        .required("web-адреса booking це обовʼязкове поле")
        .matches(regExprUrl, "https://www.booking.com"),
    newBedsQuantity: Yup.string()
        .required("Кількість спальних місць це обовʼязкове поле"),
    newDescription: Yup.string()
        .required("Опис це обовʼязкове поле"),
    newDescriptionEn: Yup.string()
        .required("Опис англійською це обовʼязкове поле"),

})