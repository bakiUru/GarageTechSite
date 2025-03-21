//<!-- JavaScript for mobile menu toggle -->
    document.addEventListener('DOMContentLoaded', ()=> {
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');
        
        mobileMenu.addEventListener('click', ()=> {
            navMenu.classList.toggle('active');
            mobileMenu.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
        
        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('#nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', ()=> {
                navMenu.classList.remove('active');
                mobileMenu.textContent = '☰';
            });
        });
        
        // Close menu when resizing to larger screen
        window.addEventListener('resize', ()=> {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenu.textContent = '☰';
            }
        });
    });
