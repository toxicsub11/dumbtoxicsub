// Функция для проверки ширины экрана и управления видимостью контейнера
function manageTextContainer() {
  const contactTextContainer = document.querySelector('.contact_text_container');

  if (window.innerWidth > 992) {
    // Показываем контейнер при ширине больше 994px
    contactTextContainer.style.display = 'flex';

    // Добавляем обработчики событий только при ширине экрана больше 994px
    setupHoverEffects();
  } else {
    // Убираем контейнер при ширине меньше 994px
    contactTextContainer.style.display = 'none';
  }
}

// Функция для добавления обработчиков событий на иконки
function setupHoverEffects() {
  const contactTextContainer = document.querySelector('.contact_text');

  // Иконка inst
  const instIcon = document.getElementById('contact_ico_link_img_inst');

  // Иконка tel
  const telIcon = document.getElementById('contact_ico_link_img_tel');

  // Иконка tg
  const tgIcon = document.getElementById('contact_ico_link_img_tg');

  // Иконка mail
  const mailIcon = document.getElementById('contact_ico_link_img_mail');

  contactTextContainer.style.backgroundImage = "url('../media/main/contact/text/contact.png')";
  contactTextContainer.style.backgroundSize = "62.6%";


  // inst
  instIcon.addEventListener('mouseover', function() {
    contactTextContainer.style.backgroundImage = "url('../media/main/contact/text/inst.png')";
    contactTextContainer.style.backgroundSize = "52%";
  });

  // tel
  telIcon.addEventListener('mouseover', function() {
    contactTextContainer.style.backgroundImage = "url('../media/main/contact/text/tel.png')";
    contactTextContainer.style.backgroundSize = "59%";
  });

  // tg
  tgIcon.addEventListener('mouseover', function() {
    contactTextContainer.style.backgroundImage = "url('../media/main/contact/text/tg.png')";
    contactTextContainer.style.backgroundSize = "38%";
  });

  // mail
  mailIcon.addEventListener('mouseover', function() {
    contactTextContainer.style.backgroundImage = "url('../media/main/contact/text/mail.png')";
    contactTextContainer.style.backgroundSize = "100%";
  });

  // Сброс фона на mouseout
  [instIcon, telIcon, tgIcon, mailIcon].forEach(icon => {
    icon.addEventListener('mouseout', function() {
      contactTextContainer.style.backgroundImage = "url('../media/main/contact/text/contact.png')";
      contactTextContainer.style.backgroundSize = "62.6%";
    });
  });
}

manageTextContainer();

// Перезапуск функции при изменении размера окна
window.onresize = manageTextContainer;
