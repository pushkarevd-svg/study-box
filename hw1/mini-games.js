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