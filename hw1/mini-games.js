// Игра 1
function guessNumber() {
    let input = prompt('Я загадал случайное число от 1 до 100, попробуй угадать');

    if (input === null || Number.isNaN(+input)) {
        alert('Игра окончена');
        return;
    }

    let question = +input;
    let number = Math.trunc(Math.random() * 100) + 1;
    console.log('Загадано:', number);

    do {
        if (number > question) {
            input = prompt('Нужно число больше');
            if (input === null || Number.isNaN(+input)) {
                alert('Игра окончена');
                return;
            }
            question = +input;
        } else if (number < question) {
            input = prompt('Нужно число меньше');
            if (input === null || Number.isNaN(+input)) {
                alert('Игра окончена');
                return;
            }
            question = +input;
        }
    } while (number != question);

    alert('Правильно');
    console.log('Угадано число');
}

// Игра 2

const numbersMin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersMax = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const signs = ['-', '+', '/', '*'];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function doArithmeticTasks() {
    let playAgain = true;

    while (playAgain) {
        let randomNumberMin = getRandom(numbersMin)
        let randomNumberMax = getRandom(numbersMax)
        let randomSign = getRandom(signs)

        let biggest = Math.max(randomNumberMin, randomNumberMax);
        let smallest = Math.min(randomNumberMin, randomNumberMax);

        if (randomSign === '/') {
            do {
                randomNumberMin = getRandom(numbersMin)
                randomNumberMax = getRandom(numbersMax)

                biggest = Math.max(randomNumberMin, randomNumberMax);
                smallest = Math.min(randomNumberMin, randomNumberMax);
            } while (smallest === 0 || biggest % smallest !== 0)
        }

        if (randomSign === '*') {
            do {
                randomNumberMin = getRandom(numbersMin)
                randomNumberMax = getRandom(numbersMax)

                biggest = Math.max(randomNumberMin, randomNumberMax);
                smallest = Math.min(randomNumberMin, randomNumberMax);

            } while (biggest * smallest > 100);
        }

        let result;

        switch (randomSign) {
            case '+':
                result = biggest + smallest;
                break
            case '-':
                result = biggest - smallest;
                break
            case '/':
                result = biggest / smallest;
                break
            case '*':
                result = biggest * smallest;
                break
        }

        let input = prompt(`Задача: ${biggest} ${randomSign} ${smallest}`);
        let question = +input;

        if (question === result) {
            alert('Верно');
        } else if (input === null || Number.isNaN(+input)) {
            alert('Игра окончена')
            return
        } else {
            alert('Неверно')
        }

        playAgain = confirm('Продолжить?')

    }
    alert('Игра окончена')
}
