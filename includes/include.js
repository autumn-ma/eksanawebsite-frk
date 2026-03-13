// Include system for header and footer - simplified version
console.log('JavaScript file loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired');

    // Determine if we're on a subpage
    const isSubpage = window.location.pathname !== '/' && !window.location.pathname.endsWith('index.html');
    const logoPath = isSubpage ? '../Logos/eksana-logo-text.svg' : 'Logos/eksana-logo-text.svg';
    const homePath = isSubpage ? '../index.html' : 'index.html';

    console.log('Is subpage:', isSubpage);
    console.log('Logo path will be:', logoPath);

    // Create header HTML directly
    const headerHTML = `
        <header class="header">
            <div class="container">
                <div class="header-content">
                    <a href="${homePath}" class="logo">
                        <img src="${logoPath}" alt="Eksana Logo" class="logo-image">
                    </a>
                    <nav class="nav">
                        <div class="nav-links">
                            <a href="${homePath}#product" class="nav-link">Product</a>
                            <a href="${isSubpage ? '../' : ''}how-to-use.html" class="nav-link">How to Use & FAQ</a>
                            <a href="${isSubpage ? '../' : ''}team.html" class="nav-link">Meet The Team</a>
                            <a href="${isSubpage ? '../' : ''}contact.html" class="nav-link">Contact Us</a>
                        </div>
                        <a href="https://app.eksana.org" class="login-btn">Get Started</a>
                    </nav>
                    <button class="mobile-menu-toggle" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    `;

    // Create footer HTML directly
    const footerHTML = `
        <footer class="footer" id="contact">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-main">
                        <div class="footer-brand">
                            <div class="footer-logo">
                               <img src="${logoPath}" alt="Eksana Logo" class="logo-image-footer">
                            </div>
                            <p class="footer-description">
                                Navigating Nepal's legal system with clarity and accessibility. Transforming scattered legal information into actionable insights for lawyers, judges, and researchers.
                            </p>
                            <div class="footer-social">
                                <a href="#" class="social-link">LinkedIn</a>
                                <a href="#" class="social-link">Twitter</a>
                                <a href="#" class="social-link">Facebook</a>
                            </div>
                        </div>
                        <div class="footer-links-group">
                            <div class="footer-section">
                                <h4>Product</h4>
                                <ul class="footer-links">
                                    <li><a href="${homePath}#features">Features</a></li>
                                    <li><a href="${isSubpage ? '../' : ''}how-to-use.html">How To Use & FAQ</a></li>
                                </ul>
                            </div>
                            <div class="footer-section">
                                <h4>Company</h4>
                                <ul class="footer-links">
                                    <li><a href="${isSubpage ? '../' : ''}team.html">Our Team</a></li>
                                </ul>
                            </div>
                            <div class="footer-section">
                                <h4>Legal</h4>
                                <ul class="footer-links">
                                    <li><a href="${isSubpage ? '../' : ''}privacy.html">Privacy Policy</a></li>
                                    <li><a href="${isSubpage ? '../' : ''}terms.html">Terms of Use</a></li>
                                    <li><a href="${isSubpage ? '../' : ''}disclaimer.html">Disclaimer</a></li>
                                    <li><a href="${isSubpage ? '../' : ''}security.html">Security</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-cta">
                        <div class="cta-content">
                            <h3>Ready to transform your legal research?</h3>
                            <p>Join thousands of legal professionals already using Eksana</p>
                        </div>
                        <a href="https://app.eksana.org" class="cta-button">Start Free Trial</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-content">
                        <p>&copy; 2025 Eksana. All rights reserved. Designed for Nepal's legal community.</p>
                        <div class="footer-badges">
                            <span class="popular-badge">🇳🇵 Made in Nepal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;

    // Insert the HTML
    const headerPlaceholder = document.querySelector('#header-placeholder');
    const footerPlaceholder = document.querySelector('#footer-placeholder');

    if (headerPlaceholder) {
        console.log('Inserting header HTML');
        headerPlaceholder.innerHTML = headerHTML;
        initializeHeaderScripts();

        // Debug the logo image after inserting
        setTimeout(() => {
            const logoImg = headerPlaceholder.querySelector('.logo-image');
            if (logoImg) {
                console.log('Logo img element found, src:', logoImg.src);
                console.log('Logo img complete:', logoImg.complete);
                console.log('Logo img naturalWidth:', logoImg.naturalWidth);

                logoImg.onerror = function() {
                    console.error('Logo image failed to load:', this.src);
                };

                logoImg.onload = function() {
                    console.log('Logo image loaded successfully:', this.src);
                };
            } else {
                console.error('Logo img element not found');
            }
        }, 100);
    } else {
        console.error('Header placeholder not found');
    }

    if (footerPlaceholder) {
        console.log('Inserting footer HTML');
        footerPlaceholder.innerHTML = footerHTML;
    } else {
        console.error('Footer placeholder not found');
    }
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