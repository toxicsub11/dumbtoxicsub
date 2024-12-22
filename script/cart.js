// Ініціалізація кошика
let cart = JSON.parse(localStorage.getItem('cart')) || [];

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, doc, getDoc, updateDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

//add your credentials from firebase project
const firebaseConfig = {
  apiKey: "AIzaSyBBihP1HA72baqPz4OQZBW_pocZUmNO2PM",
  authDomain: "dumbtoxicsub-d2c87.firebaseapp.com",
  projectId: "dumbtoxicsub-d2c87",
  storageBucket: "dumbtoxicsub-d2c87.firebasestorage.app",
  messagingSenderId: "588920467013",
  appId: "1:588920467013:web:cb8a4abdb83d054e4a3d2c",
  measurementId: "G-0S84QJV07G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

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

export async function addToCartAndToggleElement(productId, productName, productPrice, productImage) {
    try {

console.log("Переданий productId:", productId);

        const productRef = doc(db, 'products', productId); // Отримуємо посилання на документ
        const productSnap = await getDoc(productRef); // Отримуємо дані документа
        const noStock = document.querySelectorAll('.no_stock');

        noStock.forEach(n => n.classList.remove('true'));

        console.log('Отриманий документ з Firestore:', productSnap.data());

        console.log(productId, productName, productPrice, productImage);

        if (productSnap.exists()) {
            const productData = productSnap.data();

            if (productData.stock > 0) {
                // Якщо товар є в наявності, додаємо його в кошик
                cart.push({ id: productId, name: productName, price: productPrice, image: productImage });
                localStorage.setItem('cart', JSON.stringify(cart));

                // Оновлюємо кількість товару в Firestore
                await updateDoc(productRef, {
                    stock: productData.stock - 1
                });

                // Оновлюємо кошик на сторінці
                updateCart();
                updateCartButton();

                // Затримка для анімації
                toggleElement();
                toggleElementCart();
            } else {
                noStock.forEach(n => n.classList.add('true'));
                // Деактивуємо кнопку покупки
                /*const button = document.querySelector(`[data-product-id="${productId}"]`);
                button.disabled = true;
                button.querySelector('img').src = 'path/to/out-of-stock-image.png';*/
            }
        } else {
            console.error('Документ не знайдено');
        }
    } catch (error) {
        console.error('Помилка при додаванні в кошик:', error);
    }
}

async function removeFromCart(index) {
    const item = cart[index]; // Отримуємо товар із кошика
    const productRef = doc(db, "products", item.id); // Посилання на документ продукту у Firestore

    try {
        // Отримуємо дані продукту з Firestore
        const docSnap = await getDoc(productRef);

        if (docSnap.exists()) {
            const productData = docSnap.data();

            // Оновлюємо поле stock (збільшуємо кількість на складі)
            await updateDoc(productRef, {
                stock: productData.stock + 1
            });
        } else {
            console.error("Документ не знайдено!");
        }
    } catch (error) {
        console.error("Помилка під час оновлення кількості товару:", error);
    }

    // Видаляємо товар із кошика
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Оновлюємо відображення кошика
    updateCart();
    updateCartButton();
}

export function updateCart() {
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

const orderForm = document.getElementById('order-form');

if (orderForm) {

orderForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Prepare the data from the cart
    const productNameField = document.getElementById('product_name');
    const productPriceField = document.getElementById('product_price');

    let totalPrice = 0;
    const productNames = [];
    cart.forEach(item => {
        productNames.push(item.name);
        totalPrice += item.price;
    });

    // Set values in the hidden fields
    productNameField.value = productNames.join(', '); // Join product names with a comma
    productPriceField.value = totalPrice; // Total price

    // Prepare the data to send to Google Apps Script
    const data = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        address: document.getElementById('address').value,
        contact: document.getElementById('contact').value,
        product_name: productNames.join(', '),
        product_price: totalPrice,
        number: document.getElementById('number').value // Random order number
    };

    const url = "https://script.google.com/macros/s/AKfycbyI91rhOibz6qu-1zg0jCcsw3k8a4r26j2jRc8r2qMprLVApcYAxoGTXT-pdKUslhsK/exec";

    // Send the POST request to Google Apps Script
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString()
    })
    .then(response => response.json())
    .then(result => {
        console.log("Successfully sent data:", result);
        // Handle success
        var order = document.getElementById('order_number');
        order.textContent = '№ ' + data.number; // Show the order number

        // Hide cart and show success
        document.getElementById('cart').style.display = 'none';
        document.getElementById('succes').style.display = 'block';

        // Clear the cart and reset the form
        localStorage.removeItem('cart');
        document.getElementById('order-form').reset();

        // Update the cart on the page
        updateCart();
    })
    .catch(error => {
        console.error("Error sending data:", error);
    });
});

} else {
    console.log('форми няма');
}