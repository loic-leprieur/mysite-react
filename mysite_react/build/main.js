
jQuery(function(){
	$('.sidenav').sidenav();
	$('.parallax').parallax();
	$('.carousel.carousel-slider').carousel({
		fullWidth: true,
		indicators: true
	});

	var opacity = 0;
	var intervalID = 0;
	window.onload = fadeIn;

	function fadeIn() {
		setInterval(show, 200);
	}

	function show() {
		var banner = document.getElementById("banner-profile");
		opacity = Number(window.getComputedStyle(banner)
							.getPropertyValue("opacity"));
		if (opacity < 1) {
			opacity = opacity + 0.1;
			banner.style.opacity = opacity
		} else {
			clearInterval(intervalID);
		}

		$('#mail-button').effect("bounce", { direction:'down', times:8 }, 300);
	}

	window.onscroll = function() {addStickyToNav()};

	// Get the navbar
	var navbar = document.getElementById("navbar");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function addStickyToNav() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}}

	// Scroll to the section with a smooth animation
	$('.brand-logo').on('click', function(e) {
		e.preventDefault()
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	})

	$('#link-formation').on('click', function(e){
		e.preventDefault()
		document.getElementById('formation').scrollIntoView({block: 'start', behavior: 'smooth'})
	})

	$('#link-portfolio').on('click', function(e){
		e.preventDefault()
		document.getElementById('portfolio').scrollIntoView({block: 'start', behavior: 'smooth'})
	})

	$('#link-infos').on('click', function(e){
		e.preventDefault()
		document.getElementById('infos').scrollIntoView({block: 'start', behavior: 'smooth'})
	})

	$('#link-contact').on('click', function(e){
		e.preventDefault()
		document.getElementById('contact').scrollIntoView({block: 'start', behavior: 'smooth'})
	})
})
