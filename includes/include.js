// Include system for header and footer - simplified version

// Auto-detect base path: GitHub Pages serves from /reponame/, production from /
function getBasePath() {
    if (window.location.hostname.endsWith('eksana.org')) {
        const parts = window.location.pathname.split('/').filter(Boolean);
        return parts.length > 0 ? '/' + parts[0] : '';
    }
    return '';
}
const _BASE = getBasePath();

document.addEventListener('DOMContentLoaded', function() {

    const logoPath = _BASE + '/assets/images/eksana-logo-text.svg';

    // Create header HTML directly
    const headerHTML = `
        <header class="header">
            <div class="container">
                <div class="header-content">
                    <a href="${_BASE}/" class="logo">
                        <img src="${logoPath}" alt="Eksana Logo" class="logo-image">
                    </a>
                    <nav class="nav">
                        <div class="nav-links">
                            <a href="${_BASE}/#product" class="nav-link">Product</a>
                            <a href="${_BASE}/pages/free-tools.html" class="nav-link">Free Tools</a>
                            <a href="${_BASE}/pages/how-to-use.html" class="nav-link">How to Use</a>
                            <a href="${_BASE}/pages/blog.html" class="nav-link">Blog</a>
                            <a href="${_BASE}/pages/team.html" class="nav-link">Meet The Team</a>
                            <a href="${_BASE}/pages/contact.html" class="nav-link">Contact Us</a>
                            <a href="https://app.eksana.org" class="nav-link nav-link-cta">Get Started</a>
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
                                <div class="si-wrap">
                                    <a href="https://www.linkedin.com/company/eksana/" class="si-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <span class="si-bg"></span>
                                        <span class="si-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                        </span>
                                        <span class="si-indicator"></span>
                                        <span class="si-tooltip">LinkedIn<span class="si-tooltip-arrow"></span></span>
                                    </a>
                                    <a href="https://www.facebook.com/share/1DT9chiZpL/?mibextid=wwXIfr" class="si-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                        <span class="si-bg"></span>
                                        <span class="si-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                        </span>
                                        <span class="si-indicator"></span>
                                        <span class="si-tooltip">Facebook<span class="si-tooltip-arrow"></span></span>
                                    </a>
                                    <a href="https://www.instagram.com/eksanalegal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="si-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                        <span class="si-bg"></span>
                                        <span class="si-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                                        </span>
                                        <span class="si-indicator"></span>
                                        <span class="si-tooltip">Instagram<span class="si-tooltip-arrow"></span></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="footer-links-group">
                            <div class="footer-section">
                                <h4>Product</h4>
                                <ul class="footer-links">
                                    <li><a href="${_BASE}/#features">Features</a></li>
                                    <li><a href="${_BASE}/pages/how-to-use.html">How To Use</a></li>
                                    <li><a href="${_BASE}/pages/free-tools.html">Free Tools</a></li>
                                </ul>
                            </div>
                            <div class="footer-section">
                                <h4>Company</h4>
                                <ul class="footer-links">
                                    <li><a href="${_BASE}/pages/team.html">Our Team</a></li>
                                    <li><a href="${_BASE}/pages/blog.html">Blog</a></li>
                                </ul>
                            </div>
                            <div class="footer-section">
                                <h4>Legal</h4>
                                <ul class="footer-links">
                                    <li><a href="${_BASE}/pages/legal/privacy.html">Privacy Policy</a></li>
                                    <li><a href="${_BASE}/pages/legal/terms.html">Terms of Use</a></li>
                                    <li><a href="${_BASE}/pages/legal/disclaimer.html">Disclaimer</a></li>
                                    <li><a href="${_BASE}/pages/legal/security.html">Security</a></li>
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
