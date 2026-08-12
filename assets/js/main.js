// Agathe Primault — interactions légères, vanilla JS, sans dépendances.

// Menu mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => navMenu.classList.toggle('active'));
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
}

// Effet de fond au scroll pour le header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (!header) return;
    if (window.scrollY > 80) {
        header.style.background = 'rgba(255, 255, 255, 0.96)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--background)';
        header.style.backdropFilter = 'none';
    }
});

// Défilement doux pour les ancres internes (page d'accueil)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            window.scrollTo({ top: target.offsetTop - headerHeight, behavior: 'smooth' });
        }
    });
});

// État du bouton d'envoi du formulaire de contact
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function () {
        const submitBtn = this.querySelector('.submit-btn');
        if (submitBtn) { submitBtn.textContent = 'Envoi en cours…'; submitBtn.disabled = true; }
    });
}

// Révélation douce des cartes au scroll (amélioration progressive : sans JS, tout reste simplement visible)
const revealTargets = document.querySelectorAll('.card, .testimonial-card, .step, .commitment-item, .trust-item, .door-card, .myth-item');
if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = 'opacity .5s ease, transform .5s ease';
        observer.observe(el);
    });
}
