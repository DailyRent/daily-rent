const TELEGRAM_CHAT_ID = "@TestDailyRent";
const telegramApi = process.env.TELEGRAM_API


export const sendToTelegram = async (formData) => {
    const { name, tel, number, check_In, check_Out } = formData;

    const text = `Вельмишановний Daily Rent,
     ${name} хотів би забронювати квартиру # ${number}
      з ${check_In} по ${check_Out}.
     Прохання зателефонувати: ${tel} `;

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