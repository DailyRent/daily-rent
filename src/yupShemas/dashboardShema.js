import * as Yup from "yup";

const regExprUrl = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
const regExprLocation = /!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+))/;

export const dashboardSchema = Yup.object({
    objNumber: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Номер обʼєкту це обовʼязкове поле")
        .test({
            name: "objNumber",
            test(value, ctx) {
                // console.log('this.options:', this.options)
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
        .matches(regExprLocation, "https://www.google.com/maps/place/Starbucks/...повна адреса..."),
    price: Yup.number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа")
        .required("Ціна це обовʼязкове поле"),
    roomsQuantity: Yup.string()
        .required("Кількість кімнат це обовʼязкове поле"),
    bookingUrl: Yup.string()
        .required("web-адреса booking це обовʼязкове поле")
        .matches(regExprUrl, "https://www.booking.com"),
    description: Yup.string()
        .required("Опис це обовʼязкове поле"),
    descriptionEn: Yup.string()
        .required("Опис на англійській це обовʼязкове поле"),

})
