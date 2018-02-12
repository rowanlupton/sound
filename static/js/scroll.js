function initialSize () {
	var oneVW = 0.01 * window.innerWidth;
	var oneVH = 0.01 * window.innerHeight;
	var headerHeight = document.querySelector('header>#topHeader').clientHeight + 30 * oneVW;
	var windowHeight = window.innerHeight;

	document.querySelector('header>.img-container').style.height = '30vw';

	if (window.innerWidth >= 800) {
		document.querySelector('header').style.position = 'fixed';
		document.querySelector('nav').style.display = 'block';
		document.querySelector('section#home').style.marginTop = headerHeight + 'px';
	} else {
		var topHeader = document.getElementById('topHeader');
		var imgContainer = document.querySelector('header>.img-container');
		topHeader.style.position = 'fixed';
		imgContainer.style.marginTop = topHeader.clientHeight + 'px';
		// imgContainer.style.position = 'sticky';
		// imgContainer.style.top = 0; //topHeader.clientHeight + 'px';
	}
	
	document.querySelector('section#home').style.minHeight = windowHeight - headerHeight + 'px';

	var newHeaderHeight = document.getElementById('topHeader').clientHeight + 10 * oneVW;
	var sectionHeight = window.innerHeight - newHeaderHeight;
	var fullHeightSections = document.querySelectorAll('section.full-height')
	for (var i = 0; i < fullHeightSections.length; i++) {
		fullHeightSections[i].style.minHeight = sectionHeight + 'px';
	}
}; window.addEventListener('load', initialSize());

function scroll () {
	var img = document.getElementById('header-image');
	var currentHeight = img.clientHeight + 'px';
	var currentScroll = window.scrollY;
	var oneVW = 0.01 * window.innerWidth;

	if (window.innerWidth >= 800) {
		var breakPoint = 20 * oneVW;
	} else {
		var breakPoint = 29 * oneVW;
	}

	console.log(currentScroll)

	if (currentScroll < 1) {
		maxHeight = 30 * oneVW + 'px';
	} else if (currentScroll < breakPoint) {
		maxHeight = 30 * oneVW - currentScroll + 'px';
	} else {
		maxHeight = 10 * oneVW + 'px';
	};
	
	img.animate({height: [currentHeight, maxHeight]},
				 {fill: 'forwards'});

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
