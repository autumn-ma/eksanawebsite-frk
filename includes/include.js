// Include system for header and footer
document.addEventListener('DOMContentLoaded', function() {
    // Function to load HTML content
    function loadHTML(selector, url) {
        const element = document.querySelector(selector);
        if (element) {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    element.innerHTML = data;

                    // Re-initialize scripts after loading header
                    if (selector === '#header-placeholder') {
                        initializeHeaderScripts();
                    }
                })
                .catch(error => console.error('Error loading ' + url + ':', error));
        }
    }

    // Load header and footer
    loadHTML('#header-placeholder', 'includes/header.html');
    loadHTML('#footer-placeholder', 'includes/footer.html');
});

// Initialize header-specific scripts (mobile menu, etc.)
function initializeHeaderScripts() {
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.classList.add('scrolled-up');
        } else {
            header.classList.remove('scrolled-up');
        }

        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });
}