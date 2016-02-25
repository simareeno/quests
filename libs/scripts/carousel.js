var progressItemActive = 'progress__card--active';
var questsItemActive = 'quests__item--active';
var forward = 'quests__item--forward';
var behind = 'quests__item--behind';

function goState(number) {
	var next = number + 1;
	$('.progress__item' + number).addClass(progressItemActive);
	$('.quests__item--' + number).addClass(questsItemActive);
	$('.quests__item--' + next).addClass(questsItemActive);
	$('.quests').addClass('quests--state'  + number);

	for (var i = next; i < 5; i++) {
		$('.quests__item--' + i).addClass(forward);
	}

	for (var i = 0; i < number; i++) {
		console.log(i);
		$('.quests__item--' + i).addClass(behind);
	}
}

function clearStates() {
	for (var i = 0; i < 5; i++) {
		$('.progress__item' + i).removeClass(progressItemActive);
		$('.quests__item--' + i).removeClass(questsItemActive);
		$('.quests__item--' + i).removeClass(forward);
		$('.quests').removeClass('quests--state' + i);
	}
}

$(document).ready(function() {

	$('.quests__item--1').on('click', function () {
		clearStates();
		goState(1);
	})

	$('.quests__item--2').on('click', function () {
		clearStates();
		goState(2);
	})

	$('.progress__item3, .quests__item--3, .quests__progress-desc-link').on('click', function () {
		clearStates();
		goState(3);
	})

	$('.progress__item4').on('click', function () {
		clearStates();
		goState(3);
	})

});
