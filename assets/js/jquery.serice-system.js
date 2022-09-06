$(window).load(function() {

    /* LHR Slider */

    $('ul.p-service-system__lhr__sp').slick({ //{}を入れる
        // autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../../../assets/img/common/icn_left.svg" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../../../assets/img/common/icn_right.svg" class="slide-arrow prev-arrow"></button>',
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});