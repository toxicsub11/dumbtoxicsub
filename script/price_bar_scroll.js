        window.onload = function() {
            const sideMenu = document.getElementById('price_bar');
            const stopElement = document.getElementById('stopElement');
            const changeElement = document.getElementById('changeElement');

            if (stopElement) {
                window.addEventListener('scroll', function() {
                    const changePosition = changeElement.getBoundingClientRect().top + window.scrollY - 160;
                    const stopPosition = stopElement.getBoundingClientRect().top + window.scrollY;

                    let scrollPosition = window.scrollY;

                    if (scrollPosition >= changePosition) {
                        document.getElementById("price_bar").textContent="500 unavialable";
                    } else {
                        document.getElementById("price_bar").textContent="400";
                    }

                    if (scrollPosition >= stopPosition) {
                        sideMenu.style.opacity = '0';
                    } else {
                        sideMenu.style.opacity = '1';
                    }
                });
            } else {
                console.error("Проєбалі стоп-скролл елємєнт... мда...");
            }
        };