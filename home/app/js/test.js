jQuery(document).ready(function($) {
            "use strict";
            //  TESTIMONIALS CAROUSEL HOOK
            $('#customers-testimonials').owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 0,
                autoplay: true,
                dots:false,
                autoplayTimeout: 8500,
                smartSpeed: 200,
              nav: true,
                navText: [
        '<i class="fa fa-angle-left" id="fa" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" id="fa" aria-hidden="true"></i>'
    ],
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  1170: {
                    items: 3
                  }
                }
            });
          });