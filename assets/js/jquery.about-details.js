$('.p-about-details__member__slider ul').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    dots: false,
    prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="10.028" height="17.934" viewBox="0 0 10.028 17.934">
            <path id="Path_49" data-name="Path 49" d="M341.6,3657.392l8.437,8.437-8.437,8.437" transform="translate(-341.069 -3656.862)" fill="none" stroke="#1f1f1f" stroke-width="1.5"/>
        </svg>
    </button>`,
    nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" width="9.063" height="16.004" viewBox="0 0 9.063 16.004">
    <path id="Path_49" data-name="Path 49" d="M7.472,14.944,0,7.472,7.472,0" transform="translate(1.061 0.53)" fill="none" stroke="#fff" stroke-width="1.5"/>
  </svg>
  
    </button>`,
    responsive: [{
            breakpoint: 959,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});