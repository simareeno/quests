// shitcode is here, brave yourself


function clearStates() {
	// carousel.removeClass('quests--state1');
	// carousel.removeClass('quests--state2');
	// carousel.removeClass('quests--state3');
	// carousel.removeClass('quests--state4');

	for (var i = 0; i < 5; i++) {
		$('.quests__item--' + i).removeClass(questsItemActive);
		carousel.removeClass('quests--state' + i);
	}

	arrowPrev.removeClass(arrowDisabled);
	arrowNext.removeClass(arrowDisabled);
}

function goState(direction) {

	if (direction == 'up') {
		currentState ++;
	} else {
		currentState --;
	}

	carousel.addClass('quests--state' + currentState);

	$('.quests__item--' + currentState).addClass(questsItemActive);

	if (currentState <= 1) {
		arrowPrev.addClass(arrowDisabled);
	} else if (currentState >= 4) {
		arrowNext.addClass(arrowDisabled);
	}

	console.log(currentState);

}


var arrowPrev = $('.quests-nav-left');
var arrowNext = $('.quests-nav-right');
var arrowDisabled = 'arrow--disabled';
var questsItemActive = 'quests__item--active';
var currentState = 2;
var carousel = $('.quests');

goState();

arrowNext.click(function () {

	if ($(this).hasClass(arrowDisabled)) {
		return false;
	} else {
		clearStates();
		goState('up');
	}

})

arrowPrev.click(function () {

	if ($(this).hasClass(arrowDisabled)) {
		return false;
	} else {
		clearStates();
		goState();
	}
})

// $('.quests__prize').click(function () {
// 	if (!$(this).hasClass("quests__item--active")) {
// 		console.log('dsfdsf');
// 		return false;
//
// 	}
// })


$('.quests__item--1').on('click', function () {
	if (currentState > 1) {
		clearStates();
		goState();
	} else {
		return false;
	}
})

$('.quests__item--2').on('click', function () {
	if (currentState == 1) {
		clearStates();
		goState('up');
	} else if (currentState > 2) {
		clearStates();
		goState();
	}
})

$('.quests__item--3').on('click', function () {
	if (currentState < 3) {
		clearStates();
		goState('up');
	} else if (currentState > 3) {
		clearStates();
		goState();
	}
})


$('.quests__item--4').on('click', function () {
	if (currentState < 4) {
		clearStates();
		goState('up');
	} else {
		return false;
	}
})
