var prizes = ['prize1', 'prize2', 'prize3', 'prize4', 'prize5', 'prize6', 'prize7', 'prize8', 'prize9', 'prize10', 'prize11', 'prize12']
var parts = prizes.length -1;

$(document).mousemove(function(e) {
	var prizeBlock = $(".prize-grid");
	var scroll = $('.prize-grid__scroll');
	var height = prizeBlock.height();
	var width = prizeBlock.width();
	var offset = prizeBlock.offset();

	mousePosition = {
		left: e.pageX - offset.left,
		top: e.pageY - offset.top
	};

	var posY = mousePosition.top;
	var posX = mousePosition.left;

	if (posY > 0 && posY < height && posX > 0 && posX < width) {
		var currentPart = Math.round(posY / height * parts);
		var activePrize = prizes[currentPart];

		$('.prize').removeClass('prize--active');
		$('.' + activePrize).addClass('prize--active');

		if (activePrize == 'prize1') {
			scroll.addClass('prize-grid__scroll--superprize');
		} else {
			scroll.removeClass('prize-grid__scroll--superprize');
		}

		scroll.removeClass('prize-grid__scroll--hide').css({"-webkit-transform":"translate(0px," + posY + "px)"})
	} else {
		scroll.addClass('prize-grid__scroll--hide');
	}
});
