'use strict'

jQuery(function () {
  // Initialize side navigation
  $('.sidenav').sidenav()

  // Initialize parallax effect
  $('.parallax').parallax()

  // Initialize carousel slider
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  })

  // Set initial opacity and interval ID
  var opacity = 0
  var intervalID = 0

  // Increase opacity gradually to fade in the banner
  function show() {
    var banner = $('#banner-profile')
    opacity = Number(banner.css('opacity'))
    if (opacity < 1) {
      opacity += 0.1
      banner.css('opacity', opacity)
    } else {
      clearInterval(intervalID)
    }
  }

  // Fade in the banner element
  function fadeIn() {
    intervalID = setInterval(show, 200)
  }

  // Call fadeIn() when the DOM is fully loaded
  fadeIn()

  // Add sticky class to the navbar on scroll
  $(window).scrollTop(function () {
    // addStickyToNav()
  })

  // Add the stickyOffsetTop class to the navbar when reaching its scroll position
  function addStickyToNav() {
    // Get the navbar element
    const navbar = $('#navbar')

    // Get the offset position of the navbar
    const stickyOffsetTop = navbar.offset().top

    if ($(window).scrollTop() >= stickyOffsetTop) {
      navbar.addClass('sticky')
    } else {
      navbar.removeClass('sticky')
    }
  }

  addStickyToNav()

  // Check if there's a hash in the URL (i.e., URL parameters are present)
  if (window.location.hash) {
    var target = $(window.location.hash)
    if (target.length) {
      // Smooth scroll to the target section
      $('html, body').animate({ scrollTop: target.offset().top }, 'smooth')
    }
  }

  // Add click event handlers for navigation links
  $('.brand-logo').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'smooth')
  })

  $('#link-formation').on('click', function (e) {
    e.preventDefault()
    const headerHeight = 80 // Adjust this value according to your header's height
    var target = $('#formation')[0]
    var targetPosition = target.getBoundingClientRect().top
    var offset = targetPosition - headerHeight

    window.scrollBy({
      top: offset,
      behavior: 'smooth'
    })
  })

  $('#link-portfolio').on('click', function (e) {
    e.preventDefault()
    const headerHeight = 200 // Adjust this value according to your header's height
    var target = $('#portfolio')[0]
    var targetPosition = target.getBoundingClientRect().top
    var offset = targetPosition - headerHeight

    window.scrollBy({
      top: offset,
      behavior: 'smooth'
    })
  })

  $('#link-infos').on('click', function (e) {
    e.preventDefault()
    const headerHeight = 80 // Adjust this value according to your header's height
    var target = $('#infos')[0]
    var targetPosition = target.getBoundingClientRect().top
    var offset = targetPosition - headerHeight

    window.scrollBy({
      top: offset,
      behavior: 'smooth'
    })
  })

  $('#link-contact').on('click', function (e) {
    e.preventDefault()
    const headerHeight = 80 // Adjust this value according to your header's height
    var target = $('#contact')[0]
    var targetPosition = target.getBoundingClientRect().top
    var offset = targetPosition - headerHeight

    window.scrollBy({
      top: offset,
      behavior: 'smooth'
    })
  })
})
