
$(window).load(function() {

    /* Banner Slider */

    $('.list-slider ul').slick({ //{}を入れる
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots:true,
        arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../../../assets/img/market/arrow-left.png" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../../../assets/img/market/arrow-right.png" class="slide-arrow prev-arrow"></button>',
        responsive: [
          {
            breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                }
          },
            {
            breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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