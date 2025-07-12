// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = 'dark';
        this.themeButton = document.getElementById('theme-toggle');
        this.themeIcon = document.querySelector('.theme-icon');
        this.body = document.body;
        
        this.init();
    }
    
    init() {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
        }
        
        // Apply initial theme
        this.applyTheme();
        
        // Set up event listener
        if (this.themeButton) {
            this.themeButton.addEventListener('click', () => this.toggleTheme());
        }
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
        this.saveTheme();
    }
    
    applyTheme() {
        if (this.currentTheme === 'light') {
            this.body.classList.add('light-theme');
            if (this.themeIcon) {
                this.themeIcon.textContent = '☀️';
            }
        } else {
            this.body.classList.remove('light-theme');
            if (this.themeIcon) {
                this.themeIcon.textContent = '🌙';
            }
        }
    }
    
    saveTheme() {
        localStorage.setItem('theme', this.currentTheme);
    }
}

// Card Animation and Interaction
class CardManager {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        this.cardsContainer = document.querySelector('.cards-container');
        
        this.init();
    }
    
    init() {
        this.setupCardInteractions();
        this.setupHorizontalScroll();
    }
    
    setupCardInteractions() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', this.handleCardHover.bind(this));
            card.addEventListener('mouseleave', this.handleCardLeave.bind(this));
        });
    }
    
    handleCardHover(event) {
        const card = event.currentTarget;
        card.style.transform = 'translateY(-8px) scale(1.02)';
        card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.4)';
    }
    
    handleCardLeave(event) {
        const card = event.currentTarget;
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '';
    }
    
    setupHorizontalScroll() {
        if (this.cardsContainer) {
            // Add smooth scrolling for mouse wheel
            this.cardsContainer.addEventListener('wheel', (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    this.cardsContainer.scrollLeft += e.deltaY;
                }
            });
        }
    }
}

// PDF Section Management
class PDFManager {
    constructor() {
        this.pdfSection = document.getElementById('pdf-section');
        this.init();
    }
    
    init() {
        // PDF section is initially hidden
        // It will be shown when the user clicks the PDF card
    }
    
    showPDFSection() {
        if (this.pdfSection) {
            this.pdfSection.classList.add('active');
            this.pdfSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    hidePDFSection() {
        if (this.pdfSection) {
            this.pdfSection.classList.remove('active');
        }
    }
}

// Navigation Enhancement
class NavigationManager {
    constructor() {
        this.navItems = document.querySelectorAll('.nav-item');
        this.navButtons = document.querySelectorAll('.nav-button');
        
        this.init();
    }
    
    init() {
        this.setupNavigationEffects();
        this.setupKeyboardNavigation();
    }
    
    setupNavigationEffects() {
        // Add ripple effect to navigation items
        this.navItems.forEach(item => {
            item.addEventListener('click', this.createRippleEffect.bind(this));
        });
        
        this.navButtons.forEach(button => {
            button.addEventListener('click', this.createRippleEffect.bind(this));
        });
    }
    
    createRippleEffect(event) {
        const element = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    setupKeyboardNavigation() {
        // Add keyboard navigation support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                // Enhance tab navigation
                this.highlightFocusedElement();
            }
        });
    }
    
    highlightFocusedElement() {
        const focusedElement = document.activeElement;
        if (focusedElement && (focusedElement.classList.contains('nav-item') || 
                              focusedElement.classList.contains('nav-button') ||
                              focusedElement.classList.contains('card-link'))) {
            focusedElement.style.outline = '2px solid var(--link-color)';
            focusedElement.style.outlineOffset = '2px';
        }
    }
}

// Accessibility Enhancement
class AccessibilityManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupReducedMotion();
        this.setupFocusManagement();
        this.setupARIALabels();
    }
    
    setupReducedMotion() {
        // Respect user's motion preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.style.setProperty('--animation-duration', '0.01s');
            
            // Disable animations for users who prefer reduced motion
            const style = document.createElement('style');
            style.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.01s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0.01s !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    setupFocusManagement() {
        // Improve focus visibility
        document.addEventListener('focusin', (e) => {
            e.target.style.outline = '2px solid var(--link-color)';
            e.target.style.outlineOffset = '2px';
        });
        
        document.addEventListener('focusout', (e) => {
            e.target.style.outline = '';
            e.target.style.outlineOffset = '';
        });
    }
    
    setupARIALabels() {
        // Enhance ARIA labels for screen readers
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.setAttribute('role', 'article');
            card.setAttribute('aria-label', `Article ${index + 1}`);
        });
        
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.setAttribute('role', 'link');
        });
    }
}

// Global Functions
function openPDFSection() {
    const pdfManager = new PDFManager();
    pdfManager.showPDFSection();
}

// Performance Optimization
class PerformanceManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupLazyLoading();
        this.setupIntersectionObserver();
    }
    
    setupLazyLoading() {
        // Lazy load images and iframes
        const lazyElements = document.querySelectorAll('img[loading="lazy"], iframe');
        
        if ('IntersectionObserver' in window) {
            const lazyObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        if (element.tagName === 'IFRAME' && !element.src) {
                            element.src = element.dataset.src;
                        }
                        lazyObserver.unobserve(element);
                    }
                });
            });
            
            lazyElements.forEach(element => {
                lazyObserver.observe(element);
            });
        }
    }
    
    setupIntersectionObserver() {
        // Animate elements when they come into view
        const animateElements = document.querySelectorAll('.card, .article-section');
        
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1
            });
            
            animateElements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                animationObserver.observe(element);
            });
        }
    }
}

// Error Handling and Logging
class ErrorManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupErrorHandling();
        this.setupConsoleLog();
    }
    
    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('JavaScript Error:', e.error);
            this.logError(e.error);
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled Promise Rejection:', e.reason);
            this.logError(e.reason);
        });
    }
    
    logError(error) {
        // In a production environment, you might want to send errors to a logging service
        const errorData = {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
        };
        
        // For now, just log to console
        console.log('Error logged:', errorData);
    }
    
    setupConsoleLog() {
        // Add welcome message
        console.log('%c🏛️ Legal Wiki - Personal Reference', 'font-size: 16px; color: #64b5f6; font-weight: bold;');
        console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'color: #b0b0b0;');
        console.log('%cTheme, navigation, and accessibility features loaded successfully', 'color: #81c784;');
    }
}

// Application Initialization
class App {
    constructor() {
        this.themeManager = null;
        this.cardManager = null;
        this.navigationManager = null;
        this.accessibilityManager = null;
        this.performanceManager = null;
        this.errorManager = null;
        
        this.init();
    }
    
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupManagers();
            });
        } else {
            this.setupManagers();
        }
    }
    
    setupManagers() {
        try {
            this.errorManager = new ErrorManager();
            this.themeManager = new ThemeManager();
            this.cardManager = new CardManager();
            this.navigationManager = new NavigationManager();
            this.accessibilityManager = new AccessibilityManager();
            this.performanceManager = new PerformanceManager();
            
            console.log('✅ All managers initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing application:', error);
        }
    }
}

// Start the application
new App();

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        pointer-events: none;
        animation: ripple-animation 0.6s ease-out;
    }
    
    @keyframes ripple-animation {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .nav-item, .nav-button, .card-link {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);
