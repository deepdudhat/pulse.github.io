$(document).ready(function () {
     $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots: true,
          drag: false,
          // autoplay: true,
          touchDrag: false,
          responsive: {
               0: {
                    items: 1
               },
               600: {
                    items: 3
               },
               1000: {
                    items: 1
               }
          }
     })
     var owl = $('.owl-carousel');
     owl.owlCarousel();
     owl.on('changed.owl.carousel', function(event) {
          new WOW().init();
     })
     wow = new WOW(
     {
          boxClass:     'wow',      // default
          animateClass: 'animated', // default
          offset:       0,          // default
          mobile:       true,       // default
          live:         true        // default
     }
     )
     wow.init();

     $(window).scroll(function(){
          var sticky = $('.sticky'),
              scroll = $(window).scrollTop();
        
          if (scroll >= 630) {
               sticky.addClass('fixed');
          }
          else {
               sticky.removeClass('fixed');
          }
     });
});