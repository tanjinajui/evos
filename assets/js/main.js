(function ($){
	"use strict";

	$('#uiux-progress').circleProgress({
    value: 0.73,
    size: 190,
    thickness: 8,
    fill: '#6928d9',
    startAngle: -1.60,
    emptyFill: '#20205f',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.parcentage').html(Math.round(73 * progress) + '<i>%</i>');
  });
  $('#development-progress').circleProgress({
    value: 0.85,
    size: 190,
    thickness: 8,
    fill: '#1573ff',
    startAngle: -1.60,
    emptyFill: '#20205f',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.parcentage').html(Math.round(85 * progress) + '<i>%</i>');
  });
  $('#branding-progress').circleProgress({
    value: 0.48,
    size: 190,
    thickness: 8,
    fill: '#16ffdb',
    startAngle: -1.60,
    emptyFill: '#20205f',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.parcentage').html(Math.round(48 * progress) + '<i>%</i>');
  });
  $('#product-design-progress').circleProgress({
    value: 0.69,
    size: 190,
    thickness: 8,
    fill: '#baff26',
    startAngle: -1.60,
    emptyFill: '#20205f',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.parcentage').html(Math.round(69 * progress) + '<i>%</i>');
  });

//slick sponsor
$('.sponsor-brand').slick({
    slidesToShow:5,
    arrows:false,
  });

//fancy-box
$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "zoom-in-out",
  transitionEffect: "slide",
  
});

// init Isotope
var $grid = $('.portfolio-grid').isotope({
  // options
  itemSelector: '.portfolio-item',
  percentPosition: true,
  masonry: {
    columnWidth: 1
  }
});
// filter items on button click
$('.portfolio-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({
   filter: filterValue
    });
});

//active JS
$('.portfolio-menu li').on( 'click', function() {
  $('li').removeClass('active');
  $(this).addClass('active')
});

// offcanvas menu
    $(".humberg-icon img").on('click', function(){
      $(".offcanvas-menu").addClass("active");
      $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".menu-close, .offcanvas-menu-overlay").on('click', function(){
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-menu-overlay").removeClass("active");
    });
    // stycky header
    $(window).on('scroll', function(){
      if($(window).scrollTop()){
        $('header').addClass('neel');
      }
      else
      {
        $('header').removeClass('neel');
      }
      
    });
    // wow js
    new WOW().init();
    // typed JS
    var typed = new Typed(".type", {
      strings: [
        "Designer.",
        "Founder."
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      cursorChar: '',
    });

    // parallax JS
    var scene = document.getElementById('layer_1');
    var parallaxInstance = new Parallax(scene); 
    // parallax JS
    var scene = document.getElementById('layer_2');
    var parallaxInstance = new Parallax(scene); 
    // parallax JS
    var scene = document.getElementById('layer_3');
    var parallaxInstance = new Parallax(scene);
     // parallax JS
    var scene = document.getElementById('layer_4');
    var parallaxInstance = new Parallax(scene);
    //hover3d
    $(".about-left").hover3d({
  selector: ".about_shape_1",
  shine: false,
  sensitivity: 20,
}); 
//hover3d
    $(".about-left").hover3d({
  selector: ".about_shape_2",
  shine: false,
  sensitivity: 20,
});
 //hover3d
    $(".about-left").hover3d({
  selector: ".about_shape_3",
  shine: false,
  sensitivity: 20,
});
    // hover 3d
    $(".about-left").hover3d({
      selector: ".about-shape",
      shine: false,
      sensitivity: 30,
    });

})(jQuery);