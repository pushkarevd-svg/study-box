// Задание 1

// let str = 'js';
// str = str.toUpperCase();

// console.log(str);

// Задание 2

// function filter(arr, str) {
//     const lowerStr = str.toLowerCase();
//     return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
// }

// Задание 3

// let num = 32.58884;

// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// Задание 4

// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5

// function getRandomNumber() {
//     return Math.floor(Math.random() * 10) + 1;
// }

// console.log(getRandomNumber());

// Задание 6

// function getRandomNumber(num) {
//     return Array.from({ length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num))
// }

// console.log(getRandomNumber(10));

// Задание 7

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Задание 8

// console.log(new Date());

// Задание 9

// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);

// Задание 10

function formatDateRu(date) {
    const days = [
        'воскресенье', 'понедельник',
        'вторник', 'среда',
        'четверг', 'пятница',
        'суббота'
    ];

    const months = [
        'января', 'февраля', 'марта',
        'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября',
        'октября', 'ноября', 'декабря'
    ];

    const year = date.getFullYear();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const dayOfWeek = days[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.
Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDateRu(new Date()));