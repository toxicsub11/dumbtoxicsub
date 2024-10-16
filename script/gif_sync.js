function gifSync() {
    const gif1 = document.getElementById('kylym_bio_posters_img_1');
    const gif2 = document.getElementById('kylym_bio_posters_img_2');

    // Перезапуск обеих анимаций
    gif1.src = gif1.src;
    gif2.src = gif2.src;
};

// Задержка перед перезапуском GIF-анимаций
setTimeout(function() {
    gifSync();
}, 1000); // Задержка в 1 секунду

