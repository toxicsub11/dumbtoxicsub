
            const sideMenu = document.getElementById('sideMenu');
            const stopElement = document.getElementById('stopElement');
            console.log("ало ало отримали мєню");

            if (stopElement) {
                window.addEventListener('scroll', function() {
                    const stopPosition = stopElement.getBoundingClientRect().top + window.scrollY;

                    let scrollPosition = window.scrollY;

                    if (scrollPosition >= stopPosition) {
                        sideMenu.style.opacity = '1';
                        sideMenu.style.display = 'none';

                    } else {
                        sideMenu.style.opacity = '1';
                        sideMenu.style.display = 'flex'
                        
                    }
                });
            } else {
                console.error("Проєбалі стоп-скролл елємєнт... мда...");
            };