function initialSize () {
	var headerHeight = document.querySelector('header').clientHeight;
	var windowHeight = window.innerHeight;
	var oneVW = 0.01 * window.innerWidth;
	var oneVH = 0.01 * window.innerHeight;

	document.querySelector('section#home').style.minHeight = windowHeight - headerHeight + 'px';

	var newHeaderHeight = document.getElementById('topHeader').clientHeight + 10 * oneVW;
	var sectionHeight = window.innerHeight - newHeaderHeight;
	fullHeightSections = document.querySelectorAll('section.full-height')
	for (var i = 0; i < fullHeightSections.length; i++) {
		fullHeightSections[i].style.minHeight = sectionHeight + 'px';
	}
}; window.addEventListener('load', initialSize());

function scroll () {
	var img = document.getElementById('header-image');
	var currentHeight = img.clientHeight + 'px';
	var currentScroll = window.scrollY;
	var oneVW = 0.01 * window.innerWidth;

	var breakPoint = 20 * oneVW;

	if (currentScroll < 1) {
		maxHeight = 30 * oneVW + 'px';
	} else if (currentScroll < breakPoint) {
		maxHeight = 30 * oneVW - currentScroll + 'px';
	} else {
		maxHeight = 10 * oneVW + 'px';
	};
	
	// img.style.height = maxHeight;
	img.animate({height: [currentHeight, maxHeight]},
				 {fill: 'forwards'});
	// console.log(maxHeight.replace('px', '').replace('vw', ''))
	// document.querySelector('header').style.height = parseInt(maxHeight.replace('px', '')) + document.querySelector('header>#topHeader').clientHeight + 'px';

} window.addEventListener('scroll', scroll);

// nav button scrolling
function navbarScroll (event) {
	var href = event.target.getAttribute('href').substr(1);
	if (href.length) {
		event.preventDefault();
		var oneVW = 0.01 * window.innerWidth;

		if (href == 'home') {
			var img = document.querySelector('header>.img-container');
			var currentHeight = img.clientHeight + 'px';
			var newHeight = (30 * oneVW) + 'px';
			
			img.animate({height: [currentHeight, newHeight]},
								 {
								 	fill: 'forwards',
								 	duration: 1000
								 });
			window.scrollTo({
				'behavior': 'smooth',
				'top': document.getElementById(href).offsetTop + newHeight
			});
		} else {
			var smallHeader = document.getElementById('topHeader').clientHeight + 10 * oneVW;

			window.scrollTo({
				'behavior': 'smooth',
				'top': document.getElementById(href).offsetTop - smallHeader
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
