export function addDays(date, days) {
    date.setDate(date.getDate() - 1 + days);
    return date;
}

export function subDays(date, days) {
    date.setDate(date.getDate() + 1 - days);
    return date;
}

export function formatDate(d) {
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
}