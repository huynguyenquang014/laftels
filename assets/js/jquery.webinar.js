$(function(){
    $('.p-webinar__slider').slick({ 
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        centerMode: true,
        centerPadding:'288px',
        dots:false,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../../assets/img/common/icn_arrow_slider_left_01-2.svg" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../../assets/img/common/icn_arrow_slider_left_02-2.svg" class="slide-arrow prev-arrow"></button>',
        responsive: [
        {
            breakpoint: 1350,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    centerPadding:'100px',
                }
        },
            {
            breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    centerPadding:'100px',
                }
            },
            {
            breakpoint: 759,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    centerPadding:'0px',
                }
            }
        ]
    });
});