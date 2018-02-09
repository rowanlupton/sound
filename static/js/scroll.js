function initialSize () {
	var headerHeight = document.getElementById('header').clientHeight;
	var windowHeight = window.innerHeight;
	var oneVW = 0.01 * window.innerWidth;
	var oneVH = 0.01 * window.innerHeight;

	document.getElementById('headerWrapper').style.height = headerHeight + 'px';
	document.querySelector('.section#home>.row').style.minHeight = windowHeight - headerHeight + 'px';

	var newHeaderHeight = document.getElementById('topHeader').clientHeight;
	var sectionHeight = window.innerHeight - newHeaderHeight;
	document.querySelector('section.full-height').style.minHeight = sectionHeight;
}; window.addEventListener('load', initialSize()); window.addEventListener('resize', initialSize());

function scroll () {
	var currentScroll = window.scrollY;
	var currentHeight = document.querySelector('.header>.img-container').clientHeight + 'px';
	var oneVW = 0.01 * window.innerWidth;

	var breakPoint = 20 * oneVW;

	if (currentScroll < 1) {
		maxHeight = 30 + 'vw';
	} else if (currentScroll < breakPoint) {
		maxHeight = 30 * oneVW - currentScroll + 'px';
		
	} else {
		maxHeight = 10 + 'vw';
	};
	var img = document.querySelector('.header>.img-container');
	img.animate({height: [currentHeight, maxHeight]},
				 {fill: 'forwards'})

} window.addEventListener('scroll', scroll);

// side button scolling on mobile
function navbarScroll (event) {
	var href = event.target.getAttribute('href').substr(1);
	if (href.length) {
		event.preventDefault();
		var oneVW = 0.01 * window.innerWidth;

		if (href == 'home') {
			var currentHeight = document.querySelector('.header>.img-container').clientHeight + 'px';
			var newHeight = (30 * oneVW) + 'px';
			var img = document.querySelector('.header>.img-container');
			img.animate({height: [currentHeight, newHeight]},
								 {
								 	fill: 'forwards',
								 	duration: 1000
								 });
			window.scrollTo({
				'behavior': 'smooth',
				'left': 0,
				'top': document.getElementById(href).offsetTop
			});
		} else {
			var smallHeader = document.getElementById('topHeader').clientHeight + 15 * oneVW;

			window.scrollTo({
				'behavior': 'smooth',
				'left': 0,
				'top': document.getElementById(href).offsetTop + smallHeader
			});
		}
	};
}; 
function addNavbarListeners () {
	var navButtons = document.querySelectorAll('a[href^="#"]');
	for (var i = 0; i < navButtons.length; i++) {
		navButtons[i].addEventListener('click', function (event) {navbarScroll(event)});
	}
}; addNavbarListeners();
