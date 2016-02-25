$(document).ready(function() {
	$('.quest__cancel--active').on('click', function () {
		$('.quest__first').addClass('quest__fake--rejected');
		setTimeout( "$('.quest__second').addClass('quest__fake--active')" , 300);
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

	$('.quests__prize').click(function () {
		if (!$(this).hasClass("quests__item--active")) {
			return false;
		}
	})

	$('.quests__progress-tooltip-close').click(function () {
		$('.quests__progress-tooltip').addClass('quests__progress-tooltip--hidden');
	})

});
