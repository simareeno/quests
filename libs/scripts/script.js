var progressItemActive = 'progress__card--active';
var questsItemActive = 'quests__item--active';

function goState(number) {
	$('.progress__item' + number).addClass(progressItemActive);
	$('.quests__item--' + number).addClass(questsItemActive);
	$('.quests').addClass('quests--state'  + number);
}

function clearStates() {
	for (var i = 0; i < 5; i++) {
		$('.progress__item' + i).removeClass(progressItemActive);
		$('.quests__item--' + i).removeClass(questsItemActive);
		$('.quests').removeClass('quests--state' + i);
	}
}

$(document).ready(function() {
	$('.quest__cancel--active').on('click', function () {
			var questItem = $(this).closest('.quests__item');
			var firtsItem = $(questItem).find('.quest__first');
			var secondItem = $(questItem).find('.quest__second');

			function activateSecond() {
				$(secondItem).addClass('quest__fake--active')
			}

			$(firtsItem).addClass('quest__fake--rejected');
			setTimeout( activateSecond , 300);

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

	$('.progress__item1, .quests__item--1').on('click', function () {
		clearStates();
		goState(1);
	})

	$('.progress__item2, .quests__item--2').on('click', function () {
		clearStates();
		goState(2);
	})

	$('.progress__item3, .quests__item--3').on('click', function () {
		clearStates();
		goState(3);
	})

	$('.progress__item4, .quests__item--4').on('click', function () {
		clearStates();
		goState(4);
	})

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
