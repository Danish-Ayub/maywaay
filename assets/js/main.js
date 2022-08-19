$(document).ready(function () {
    const swiper = new Swiper('.theme-simple-slider', {
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    
    $('#nav_toggle').click(function(){
        $('.sidebar-menu').addClass('active');
        $('.sidebar-backdrop').addClass('active');
    });
    $('.sidebar-close, .sidebar-links, .call-us').click(function(){
        $('.sidebar-menu').removeClass('active');
        $('.sidebar-backdrop').removeClass('active');
    });
});