window.onload = function() {
    const sideMenu = document.getElementById('price_bar');
    const stopElement = document.getElementById('stopElement');
    const changeElement = document.getElementById('changeElement');

    if (stopElement && changeElement) {
        window.addEventListener('scroll', function() {
            const viewportHeight = window.innerHeight; // Висота екрану
            const changePosition = changeElement.getBoundingClientRect().top + window.scrollY - viewportHeight / 3; // Центр екрану
            const stopPosition = stopElement.getBoundingClientRect().top + window.scrollY;

            let scrollPosition = window.scrollY;

            // Змінюємо текст price_bar, якщо changeElement в центрі екрану
            if (scrollPosition >= changePosition) {
                sideMenu.textContent = "500 unavialable";
            } else {
                sideMenu.textContent = "400";
            }

            // Приховуємо price_bar, якщо дійшли до stopElement
            if (scrollPosition >= stopPosition) {
                sideMenu.style.opacity = '0';
            } else {
                sideMenu.style.opacity = '1';
            }
        });
    } else {
        console.error("Проєбалі stopElement або changeElement... мда...");
    }
};
