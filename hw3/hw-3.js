// Задание 1
let password = 'пароль';
let userInput = prompt('Введите пароль');

if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2
let c = 8;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3
let d = 50;
let e = 120;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5
let monthNumber = 12;

if (monthNumber > 12 || monthNumber < 1) {
    console.log('Программа не выполняется: некорректный номер месяца');
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;

        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;

        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;

        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
    }
}