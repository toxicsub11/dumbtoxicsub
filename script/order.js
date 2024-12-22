import { updateCart } from './cart.js';


// Додаємо слухача події для кнопки "Оформити замовлення"
document.getElementById('order-form').addEventListener('submit', function(event) {

event.preventDefault();

        var order = document.getElementById('order_number');
            order.textContent = '№ ' + randomNumber;

        var cart_container = document.getElementById('cart');
            cart_container.style.display = 'none';
        var succes_container = document.getElementById('succes');
            succes_container.style.display = 'block';

    // Запобігаємо відправці форми

    // Затримка для виконання всіх дій
    setTimeout(function() {
        // Очищаємо форму
        document.getElementById('order-form').reset(); // Очищаємо форму

        // Очищаємо кошик
        localStorage.removeItem('cart'); // Видаляємо кошик з localStorage
        console.log("Кошик очищено");



        // Оновлюємо кошик на сторінці
        updateCart();

        console.log("cart upd");

                // Вставляємо порожні значення для прихованих полів

        // Редірект на іншу сторінку
        window.location.replace("https:/dumbtoxicsub.xyz/shop/"); // Замініть на свою адресу
    }, 4000); // Затримка 3 секунди
});