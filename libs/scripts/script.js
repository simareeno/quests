$(document).ready(function() {
	$('.quest__cancel--active').on('click', function () {
		$('.quest__flippable').toggleClass('quest--flip');
	})

	$('.play__tooltip-close').on('click', function () {
		$('.tooltip').hide();
	})

	$('.faq__close').click(function () {
		$('.faq').removeClass('faq--active');
		$('.quests').removeClass('quests--faq');
		$('.faq__compact').addClass('faq__compact--active');
	})

	$('.faq__compact').click(function () {
		$('.faq').addClass('faq--active');
		$('.quests').addClass('quests--faq');
		$('.faq__compact').removeClass('faq__compact--active');
	})

	// $('.quests__prize').click(function () {
	// 	if (!$(this).hasClass("quests__item--active")) {
	// 		return false;
	// 	}
	// })

	$('.faq__dot1').on('click', function () {
		$('.faq').removeClass('faq--state2');
		$('.faq').removeClass('faq--state3');
		$('.faq').addClass('faq--state1');
		$('.faq__dot').removeClass('faq__dot--active');
		$(this).addClass('faq__dot--active');
	})

	$('.faq__dot2').on('click', function () {
		$('.faq').removeClass('faq--state1');
		$('.faq').removeClass('faq--state3');
		$('.faq').addClass('faq--state2');
		$('.faq__dot').removeClass('faq__dot--active');
		$(this).addClass('faq__dot--active');
	})

	$('.faq__dot3').on('click', function () {
		$('.faq').removeClass('faq--state1');
		$('.faq').removeClass('faq--state2');
		$('.faq').addClass('faq--state3');
		$('.faq__dot').removeClass('faq__dot--active');
		$(this).addClass('faq__dot--active');
	})

});
