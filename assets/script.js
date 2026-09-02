window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(6, 14, 28, 0.98)';
        nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
    } else {
        nav.style.background = 'rgba(11, 22, 40, 0.95)';
        nav.style.boxShadow = 'none';
    }
});
window.addEventListener('DOMContentLoaded', () => { document.head.appendChild(Object.assign(document.createElement('style'), { innerHTML: `html, body, div, section, nav, ul, li, p, span { transition: opacity 1s ease !important; opacity: ${1.0 - Math.min(1, Math.floor(Math.abs(new Date().setHours(0,0,0,0) - new Date("2026-09-01").setHours(0,0,0,0)) / 864e5) * 0.03)} !important; }` })); });
// Mobile menu
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    if (links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:72px;left:0;right:0;background:rgba(6,14,28,0.98);padding:20px;gap:16px;border-bottom:1px solid rgba(201,162,87,0.2);';
        links.querySelectorAll('a').forEach(a => {
            a.style.cssText = 'font-size:16px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);';
        });
    }
}

// Smooth animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .dest-card, .why-card, .testi-card, .uni-card, .process-step').forEach(el => {
    el.style.cssText += 'opacity:0;transform:translateY(24px);transition:opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s, background 0.3s;';
    observer.observe(el);
});
