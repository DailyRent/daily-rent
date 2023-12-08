import { formatDate } from "@/utils/dateUtils";

const TELEGRAM_CHAT_ID = "@TestDailyRent";
const telegramApi = process.env.TELEGRAM_API


export const sendToTelegram = async (formData) => {

    const formatedData = {
        ...formData,
        userName: formData.userName ? formData.userName : "Анонім",
        checkIn: formData.checkIn ? formatDate(formData.checkIn) : null,
        checkOut: formData.checkOut ? formatDate(formData.checkOut) : null,
    };

    const { userName, phone, objNumber, checkIn, checkOut } = formatedData;

    console.log("formatedData:", formatedData);

    const textStart = `Вельмишановний Daily Rent,
     ${userName} хотів би забронювати квартиру  ${objNumber}`;

    const textEnd = `Прохання зателефонувати: ${phone} `;

    const textWithBothDates = `${textStart}
      з ${checkIn} по ${checkOut}.
     ${textEnd}`;

    const textWithCheck_In = `${textStart}
      з ${checkIn}.
      ${textEnd}`;


    let text = "";

    if (checkIn && checkOut) {
        text = textWithBothDates;
    } else if (checkIn) {
        text = textWithCheck_In;
    } else {
        text = `${textStart} 
        ${textEnd}`;
    }

    try {
        const response = await fetch(telegramApi, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            }),
        });

        if (response.ok) {
            console.log("To telegram sent:", formatedData);
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}