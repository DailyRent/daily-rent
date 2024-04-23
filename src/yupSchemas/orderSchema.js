import * as Yup from "yup";

import i18n from 'i18next';

import { regexPhone } from "@/utils/regularExpressions";

export const orderSchema = () => {
    return Yup.object({
        userName: Yup.string()
            .min(3, i18n.t("Form.errorShortName"))
            .max(29, i18n.t("Form.errorLongName")),
        phone: Yup.string()
            .matches(regexPhone, "+380123456789")
            .required(i18n.t("Form.fieldRequiredMsg")),
        objNumber: Yup.number()
            .moreThan(-1, i18n.t("Form.errorNumberOfObject2"))
            .typeError(i18n.t("Form.errorNumberOfObject3"))
            .test({
                name: "objNumber",
                test(value, ctx) {
                    const listOfNumbers = this.options.context;
                    if (!listOfNumbers.includes(String(value)) && value) {
                        return ctx.createError({
                            message: i18n.t("Form.errorNumberOfObject"),
                        });
                    }
                    return true;
                },
            }),
        checkIn: Yup.date()
            .nullable(),
        checkOut: Yup.date()
            .nullable()
    })
};