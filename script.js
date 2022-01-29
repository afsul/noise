$(".owl-carousel").owlCarousel({
    items: 4,
    nav: true,
    loop: true,
    responsive: {
        320: {
            items: 1,
            dots: false
        },
        436: {
            items: 2,
            dots: false
        },
        768: {
            items: 3,
            dots: false
        },
        1000: {
            items: 4,
            dots: false
        },
        1366: {
            items: 4,
            dots: true
        }
    }

})