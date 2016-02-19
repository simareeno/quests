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

});
