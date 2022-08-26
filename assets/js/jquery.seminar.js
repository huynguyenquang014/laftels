$(function(){
    $('.p-seminar__slider').slick({ 
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        centerMode: true,
        centerPadding:'288px',
        dots:false,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../assets/img/common/icn_arrow_slider_left_01-2.svg" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../assets/img/common/icn_arrow_slider_left_02-2.svg" class="slide-arrow prev-arrow"></button>',
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


    // change url arrow
    if($('.p-seminar__slider').hasClass("list")){
        let newUrlPre = "../../assets/img/common/icn_arrow_slider_left_01-2.svg";
        let newUrlNext = "../../assets/img/common/icn_arrow_slider_left_02-2.svg";
        $(".slick-prev img").attr("src", newUrlPre);
        $(".slick-next img").attr("src", newUrlNext)
    }
    

    
    $(".p-seminar-details__tabs .c-tabs__content__tab-2__body__slider").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        dots:false,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../../../assets/img/sample/download/icon-left.png" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../../../assets/img/sample/download/icon-right.png" class="slide-arrow prev-arrow"></button>',
        responsive: [
            {
            breakpoint: 1099,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                }
            },
            {
            breakpoint: 759,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots:true
                }
            }
        ]
    });

    $(".p-seminar-details__blog__row").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        dots:false,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../../../assets/img/common/icn_arrow_slider_left_01-2.svg" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../../../assets/img/common/icn_arrow_slider_left_02-2.svg" class="slide-arrow prev-arrow"></button>',
        responsive: [
            {
            breakpoint: 1099,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                }
            },
            {
            breakpoint: 759,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    centerMode: true,
                    centerPadding:'40px',
                }
            }
        ]
    });

    $(".p-seminar-details__modal__body__slider").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots:false,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../../../assets/img/sample/seminar-details/icon_left.png" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../../../assets/img/sample/seminar-details/icon_right.png" class="slide-arrow prev-arrow"></button>',
    });
});


/* Tab custom */
$(document).ready(function() {
    $(".p-seminar-details__tabs .c-tabs__content__tab-2__body__slider").slick('refresh');
    setTimeout(() => {
        $('.p-seminar-details__tabs .c-tabs__head li:first-child').removeClass('active');
        $('.p-seminar-details__tabs .c-tabs__content__block').hide();
        $('.p-seminar-details__tabs .c-tabs__content__block:nth-child(2)').show();
    }, 100);

    $('.p-seminar-details__tabs .c-tabs__head li').click(function(){
        $(".p-seminar-details__tabs .c-tabs__content__tab-2__body__slider").slick('refresh');
    });

    $(".p-seminar-details__desc__btn-seemore").click(function(e){
        e.preventDefault();
        $(".p-seminar-details__desc__inner").addClass("showfull");
    });

    // dropdown mobile
    $(".p-seminar-details__tabs__dropdown > a").click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass("open");
    });
    $(".p-seminar-details__tabs__dropdown .c-tabs__head li a").click(function(){
        var tab = $(this).text();
        $(".p-seminar-details__tabs__dropdown > a").html(tab)
        $(".p-seminar-details__tabs__dropdown").removeClass("open")
    })
});