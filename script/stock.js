document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbx8ScLNExnjfexIbCIMFcrxz3s_HQDP3QTnW33FeXIdlfJj_G41gK8WJroNIvis-Aho/exec?action=getInventory');
        const inventoryData = await response.json();

        if (inventoryData && inventoryData.status === 'success') {
            // Зберігаємо дані у глобальній змінній
            window.inventory = inventoryData.items; // Об'єкт із товарами
            updateButtons(); // Оновлення кнопок "купити/нема"
        } else {
            console.error('Помилка отримання даних про наявність товарів');
        }
    } catch (error) {
        console.error('Помилка запиту до Google Apps Script:', error);
    }
});

function updateButtons() {
    // Оновлення кнопок залежно від наявності товару
    window.inventory.forEach(item => {
        const button = document.querySelector(`button[data-product-name="${item.name}"]`);
        if (item.quantity <= 0 && button) {
            button.innerHTML = '<img src="../../media/shop/ui_unavailable.png" alt="Нема в наявності">';
            button.disabled = true;
        }
    });
}
