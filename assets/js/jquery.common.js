/* Mobile menu  */
$(function(){
	$('.js-toggle-menu').on('click', function() {
		$(this).toggleClass('active');
	});
});


$(function(){
	/* Sticky sidebar */
	if($(".c-sidebar").length){
		var sidebar = new StickySidebar('.c-sidebar', {
			containerSelector: '.l-container-fluid',
			innerWrapperSelector: 'c-sidebar__inner',
			topSpacing: 86,
			bottomSpacing: 80
		});
	}

	/* Tab */
	// $( document ).ready(function() {
	// 	$('.c-tabs__nav li:first-child').addClass('active');
	// 	$('.c-tabs__content').hide();
	// 	$('.c-tabs__content:first').show();

	// 	// Click function
	// 	$('.c-tabs__nav li').click(function(){
	// 		$('.c-tabs__nav li').removeClass('active');
	// 		$(this).addClass('active');
	// 		$('.c-tabs__content').hide();

	// 		var activeTab = $(this).find('a').attr('href');
	// 		$(activeTab).fadeIn();
	// 		return false;
	// 	});
	// });

});

/* Accordion */
$(document).ready(function() {
    $(".c-collapse__title").click(function() {
        $(this).next('.c-collapse__body').slideToggle();
        $(this).parent('.c-collapse').toggleClass('c-collapse-o');
    });
});

$(document).ready(function() {
	anchorLink(".p-inquiry-list .info-desk__col a", 86)
});

// anchor link in page
function anchorLink(element, spaceToTop){
	$(element).click(function() {
		var idSection = $(this).attr("href");
        $('html, body').animate({
          	scrollTop: $(`${idSection}`).offset().top - spaceToTop
        }, 1000)
    });
}

$(document).ready(function() {
	AOS.init({
		duration: 1000
	});
	$(window).on("scroll", function () {
		AOS.init({
			duration: 1000
		});
	});
});

$(function() { // Dropdown toggle
	$('.c-dropdown__toggle').click(function(e) {
		e.preventDefault();
		$(this).next('.c-dropdown__menu').slideToggle();
	});
	
	$(document).click(function(e) { 
		var target = e.target; 
		if (!$(target).is('.c-dropdown__toggle') && !$(target).parents().is('.c-dropdown__toggle')) 
		//{ $('.dropdown').hide(); }
		{ $('.c-dropdown__menu').slideUp(); }
	});
});