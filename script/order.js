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
        // Очищаємо форму
        document.getElementById('order-form').reset(); // Очищаємо форму

        // Очищаємо кошик
        localStorage.removeItem('cart'); // Видаляємо кошик з localStorage
        console.log("Кошик очищено");



        // Оновлюємо кошик на сторінці
        updateCart();

        console.log("cart upd");

                // Вставляємо порожні значення для прихованих полів

});

const button = document.querySelectorAll('.redirect_button');

button.addEventListener('click', function() {
    console.log("redirect?");
  window.location.replace("https://send.monobank.ua/jar/2he9vdKALw");
});