(function ($) {
    "use strict";
    
  //main slider
  if ($('.slider-area').length > 0) {
    $('.slider-area').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      dots: true,
      autoplay: true,
    });
  }   
    
  
  if ($('.new-model-slider').length > 0) {
      $('.new-model-slider').owlCarousel({
        loop: true,
        margin: 55,
        items: 2,
        dots: true,
        autoplay: false,
        nav: true,
        navText: ['＜', '＞'],
        slideBy: 2,
        responsive:{
          0:{
              items:1,
              nav:true
          },
          1350:{
              items:2,
              nav:true,
              loop:false
          }
      }
      });
    }

  //Post SLider
  if ($('.article-slider').length > 0) {
    $('.article-slider').owlCarousel({
      loop: true,
      margin: 0,
      items: 2,
      dots: false,
      autoplay: true,
      nav: true,
      navText: ["<span class='prev-article'>前の記事</span>","<span class='next-article'>次の記事</span>"]
    });
  }



    //Mobile Menu
    $('.mobile-menu-trigger').click(function(){
        $('.main-menu-area, .mobile-menu-backdrop').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.mobile-menu-backdrop').click(function(){
        $('.main-menu-area, .mobile-menu-trigger').toggleClass('active');
        $(this).toggleClass('active');
    });
    

    if ($(window).width() < 991) {
      $('.main-menu li.has-submenu').append('<span class="sub-menu-trigger"><i class="fas fa-chevron-right"></i></span>');
    }
    $('.sub-menu-trigger').click(function () {
      $(this).parent().find('.sub-menu').toggle();
      $(this).toggleClass('active');
    });
  
  
}(jQuery));	
