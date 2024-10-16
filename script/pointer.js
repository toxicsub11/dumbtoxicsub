function setupHoverEffect(containerId, pointerId) {
  const mainImgContainer = document.getElementById(containerId);
  const pointerMain = document.getElementById(pointerId);

  function handleMouseOver() {
    pointerMain.style.opacity = '1';
  }

  function handleMouseOut() {
    pointerMain.style.opacity = '0';
  }

  function applyHoverEffect() {
    // видалення минулих обробників
    mainImgContainer.removeEventListener('mouseover', handleMouseOver);
    mainImgContainer.removeEventListener('mouseout', handleMouseOut);

    // перевірка резолюшну
    if (window.innerWidth >= 992) {
      // додаванная обробників тіки для широких екранів
      mainImgContainer.addEventListener('mouseover', handleMouseOver);
      mainImgContainer.addEventListener('mouseout', handleMouseOut);
    }
  }

  window.addEventListener('resize', applyHoverEffect);
  applyHoverEffect();
}