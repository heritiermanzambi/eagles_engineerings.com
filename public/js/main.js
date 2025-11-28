document.addEventListener('DOMContentLoaded', () => {
// HERO carousel (images) and quotes
const slides = Array.from(document.querySelectorAll('.hero-slide'));
const quotes = Array.from(document.querySelectorAll('.hero-quote'));
let idx = 0;
if (slides.length && quotes.length) {
function show(i) {
slides.forEach((s, si) => s.classList.toggle('hidden', si !== i));
quotes.forEach((q, qi) => q.classList.toggle('hidden', qi !== i));
}
show(0);
setInterval(() => { idx = (idx + 1) % slides.length; show(idx); }, 4500);
}


// IntersectionObserver pour déclencher .animate-fade-up
const animEls = document.querySelectorAll('[data-animate]');
const io = new IntersectionObserver((entries) => {
entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animate-fade-up'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
animEls.forEach(el => io.observe(el));


// Contact form submit
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
contactForm.addEventListener('submit', async (e) => {
e.preventDefault();
const data = new FormData(contactForm);
const payload = Object.fromEntries(data.entries());
try {
const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
const json = await res.json();
alert(json.message || 'Message envoyé');
contactForm.reset();
} catch (err) {
console.error(err);
alert('Erreur lors de l envoi');
}
});
}
});