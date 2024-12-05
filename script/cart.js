// Ініціалізація кошика
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function toggleElement() {
    const element = document.getElementById("cart_add");

    element.classList.remove("hidden");
    element.classList.add("visible");

    // Через 0.5 секунди, сховати елемент
    setTimeout(() => {
        element.classList.remove("visible");
        element.classList.add("hidden");
    }, 500); // Затримка 0.5 секунди (500 мс)

    console.log("Cart_add_el");
}

function toggleElementCart() {
    const element = document.getElementById("cart_add_cart");

    element.classList.remove("hidden");
    element.classList.add("visible");

    // Через 0.5 секунди, сховати елемент
    setTimeout(() => {
        element.classList.remove("visible");
        element.classList.add("hidden");
    }, 500); // Затримка 0.5 секунди (500 мс)

    console.log("Cart_add_el");
}

function addToCartAndToggleElement(productName, productPrice, productImage) {
    // Додаємо товар в кошик
    cart.push({ name: productName, price: productPrice, image: productImage });
    localStorage.setItem('cart', JSON.stringify(cart));

    // Оновлюємо кошик
    updateCart();

    // Оновлюємо текст кнопки "Кошик"
    updateCartButton();

    // Виконуємо анімацію з'явлення і зникнення елемента
    toggleElement();
    toggleElementCart();

    console.log(productName, productPrice);
}

function removeFromCart(index) {
    // Видаляємо товар із масиву кошика
    cart.splice(index, 1);

    // Оновлюємо localStorage після видалення товару
    localStorage.setItem('cart', JSON.stringify(cart));

    // Оновлюємо кошик після видалення
    updateCart();

    // Оновлюємо кнопку кошика
    updateCartButton();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // очищаємо список
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'cart-item';

        // Додаємо зображення
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.className = 'cart-item-image';

        // Додаємо кнопку для видалення товару
        const removeButton = document.createElement('span');
        removeButton.className = 'remove-item';
        removeButton.textContent = '×'; // Це буде хрестик
        removeButton.style.cursor = 'pointer';
        
        // Перевіряємо, чи елемент додається
        console.log("Adding remove button: ", removeButton);

        // Додаємо функцію для видалення товару з кошика
        removeButton.addEventListener('click', () => {
            removeFromCart(index); // Викликаємо функцію для видалення товару
        });

        // Додаємо інформацію про товар
        const info = document.createElement('p');
        info.textContent = `${item.name} - ${item.price} грн`;

        // Додаємо все в div
        div.appendChild(img);
        div.appendChild(removeButton); // Додаємо хрестик
        div.appendChild(info);

        // Додаємо div до списку
        cartItemsList.appendChild(div);

        // Оновлюємо загальну ціну
        totalPrice += item.price;
    });

    // Оновлюємо загальну суму
    const totalPriceElement = document.getElementById('total-price');
    if (totalPriceElement) {
        totalPriceElement.textContent = `Сума: ${totalPrice} грн`;
    } else {
        console.error("Елемент з id 'total-price' не знайдено.");
    }

    console.log("Cart updated");
}

// Функція для оновлення тексту кнопки "Кошик"
function updateCartButton() {
    const cartButton = document.querySelector('.side_menu_text a'); // Знаходимо посилання "Кошик"
    const cartCount = cart.length; // Кількість товарів у кошику
    cartButton.textContent = `Кошик (${cartCount})`;
    console.log("Cart button updated:", cartCount);
}

// Викликаємо updateCartButton при завантаженні сторінки для синхронізації з localStorage
document.addEventListener('DOMContentLoaded', updateCartButton);
document.addEventListener('DOMContentLoaded', updateCart);