
$(window).load(function() {

    /* Casestudy Slider */

    $('.p-solution__block-text__inner__slider__block ul').slick({ //{}を入れる
        autoplay: true,
        slidesToShow: 1,
        dots:false,
        arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="../../../../assets/img/common/icn_arrow_slider_left_01a.svg" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="../../../../assets/img/common/icn_arrow_slider_left_02a.svg" class="slide-arrow prev-arrow"></button>',
        responsive: [
          {
            breakpoint: 1350,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: false,
                }
          },
            {
            breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            },
            {
            breakpoint: 480,
                settings: {
                slidesToShow: 1,
                dots: false,
                arrows: true,
            }
          }
        ]
    });

    $('.p-manufacturing__head__slider ul').slick({ //{}を入れる
        autoplay: true,
        slidesToShow: 1,
        dots:true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1350,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
          },
            {
            breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
            breakpoint: 480,
                settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
          }
        ]
    });

});

$(document).ready(function() {
    $(".step-collapse__title").click(function() {
        $(this).next('.step-collapse__body').slideToggle();
        $(this).parent('.step-collapse').toggleClass('step-collapse-o');
    });
});

$(document).ready(function() {
    $(".c-checkbox-mb__collapse__title").click(function() {
        $(this).next('.c-checkbox-mb__collapse__body').slideToggle();
        $(this).parent('.c-checkbox-mb__collapse').toggleClass('c-checkbox-mb__collapse-o');
    });

    //scroll section
    $('.p-solution__block-text__inner .list li a.security').click(function() {
        $('html, body').animate({
          scrollTop: $("#p-solution__security").offset().top - 86
        }, 1000)
    });

    $('.p-solution__block-text__inner .list li a.medical').click(function() {
        $('html, body').animate({
          scrollTop: $("#p-solution__medical").offset().top - 86
        }, 1000)
    });

    $('.p-solution__block-text__inner .list li a.school').click(function() {
        $('html, body').animate({
          scrollTop: $("#p-solution__school").offset().top - 86
        }, 1000)
    });

    $('.p-solution__block-text__inner .list li a.server').click(function() {
        $('html, body').animate({
          scrollTop: $("#p-solution__server").offset().top - 86
        }, 1000)
    });


    //open modal
    $(".js-open-img-modal").click(function(){
        $(this).addClass("open")
    })

    //close modal
    $(".js-open-img-modal + .modal .close-modal").click(function(){
        $(".js-open-img-modal").removeClass("open")
    })

    //tab
    // Show the first tab and hide the rest
    $('.p-solution__utm__inner__list li:first-child').addClass('active');
    $('.p-solution__utm__inner__content .tab-content').hide();
    $('.p-solution__utm__inner__content .tab-content:first').show();

    // Click function
    $('.p-solution__utm__inner__list li').click(function(){
        $('.p-solution__utm__inner__list li').removeClass('active');
        $(this).addClass('active');
        $('.p-solution__utm__inner__content .tab-content').hide();
        
        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
    
});


