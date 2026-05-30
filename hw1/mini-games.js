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

// Игра 3

function turnOverText() {
    let input = prompt('Введите текст, который нужно перевернуть')

    if (input === null) return;

    alert([...input].reverse().join(''))
}

// Игра 4

const rules = [
    ["камень", "ножницы"],
    ["ножницы", "бумага"],
    ["бумага", "камень"]
];

const gameItems = ["камень", "ножницы", "бумага"]

function rockPaperScissors() {
    let playAgain = true;
    let computerScore = 0;
    let playerScore = 0;

    while (playAgain) {
        let input = prompt('Напиши цифру или введи:\n Камень, ножницы или бумага')

        if (input === null) {
            alert('Игра окончена')
            return
        }

        input = input.toLowerCase().trim();

        let computerChoice = getRandom(gameItems);

        switch (input) {
            case "1":
            case "камень":
                input = gameItems[0];
                break;
            case "2":
            case "ножницы":
                input = gameItems[1];
                break;
            case "3":
            case "бумага":
                input = gameItems[2];
                break;
            default:
                alert('Некорректный ввод');
                continue;
        }

        let playerWin = rules.some(rule =>
            rule[0] === input && rule[1] === computerChoice
        );

        if (playerWin) {
            playerScore++
            playAgain = confirm(`Твоя победа, сыграем ещё раз?\nТвой счёт: ${playerScore}, мой счёт: ${computerScore}`);
        } else if (computerChoice === input) {
            playAgain = confirm(`Ничья, сыграем ещё раз?\nТвой счёт: ${playerScore}, мой счёт: ${computerScore}`)
        } else {
            computerScore++
            playAgain = confirm(`Моя взяла, сыграем ещё раз?\nТвой счёт: ${playerScore}, мой счёт: ${computerScore}`)
        }
    }

    alert('Игра окончена')
}

// Игра 5

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function takeQuiz() {
    let input = confirm('Простая викторина\nОтвечать нужно номером ответа')

    if (!input) {
        alert('Игра окончена')
        return
    }

    let correctAnswers = 0;
    let mistakes = []

    for (let task of quiz) {
        let answer;

        while (true) {
            let userInput = prompt(`${task.question}\n${task.options.join('\n')}`)

            if (userInput === null) {
                alert('Вводить нужно цифру')
                return
            }

            answer = Number(userInput);

            if (!Number.isNaN(answer) && answer >= 1 && answer <= quiz.length) {
                break
            }

            alert('Нужно ввести корректную цифру')
        }

        if (task.correctAnswer === answer) {
            correctAnswers++
        } else {
            mistakes.push(task.question)
        }

    }

    let uncorrectAnswers = quiz.length - correctAnswers;

    if (correctAnswers === quiz.length) {
        alert(`Все ответы верны`)
    } else if (correctAnswers >= 4) {
        alert(`Хороший результат: ${correctAnswers}, кол-во ошибок: ${uncorrectAnswers}`)
    } else {
        alert(`Правильных ответов: ${correctAnswers}, ошибок: ${uncorrectAnswers}`)
    }

    if (mistakes.length > 0) {
        if (confirm('Хочешь узнать где были ошибки?')) {
            alert(`Ошибки были в вопросах:\n${mistakes.join('\n')}`)
        } else {
            alert('Игра окончена')
            return
        }
    }
}

// 6 игра

let randomColorGeneratorGame = document.querySelector('.button-randomColorGenerator');
let containers = document.querySelectorAll('[data-action="color-change"]');

let rgb1 = 0;
let rgb2 = 0;
let rgb3 = 0;

let message = '. Взгляни, как изменился фон сайта'

function randomRgb(rgb) {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0)
}

function getRandomColor() {
    rgb1 = randomRgb(rgb1)
    rgb2 = randomRgb(rgb2)
    rgb3 = randomRgb(rgb3)

    let result = `Твой цвет: rgb(${rgb1}, ${rgb2}, ${rgb3}) ♡`;

    return {
        text: result,
        rgb: `rgb(${rgb1}, ${rgb2}, ${rgb3})`
    }
}

function randomColorGenerator() {
    let input = confirm('Изменить цвет фона? ')

    let result = getRandomColor()

    if (!input) {
        alert('Тогда закончим')
        return
    }

    alert(result.text + message);
    containers.forEach((el) => el.style.backgroundColor = result.rgb)
}

randomColorGeneratorGame.addEventListener('click', () => randomColorGenerator());

const mediaQuery = window.matchMedia('(max-width: 767px)');

function handleScreenChange(e) {
    const link = document.querySelector('.header__link-anchor');

    if (e.matches) {
        link.href = '#guessAnumber'
    } else {
        link.href = '#about'
    }
}

mediaQuery.addEventListener('change', () => handleScreenChange)
handleScreenChange(mediaQuery)