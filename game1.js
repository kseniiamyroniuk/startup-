const AllApples = document.querySelectorAll('.apple');
const AllLevels = document.querySelectorAll('.level');
hideElements(AllApples);
hideElements(AllLevels);

function Game(i) {
    hideElements(AllApples);
    hideElements(AllLevels);
    const level = document.querySelector(`.lvl${i}`);
    level.style.display = 'block';
    const AllApples_I = document.querySelectorAll(`.q${i}`);
    AllApples_I.forEach(element => {
        element.style.display = 'block';
    });
    randomizeApples(); 
}

function hideElements(elements) {
    elements.forEach(element => {
        element.style.display = 'none';
    });
}

function randomizeApples() {
    const garden = document.querySelector('.garden'); // Контейнер
    const apples = document.querySelectorAll('.apple'); // Усі "яблука"

    // Отримуємо розміри контейнера
    const gardenWidth = garden.clientWidth;
    const gardenHeight = garden.clientHeight;

    apples.forEach(apple => {
        // Генеруємо випадкові координати в межах контейнера
        const randomX = Math.random() * (gardenWidth - apple.offsetWidth);
        const randomY = Math.random() * (gardenHeight - apple.offsetHeight);

        // Призначаємо нові координати
        apple.style.left = `${randomX}px`;
        apple.style.top = `${randomY}px`;
    });
}


function launchConfetti() {
    // Запускаємо конфеті з рандомними параметрами
    confetti({
        particleCount: 400, // Кількість частинок
        spread: 100,         // Кут розльоту
        angle: 90,
        origin: { x: 0.5, y: 1.2 }, // Нижня частина екрана
        colors: ['#ff0000', '#00ff00', '#0000ff'], // Червоний, зелений, синій
        shapes: ['circle'], // Форма частинок
        gravity: 0.2, // Слабша гравітація, конфеті буде повільніше падати
    });
}


function rules() {
    alert(
        `Інструкція для батьків:
        1.Відкрити сайт та ознайомте дитину з головним персонажем — помічником-гномиком.
        2.Допомагайте дитині на перших етапах, пояснюючи завдання.
        3.Дозволяйте дитині діяти самостійно, але підтримуйте її і підбадьорюйте.
        4.Хваліть за кожний успіх, навіть найменший.`
    )
}
