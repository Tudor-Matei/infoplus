import formatMonth from "./formatMonth";

export default function formatDate(badDate) {
    const goodDate = new Date(badDate);
    return `${goodDate.getDate()} ${formatMonth(
        goodDate.getMonth() + 1
    )} ${goodDate.getFullYear()}`;
}
