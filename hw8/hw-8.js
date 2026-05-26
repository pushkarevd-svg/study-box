// Задание 1

// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort((a, b) => b.age - a.age));

// Задание 2

// function filter(array, ruleFunction) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (ruleFunction(array[i])) {
//             result.push(array[i])
//         }
//     }
//     return result;
// }

// function isPositive(num) {
//     return num > 0
// }

// function isMale(person) {
//     return person.gender === 'male';
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people, isMale));

// Задание 3

// let interval = setInterval(() => {
//     console.log(new Date());
// }, 3000);

// setTimeout(() => {
//     clearInterval(interval);
//     console.log('30 секунд прошло');
// }, 30000);

// Задание 4

// function delayForSecond(callback) {
//     setTimeout(callback, 1000)
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'))