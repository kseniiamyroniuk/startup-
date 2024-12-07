function Game(i) {
    const AllApples = document.querySelectorAll('.apple');
    AllApples.forEach(element => {
        element.style.display = 'none';
    });
    const AllApples_I = document.querySelectorAll(`.quest${i}`);
    AllApples_I.forEach(element => {
        element.style.display = 'block';
    });
    
};
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

Game(2);
randomizeApples();