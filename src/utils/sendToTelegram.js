const TELEGRAM_CHAT_ID = "@TestDailyRent";
const TELEGRAM_BOT_TOKEN = "6499221709:AAE7QKkeUy7uyh0Ee0NFt2Bj4Ed4TVHeG-A";
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
// const telegramApi = process.env.TELEGRAM_API


export const sendToTelegram = async (data) => {
    const { name, tel, number, check_In, check_Out } = data;

    const text = `Вельмишановний Daily Rent,
     ${name} хотів би забронювати квартиру # ${number}
      з ${check_In} по ${check_Out}.
     Прохання зателефонувати: ${tel} `;

    try {
        const response = await fetch(TELEGRAM_API, {
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
            console.log("To telegram sent:", data);
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}