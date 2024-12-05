        // Ініціалізація кошика
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Оновлення кошика
        /*function updateCart() {
            const cartItemsList = document.getElementById('cart-items');
            cartItemsList.innerHTML = ''; // очищаємо список
            let totalPrice = 0;

            cart.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - ${item.price} грн`;
                cartItemsList.appendChild(li);
                totalPrice += item.price;
            });

            document.getElementById('total-price').textContent = totalPrice;
        }*/

        // Плавне з'явлення і зникнення елемента
        function toggleElement() {
            const element = document.getElementById("cart_add");

                element.classList.remove("hidden");
                element.classList.add("visible");

                // Через 0.5 секунди, сховати елемент
                setTimeout(() => {
                    element.classList.remove("visible");
                    element.classList.add("hidden");
                }, 500); // Затримка 0.5 секунди (500 мс)

            console.log("yeah");
        }

        // Функція для додавання товару в кошик і виконання анімації
        function addToCartAndToggleElement(productName, productPrice) {
            // Додаємо товар в кошик
            cart.push({ name: productName, price: productPrice });
            localStorage.setItem('cart', JSON.stringify(cart));

            /*// Оновлюємо кошик
            updateCart();*/

            // Виконуємо анімацію з'явлення і зникнення елемента
            toggleElement();
        }

        /*// Оформлення замовлення
        function checkout() {
            const form = document.createElement('form');
            form.action = 'YOUR_GOOGLE_SCRIPT_URL';  // Заміни на свою URL Google Script
            form.method = 'POST';

            // Додавання даних про кошик до форми
            const cartInput = document.createElement('input');
            cartInput.type = 'hidden';
            cartInput.name = 'cart';
            cartInput.value = JSON.stringify(cart);
            form.appendChild(cartInput);

            // Створення основних полів
            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.name = 'name';
            nameInput.value = 'Ваше ім\'я';  // Можна динамічно отримати дані
            form.appendChild(nameInput);

            document.body.appendChild(form);
            form.submit();
        }

        // Відображаємо кошик при завантаженні сторінки
        updateCart();/*