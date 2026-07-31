// Smooth scroll effect
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Glow effect on scroll
window.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50){
        navbar.style.background = 'rgba(6,54,26,0.95)';
        navbar.style.boxShadow = '0 0 20px rgba(255,215,0,0.3)';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.4)';
        navbar.style.boxShadow = 'none';
    }
});

// Card animation on load
const cards = document.querySelectorAll('.glow-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.animation = 'fadeUp 1s ease forwards';
        }
    });
});
cards.forEach(card => observer.observe(card));
