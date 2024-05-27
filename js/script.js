// loader
$(document).ready(function(){
    setTimeout(function(){
      $('.loader2').fadeout();
    }, 2000);
 })

//  companies_slide
 $('.owl-carousel.companies_slide').owlCarousel({
 loop:true,
 margin:10,
 nav:false,
 dots:false,
 responsive:{
     0:{
         items:1
     },
     600:{
         items:3
     },
     1000:{
         items:3
     }
 }
})

// counter
$.fn.jQuerySimpleCounter = function( options ) {
var settings = $.extend({
   start:  0,
   end:    100,
   easing: 'swing',
   duration: 400,
   complete: ''
}, options );

var thisElement = $(this);

$({count: settings.start}).animate({count: settings.end}, {
duration: settings.duration,
easing: settings.easing,
step: function() {
 var mathCount = Math.ceil(this.count);
 thisElement.text(mathCount);
},
complete: settings.complete
});
};


$('#number1').jQuerySimpleCounter({end: 230,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 89,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 50,duration: 2500});



/* AUTHOR LINK */
$('.about-me-img').hover(function(){
     $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
 }, function(){
     $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
 });


// Blog slider
$(document).ready(function(){
    $('.owl-carousel.blog_slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        center:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
     })
    });

//  Testimonial
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
    0:{
    items:1
    },
    600:{
    items:1
    },
    1000:{
    items:1
 }
}
})
});
