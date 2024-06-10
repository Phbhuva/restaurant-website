document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }
    });
});

var swiper = new Swiper(".mySwiper", {});

var swiper = new Swiper(".testimonial-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});