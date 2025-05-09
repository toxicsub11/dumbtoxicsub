
            const sideMenu = document.getElementById('sideMenu');
            const stopElement = document.getElementById('stopElement');

            if (stopElement) {
                window.addEventListener('scroll', function() {
                    const stopPosition = stopElement.getBoundingClientRect().top + window.scrollY;

                    let scrollPosition = window.scrollY;
                    console.error("ало ало отримали мєню");

                    if (scrollPosition >= stopPosition) {
                        console.error("ало ало прячєм");
                        sideMenu.style.display = 'none'

                    } else {
                        console.error("ало ало флєкс");
                        sideMenu.style.display = 'flex'
                        
                    }
                });
            } else {
                console.error("Проєбалі стоп-скролл елємєнт... мда...");
            };