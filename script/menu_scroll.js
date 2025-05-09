
            const sideMenu = document.getElementById('sideMenu');
            const stopElement = document.getElementById('stopElement');
            console.log("ало ало отримали мєню");

            if (stopElement) {
                window.addEventListener('scroll', function() {
                    const stopPosition = stopElement.getBoundingClientRect().top + window.scrollY;

                    let scrollPosition = window.scrollY;

                    if (scrollPosition >= stopPosition) {
                        sideMenu.style.opacity = '0';
setTimeout(() => { sideMenu.style.display = 'none'; }, 500);

                    } else {
                        sideMenu.style.display = 'block'
                        sideMenu.style.opacity = '1';

                        
                    }
                });
            } else {
                console.error("Проєбалі стоп-скролл елємєнт... мда...");
            };