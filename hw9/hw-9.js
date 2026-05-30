// Задание 1

const title1 = document.querySelector('#title1');
const toggleBtn = document.querySelector('#toggleBtn');

toggleBtn.addEventListener('click', () => {
    if (title1.style.display === 'none') {
        title1.style.display = 'block';
        toggleBtn.textContent = 'Скрыть';
    } else {
        title1.style.display = 'none';
        toggleBtn.textContent = 'Показать';
    }
});

// Задание 2

const paragraph1 = document.querySelector('#paragraph1');
const colorBtn = document.querySelector('#colorBtn');

colorBtn.addEventListener('click', () => {
    paragraph1.style.color = 'blue';
});

// Задание 3

const title2 = document.querySelector('#title2');
const textBtn = document.querySelector('#textBtn');

textBtn.addEventListener('click', () => {
    title2.textContent = 'Привет, мир!';
});

// Задание 4

const descriptions = document.querySelectorAll('.description');

descriptions.forEach(item => {
    item.textContent = 'Измененный текст';
});

// Задание 5

const descriptionsTask5 = document.querySelectorAll('.description-task5');

descriptionsTask5.forEach(item => {
    item.textContent = 'Новый текст';
});

// Задание 6

const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';

    document.body.appendChild(newParagraph);
});

// Задание 7

const removeBtn = document.querySelector('#removeBtn');

removeBtn.addEventListener('click', () => {
    const firstDescription = document.querySelector('.remove-description');

    if (firstDescription) {
        firstDescription.remove();
    }
});