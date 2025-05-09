
            const sideMenu = document.getElementById('sideMenu');
            const stopElement = document.getElementById('stopElement');

            if (stopElement) {
                window.addEventListener('scroll', function() {
                    const stopPosition = stopElement.getBoundingClientRect().top + window.scrollY;

                    let scrollPosition = window.scrollY;

                    if (scrollPosition >= stopPosition) {
                        sideMenu.style.opacity = '0';
                    } else {
                        sideMenu.style.opacity = '1';
                    }
                });
            } else {
                console.error("Проєбалі стоп-скролл елємєнт... мда...");
            };