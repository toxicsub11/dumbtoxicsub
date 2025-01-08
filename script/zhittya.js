import { addToCartAndToggleElement } from './cart.js';

console.log(typeof addToCartAndToggleElement);

document.addEventListener('DOMContentLoaded', () => {
    const variants = document.querySelectorAll('.variant');
    const default_variant = document.getElementById('default_selected');
    const mainImage = document.getElementById('main-product-image');
    let selectedVariant = null; // Спочатку варіант не вибраний


    // Вибір варіанту
    variants.forEach(variant => {
        variant.addEventListener('click', () => {
            // Знімаємо виділення з усіх варіантів
            variants.forEach(v => v.classList.remove('selected'));

            // Додаємо виділення до обраного варіанту
            variant.classList.add('selected');

            // Оновлюємо вибраний варіант
            selectedVariant = {
                name: variant.dataset.name,
                image: variant.dataset.image
            };

            // Оновлюємо головне зображення
            mainImage.src = selectedVariant.image;

            console.log('Вибраний варіант:', selectedVariant);
        });
    });


    // Обробник кнопки "Купити"
    const button = document.querySelector('.cart_button');

console.log(button); // Перевірте, чи знаходиться кнопка
if (!button) {
    console.error('Кнопку не знайдено!');
} else {
    console.log('Кнопка знайдена:', button);
}


const buttons = document.querySelectorAll('.cart_button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {

if (selectedVariant && selectedVariant.name && selectedVariant.image) {

        console.log('Button clicked:', event.target);
        console.log('Button data-product-name:', event.target.dataset.productName);        

        if (selectedVariant && selectedVariant.name && selectedVariant.image) {
            name = selectedVariant.name;
            image = selectedVariant.image;
        }

        console.log('Додаємо в кошик:', { name, image });
        addToCartAndToggleElement('плівка', name, 50, image);
    } else {
        console.log('варіант не обрано, піздєц :)');
    }
    });
});


});


