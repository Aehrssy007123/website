// Fade in elements on scroll
const faders = document.querySelectorAll('.fade-up, .fade-up-delay, .fade-up-delay2');
const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Simple form alert
const form = document.querySelector('form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Thank you! Your message has been sent.');
        form.reset();
    });
}
