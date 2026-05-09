// Задание 1
// let numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbs.length; i++) {
//     console.log(numbs[i]);
//     if (numbs[i] === 10) {
//         break
//     }
// }

// Задание 2
// let numbs = [1, 5, 4, 10, 0, 3];

// for (let index = 0; index < numbs.length; index++) {
//     const el = numbs[index];
//     if (el === 4) {
//         console.log(`${el}: ${index}`)
//         break;
//     }
// }

// Задание 3
// let numbs = [1, 3, 5, 10, 20];

// console.log(numbs.join(' '));

// Задание 4

// let arr = [];

// for (let i = 0; i < 3; i++) {

//     let arr2 = [];

//     for (let j = 0; j < 3; j++) {
//         arr2.push(1);
//     }

//     arr.push(arr2);
// }

// console.log(arr);

// Задание 5

// let arr = [1, 1, 1];

// for (let j = 0; j < 3; j++) {
//     arr.push(2);
// }

// console.log(arr);

// Задание 6

// let arr = [9, 8, 7, 'a', 6, 5];

// arr.sort();

// arr.pop();

// console.log(arr);

// Задание 7

// const numbs = [9, 8, 7, 6, 5];

// const answer = +prompt("Введите число");

// if (numbs.includes(answer)) {
//     alert("Угадал");
// } else {
//     alert("Не угадал");
// }

// Задание 8

// let str = 'abcdef';
// str = str.split('');
// str.reverse();
// str = str.join('');
// console.log(str);

// Задание 9

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(...arr[i])
// }

// console.log(newArr);

// Задание 10

// let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < numbs.length; i++) {
//     if (numbs[i + 1]) {
//         console.log(numbs[i] + numbs[i + 1]);
//     }
// }

// Задание 11

// const arr = [2, 4, 6];

// function square(arr) {
//     return arr.map(item => item ** 2);
// }

// console.log(square(arr));

// Задание 12

// function getLength(arr) {
//     return arr.map(item => item.length);
// }

// console.log(getLength(['hello', 'stroke']));

// Задание 13

// function negativeValue(array) {
//     return array.filter(item => item < 0);
// }

// console.log(negativeValue([-1, 3, -6, 7]));

// Задание 14

// function randomNumber() {
//     return Math.floor(Math.random() * 10)
// }

// const arr = [];

// for (let i = 0; i < 10; i++) {
//     arr.push(randomNumber());
// }

// console.log(arr);

// const evenArray = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenArray.push(arr[i]);
//     }
// }

// console.log(evenArray);

// Задание 15

function randomNumber() {
    return Math.floor(Math.random() * 10)
}

const arr = [];

for (let i = 0; i < 6; i++) {
    arr.push(randomNumber());
}

console.log(arr);

console.log(arr.reduce((a, b) => a + b) / arr.length);