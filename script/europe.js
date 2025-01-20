import { addToCartAndToggleElement } from './cart.js';

console.log(typeof addToCartAndToggleElement);

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.cart_button');
    const buttons = document.querySelectorAll('.cart_button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log('Button clicked:', event.target);
            addToCartAndToggleElement('європа', 'Сорочка "Мале Життя"', 999, '../../media/shop/content/shirt.jpg');
    });
});
});