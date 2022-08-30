$(function(){
	/* Tab */
	$( document ).ready(function() {
		$('.c-tabs-about__nav li:last-child').addClass('active');
		$('.c-tabs-about__content').hide();
		$('.c-tabs-about__content:last').show();

		// Click function
		$('.c-tabs-about__nav li').click(function(){
			$('.c-tabs-about__nav li').removeClass('active');
			$(this).addClass('active');
			$('.c-tabs-about__content').hide();

			var activeTab = $(this).find('a').attr('href');
			$(activeTab).fadeIn();
			return false;
			});
	});
});

