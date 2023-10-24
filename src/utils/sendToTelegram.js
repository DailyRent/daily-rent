const TELEGRAM_CHAT_ID = "@TestDailyRent";
const telegramApi = process.env.TELEGRAM_API


export const sendToTelegram = async (formData) => {
    const { name, tel, number, check_In, check_Out } = formData;

    const textStart = `Вельмишановний Daily Rent,
     ${name} хотів би забронювати квартиру  ${number}`;

    const textEnd = `Прохання зателефонувати: ${tel} `;

    const textWithBothDates = `${textStart}
      з ${check_In} по ${check_Out}.
     ${textEnd}`;

    const textWithCheck_In = `${textStart}
      з ${check_In}.
      ${textEnd}`;

    const textWithCheck_Out = `${textStart}
       по ${check_Out}.
    ${textEnd}`;

    let text = "";

    if (check_In !== "не вказано" && check_Out !== "не вказано") {
        text = textWithBothDates;
    } else if (check_In !== "не вказано") {
        text = textWithCheck_In;
    } else if (check_Out !== "не вказано") {
        text = textWithCheck_Out;
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
            console.log("To telegram sent:", formData);
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}