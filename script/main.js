//visual-wrapper
const visualSlider = new Swiper('.visual-slide', {
    loop: true,
    effect: 'fade',
    allowTouchMove: false,
    autoplay: { delay: 3000 }
})

//sec03
const sec03Slider = new Swiper('.sec03-slide', {
    allowTouchMove: false,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
})

//health/category-slide-wrapper
const categorySlide = new Swiper('.category-slide', {
    loop: true,
    effect: 'fade',
    allowTouchMove: false,
    autoplay: { delay: 3000 },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }
})

