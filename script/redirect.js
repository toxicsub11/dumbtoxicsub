document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("redirect_button");

  // Перевірка, чи кнопка існує
  if (button) {
    button.addEventListener("click", function() {
      let newWindow; // Глобальна змінна для збереження посилання на нове вікно

      // Відкриваємо нове вікно, якщо воно ще не відкрите або вже було закрите
      if (!newWindow || newWindow.closed) {
        newWindow = window.open("https://send.monobank.ua/jar/71FSADuTwV", "_blank", "noopener noreferrer");
        
        // Зберігаємо інформацію в sessionStorage для зміни URL після повернення
        sessionStorage.setItem("openWindow", "true");
      } else {
        newWindow.focus(); // Перемикаємось на вже відкрите вікно
      }
    });
  } else {
    console.error("Кнопка не знайдена!");
  }

  // Слухач події для виявлення повернення на основну сторінку
  window.addEventListener("focus", function() {
    // Перевірка, чи в sessionStorage є інформація про відкриття вікна
    if (sessionStorage.getItem("openWindow") === "true") {
      // Зміна URL поточного вікна при поверненні
      window.location.href = "https://dumbtoxicsub.xyz/shop/";

      // Видаляємо запис, щоб не змінювати URL знову
      sessionStorage.removeItem("openWindow");
    }
  });
});
