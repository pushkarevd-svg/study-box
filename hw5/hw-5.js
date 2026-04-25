// Задание 1

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(8, 4));
console.log(min(6, 6));

// Задание 2

function isEven(number) {
    if (number % 2 === 0) {
        return 'Число четное'
    } else {
        return 'Число нечетное'
    }
}

// Задание 3

function printSquare(num) {
    console.log(num ** 2);
}

function getSquare(num) {
    return num ** 2;
}

// Задание 4

function age() {
    let age = +prompt('Сколько тебе лет?')

    if (isNaN(age) || age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

// Задание 5

function mult(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return a * b;
    }
}

// Задание 6

function getNumber() {
    let n = +prompt('Введите число')
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${n} в кубе равняется ${n ** 3}`;
    }
}

// Задание 7

function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter
}

const circle2 = {
    radius: 5,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter
}