$(document).ready(function () {
	/**
	 * Slider in "quotes" section
	 */
	$('.quotes__slider').slick({
		autoplay: true,
		dots: true,
		arrows: false
	});

	/**
	 * Slider in header
	 */
	$('.header__slider').slick({
		autoplay: true,
		dots: true,
		arrows: true
	});

});