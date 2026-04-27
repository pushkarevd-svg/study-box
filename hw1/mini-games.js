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