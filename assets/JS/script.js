// Hamburger Menu & Sidebar Toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// Open sidebar
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
});

// Close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close sidebar on window resize if it's open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Scroll-based Sticky Navbar with Glass Effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// Scroll-Triggered Animations
// ============================================

// Create a general Intersection Observer for all animated sections
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'animate' class when section comes into view
            entry.target.classList.add('animate');
            // Stop observing after animation triggers (one-time animation)
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15, // Trigger when 15% of section is visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
});

// Function to observe elements with animations
function observeAnimatedElements() {
    // Hero Section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animationPlayState = 'paused';
        animationObserver.observe(heroContent);
    }

    // Who We Are Section
    const whoLeftContent = document.querySelector('.who-left-content');
    const whoRightForm = document.querySelector('.who-right-form');
    if (whoLeftContent) {
        whoLeftContent.style.animationPlayState = 'paused';
        animationObserver.observe(whoLeftContent);
    }
    if (whoRightForm) {
        whoRightForm.style.animationPlayState = 'paused';
        animationObserver.observe(whoRightForm);
    }

    // Who Bottom Section (Feature Boxes)
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach(box => {
        box.style.animationPlayState = 'paused';
        animationObserver.observe(box);
    });

    // What We Do Section (Service Cards)
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        animationObserver.observe(card);
    });

    // Our Promise Section (Promise Wrappers) - Use animation:none approach
    const promiseWrappers = document.querySelectorAll('.promise-wrapper');
    promiseWrappers.forEach(wrapper => {
        wrapper.style.animation = 'none';
    });

    // Create separate observer for promise wrappers
    const promiseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'promise-wrapper 3s ease forwards';
                promiseObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    promiseWrappers.forEach(wrapper => {
        promiseObserver.observe(wrapper);
    });

    // CTA Section
    const ctaContent = document.querySelector('.cta-content');
    const ctaButtonWrapper = document.querySelector('.cta-button-wrapper');
    if (ctaContent) {
        ctaContent.style.animationPlayState = 'paused';
        animationObserver.observe(ctaContent);
    }
    if (ctaButtonWrapper) {
        ctaButtonWrapper.style.animationPlayState = 'paused';
        animationObserver.observe(ctaButtonWrapper);
    }

    // Why Choose Us Section
    const whyCard = document.querySelector('.why-card');
    if (whyCard) {
        whyCard.style.animationPlayState = 'paused';
        animationObserver.observe(whyCard);
    }

    // Contact Us Section
    const contactCards = document.querySelector('.contact-cards');
    if (contactCards) {
        contactCards.style.animationPlayState = 'paused';
        animationObserver.observe(contactCards);
    }
}

// Initialize observers when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAnimatedElements);
} else {
    observeAnimatedElements();
}
