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
                id: variant.dataset.id,
                image: variant.dataset.image
            };

            // Оновлюємо головне зображення
            mainImage.src = selectedVariant.image;

            console.log('Обраний варіант:', selectedVariant);
        });
    });


    // Обробник кнопки "Купити"
    const button = document.querySelector('.cart_button');

console.log(button); // Перевірте, чи знаходиться кнопка
if (!button) {
    console.error('Кнопку не знайдено!');
}


const buttons = document.querySelectorAll('.cart_button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {

if (selectedVariant && selectedVariant.name && selectedVariant.image && selectedVariant.id) {

        console.log('Button clicked:', event.target);
        console.log('Button data-product-name:', event.target.dataset.productName);
        
        let name = 'Цианотипія (Пошукова операція)';
        let image = '../../media/shop/content/routine.jpg';
        let identify = "циан_Пошукова"

        if (selectedVariant && selectedVariant.name && selectedVariant.image && selectedVariant.id) {
            name = selectedVariant.name;
            identify = selectedVariant.id;
            image = selectedVariant.image;
        } else {
        }

        console.log('Додаємо в кошик:', { name, image });
        addToCartAndToggleElement(identify, name, 50, image); 
    } else {
        console.log('варіант не обрано, піздєц :)');
    }

    }); 
});


});


