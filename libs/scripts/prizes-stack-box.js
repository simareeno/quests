var prizes = ['pushka1', 'pushka2', 'pushka3', 'pushka4', 'pushka5', 'pushka6', 'nozh', 'grenades', 'bullets', 'antibullet']
var parts = prizes.length -1;
var activeClass = 'quests__item--active';


$(document).mousemove(function(e) {

	var prizeBlock = $(".quests__prize");
	var prizeIconBlock = $(".prize__icon-img");
	var scroll = $('.prize__scroll');
	var height = prizeBlock.height() + 15;
	var width = prizeBlock.width();
	var offset = prizeBlock.offset();

	if ($(prizeBlock).hasClass(activeClass)) {

		// смотрим где мышка
		mousePosition = {
			left: e.pageX - offset.left,
			top: e.pageY - offset.top
		};

		var posY = mousePosition.top;
		var posX = mousePosition.left;

		if (posY > 0 && posY < height && posX > 0 && posX < width) {

			// если мышка на блоке, делим весь блок на количество призов
			// и смотрим на каком сейчас мышка
			var currentPart = Math.round(posY / height * parts);
			var activePrize = prizes[currentPart];

			$(prizeIconBlock).attr("src", "img/" + activePrize + ".png");

			// ставим скролл
			scroll.removeClass('prize__scroll--hide').css({"-webkit-transform":"translate(0px," + posY + "px)"})

		} else {

			// если мышка не на блоке, показываем картинку коробки и прячем скролл
			$(prizeIconBlock).attr("src", "img/skyplus.jpg");
			scroll.addClass('prize__scroll--hide');
		};
	}

});
