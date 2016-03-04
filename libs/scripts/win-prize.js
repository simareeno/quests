var prizesFlow = $('.prize__icon-flow img');
var prizesFlowHeight = -prizesFlow.height();
var slideHeight = $('.prize__icon-flow').height();
var skipSlides = 3;
var button = $('.prize__item-button-open');
var buttonReturn = $('.prize__item-button-get');

var checkTime = 2500;

function animateFlow() {
	TweenMax.fromTo(prizesFlow, 3, {css:{y:prizesFlowHeight}}, {css:{y:0}, ease: Sine.easeInOut, onUpdate:applyValue, onComplete:showItem});

	function applyValue() {
		var currentPosition = GreenProp.y(prizesFlow);
		// console.log(currentPosition);
	}

}

// function stopFlow(start, end) {
// 	TweenMax.fromTo(prizesFlow, 3, {css:{y:start}}, {css:{y:end}, ease: Power1.easeOut, onComplete:showItem});
// }

function getCurrentPosition() {
	var currentPosition = GreenProp.y(prizesFlow);
	return currentPosition;
}

function showItem() {
	$('.prize__content').addClass('prize__content--show');
	// setTimeout("$('.quests').addClass('quests--prize-won')", 2500);
	// setTimeout("$('.quests').addClass('quests--prize-won')", 2000);
	// setTimeout("$('.quests').removeClass('quests--state4')", 2000);
	$('.prize-won--state2').addClass('prize-won--active');
	$('.prize__trophy').addClass('prize__trophy--unlocked')
	$('.quests__prize').addClass('prize--achieved');
	buttonReturn.addClass('prize__item-button--active')
	goParticles();
}

function inactivePrize() {
	$('.prize').removeClass('prize--achieved');
	buttonReturn.removeClass('prize__item-button--active');
	$('#particles').fadeOut(500);
	$('.prize__trophy').removeClass('prize__trophy--unlocked')
	$('.progress__trophy').removeClass('progress__trophy--achieved')
	$('.prize__item').removeClass('prize__state--active');
	$('.prize__box').addClass('prize__state--active');
}

function inactivateTask(number) {
	var task = $('.quests__item--' + number);
	$('.progress__item' + number).removeClass('progress__card--achieved');
	var firtsItem = $(task).find('.quest__first');
	var secondItem = $(task).find('.quest__second');

	function activateSecond() {
		$(secondItem).addClass('quest__fake--active')
	}

	$(firtsItem).addClass('quest__fake--rejected');
	setTimeout( activateSecond , 300);
}

function setCheck() {
	$('.quest__item-check').addClass('quest__item-check--active');
}

$(document).ready(function() {

	button.click(function () {
		console.log('sd');
		animateFlow();
		$(this).removeClass('prize__item-button--active')
		// button.addClass('prize__button--hide');
		$('.prize-won--state1').removeClass('prize-won--active');
		$('.prize__state').removeClass('prize__state--active');
		$('.prize__item').addClass('prize__state--active');
		// setTimeout("var currentPosition = getCurrentPosition()", 5000);
		// setTimeout("var stopPoint = Math.ceil(currentPosition / slideHeight) * slideHeight + slideHeight * skipSlides", 5000);
		// setTimeout("stopFlow(currentPosition, stopPoint)", 5000);
	})

	buttonReturn.click(function () {

		setCheck();
		inactivePrize();

		setTimeout(function () {
			clearStates()
		}, checkTime);

		setTimeout(function () {
			goState(1)
		}, checkTime);

		setTimeout( function () {
			inactivateTask(3)
		} , checkTime);

		setTimeout( function () {
			inactivateTask(2)
		} , checkTime + 200);

		setTimeout( function () {
			inactivateTask(1)
		} , checkTime + 400);

		setTimeout("$('.quest__item-check').removeClass('quest__item-check--active');", checkTime);



	})
});












function goParticles() {

	$(function() {


	window.requestAnimFrame =
	    window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    window.mozRequestAnimationFrame ||
	    window.oRequestAnimationFrame ||
	    window.msRequestAnimationFrame ||
	    function(callback) {
	        window.setTimeout(callback, 1000 / 60);
	};

	var canvas = document.getElementById('particles');
	var ctx = canvas.getContext('2d');

	canvas.width = 1980;
	canvas.height = 923;

	var settings = {

	    'basic': {

	        'emission_rate': 15,
	        'min_life': 0.5,
	        'life_range': 0.5,
	        'min_angle': 0,
	        'angle_range': 360,
	        'min_speed': 50,
	        'speed_range': 1,
	        'min_size': 1,
	        'size_range': 1,
	        'colour': '#fc0'
	    }
	};

	var Particle = function(x, y, angle, speed, life, size) {

	    /* the particle's position */

	    this.pos = {

	        x: x || 0,
	        y: y || 0
	    };

	    /* set specified or default values */

	    this.speed = speed || 5;

	    this.life = life || 1;

	    this.size = size || 2;

	    this.lived = 0;

	    /* the particle's velocity */

	    var radians = angle * Math.PI / 180;

	    this.vel = {

	        x: Math.cos(radians) * speed,
	        y: -Math.sin(radians) * speed
	    };
	};

	var Emitter = function(x, y, settings) {

	    /* the emitter's position */

	    this.pos = {

	        x: x,
	        y: y
	    };

	    /* set specified values */

	    this.settings = settings;

	    /* How often the emitter needs to create a particle in milliseconds */

	    this.emission_delay = 1000 / settings.emission_rate;

	    /* we'll get to these later */

	    this.last_update = 0;

	    this.last_emission = 0;

	    /* the emitter's particle objects */

	    this.particles = [];
	};

	Emitter.prototype.update = function() {

	    /* set the last_update variable to now if it's the first update */

	    if (!this.last_update) {

	        this.last_update = Date.now();

	        return;
	    }

	    /* get the current time */

	    var time = Date.now();

	    /* work out the milliseconds since the last update */

	    var dt = time - this.last_update;

	    /* add them to the milliseconds since the last particle emission */

	    this.last_emission += dt;

	    /* set last_update to now */

	    this.last_update = time;

	    /* check if we need to emit a new particle */

	    if (this.last_emission > this.emission_delay) {

	        /* find out how many particles we need to emit */

	        var i = Math.floor(this.last_emission / this.emission_delay);

	        /* subtract the appropriate amount of milliseconds from last_emission */

	        this.last_emission -= i * this.emission_delay;

	        while (i--) {

	            /* calculate the particle's properties based on the emitter's settings */

	            this.particles.push(
	                new Particle(
	                    0,
	                    0,
	                    this.settings.min_angle + Math.random() * this.settings.angle_range,
	                    this.settings.min_speed + Math.random() * this.settings.speed_range,
	                    this.settings.min_life + Math.random() * this.settings.life_range,
	                    this.settings.min_size + Math.random() * this.settings.size_range
	                )
	            );
	        }
	    }

	    /* convert dt to seconds */

	    dt /= 1000;

	    /* loop through the existing particles */

	    var i = this.particles.length;

	    while (i--) {

	        var particle = this.particles[i];

	        /* skip if the particle is dead */

	        if (particle.dead) {

	            /* remove the particle from the array */
	            this.particles.splice(i, 1);

	            continue;
	        }

	        /* add the seconds passed to the particle's life */

	        particle.lived += dt;

	        /* check if the particle should be dead */

	        if (particle.lived >= particle.life) {

	            particle.dead = true;

	            continue;
	        }

	        /* calculate the particle's new position based on the seconds passed */

	        particle.pos.x += particle.vel.x * dt;
	        particle.pos.y += particle.vel.y * dt;

	        /* draw the particle */

	        ctx.fillStyle = this.settings.colour;

	        var x = this.pos.x + particle.pos.x;
	        var y = this.pos.y + particle.pos.y;

	        ctx.beginPath();
	        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
	        ctx.fill();
	    }
	};



	var emitter = new Emitter(canvas.width / 2, canvas.height / 2, settings.basic);

	function loop() {

	    ctx.clearRect(0, 0, canvas.width, canvas.height);

	    emitter.update();

	    requestAnimFrame(loop);
	}

	loop();

	});

}
