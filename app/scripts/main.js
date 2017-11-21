$(document).ready(function(){

	// active header menu начало
	$('.header__menu-nav ul li a').click(function(){
		$('.header__menu-nav ul li a').removeClass('active');
		$(this).addClass('active');
	});
	// active header menu конец

// active block search начало
	$('.search__nav ul li a').click(function(){
		$('.search__nav ul li a').removeClass('active');
		$(this).addClass('active');
	});
	// active block search конец

// active footer-nav начало
	$('.footer__menu-nav ul li a').click(function(){
		$('.footer__menu-nav ul li a').removeClass('active');
		$(this).addClass('active');
	});
	// active footer-nav конец




// owl-main
  $('.js-carousel').owlCarousel({
    loop:true,
    margin:15,
    navText: [''],
    nav:true,
    items:6,
    responsive:{
      0:{
        items:1
      },
      380:{
        items:2
      },
      500:{
        items:3
      },
      660:{
        items:4
      },
      1000:{
        items:6
      }
    }
  });
  // owl-main




// mmenu
$('.header__menu-nav ul').clone().appendTo('.mmenu-nav');

var $menu = $('.mmenu-nav').mmenu({
	navbar: {
		title: '<img src=\'images/logo.png\' alt=\'\' />'
	},
	extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black'],
	offCanvas: {
		'position': 'right'
	},
	counters: true
});

var $icon = $('.js-navtrigger');
var API = $menu.data('mmenu');

$icon.on('click', function () {
	API.open();
});

API.bind('open:start', function ($panel) {
	$('.js-navtrigger').toggleClass('-active');
});

API.bind('close:start', function ($panel) {
	$('.js-navtrigger').toggleClass('-active');
});

if (Modernizr.mq('(max-width: 1199px)')) {
	$('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
		API.close();
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 115
				}, 1000);
				return false;
			}
		}
	});
} else {
	$('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 73
				}, 1000);
				return false;
			}
		}
	});
}

if (Modernizr.mq('(max-width: 767px)')) {
	var init = function init(data) {
		$('#map').html('');
		myMap = new ymaps.Map('map', {
			controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
			center: [55.755814, 37.617635],
			behaviors: ['drag'],
			zoom: 17
		});

		if (!data.type) {
			myPlacemark = new ymaps.Placemark([55.755814, 37.617635], {
				balloonContentHeader: 'KidsLab',
				balloonContentBody: 'Москва, ул. 2-я Мякининская, дом 9'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'images/marker.png',
				iconImageSize: [35, 55]
			});
			myMap.geoObjects.add(myPlacemark);
			return true;
		};
	};

	var myMap, myPlacemark;

	ymaps.ready(init);
	;
} else {
	var _init = function _init(data) {
		$('#map').html('');
		myMap = new ymaps.Map('map', {
			controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
			center: [55.755814, 37.617635],
			behaviors: ['drag'],
			zoom: 17
		});

		if (!data.type) {
			myPlacemark = new ymaps.Placemark([55.755814, 37.617635], {
				balloonContentHeader: 'InterFace',
				balloonContentBody: 'Москва ул.Кожевническая 10с1'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'images/marker.png',
				iconImageSize: [35, 55]
			});
			myMap.geoObjects.add(myPlacemark);
			return true;
		};
	};

	var myMap, myPlacemark;

	ymaps.ready(_init);
	;
}

// mmenu





});