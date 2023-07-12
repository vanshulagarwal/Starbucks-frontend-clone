let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}



const faders = document.querySelectorAll('.fade-in');

const appearOptions={
    threshold:0,
    rootMargin:"0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
    (function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
        appearOptions);

faders.forEach(fader=>{
    appearOnScroll.observe(fader);
});

const sliders=document.querySelectorAll('.slide-in');

sliders.forEach(slider=>{
    appearOnScroll.observe(slider);
})