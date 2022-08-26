$(function(){
    $('.p-support__case-study__list ul').slick({ //{}を入れる
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        centerPadding:'180px',
        dots:true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../assets/img/common/icn_arrow_slider_left_01-2.svg" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../assets/img/common/icn_arrow_slider_left_02-2.svg" class="slide-arrow prev-arrow"></button>',
        responsive: [
        {
            breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true,
                    centerPadding:'100px',
                }
        },
            {
            breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    centerPadding:'100px',
                }
            },
            {
            breakpoint: 480,
                settings: {
                slidesToShow: 1,
                dots: true,
                arrows: true,
                centerPadding:'70px',
            }
        }
        ]
    });
});