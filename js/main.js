$(document).ready(function(){
    $(".banner-slider").owlCarousel({
        items :1,
        autoplay:true,
        nav:true,
        loop:true,
        dots:false,
        autoplayTimeout:2000,
        animateout:'fadeout',
    });


$(".hotels").owlCarousel({
    items:3,
    nav:true,
    loop:true,
    dots:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:2,
            nav:false
        },
        992:{
            items:3,
            nav:false,
            loop:false
        },
        1200:{
            items:3
        }
    }
});
});


$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  })

  $(window).scroll(function(){
    //sync navbar links sections
         $('.block').each(function(){
              if($(window).scrollTop()>$(this).offset().top){
                var blockId = $(this).attr('id');
              $('.navbar a').removeClass('active');
                 $('.navbar li a[data-scroll="' + blockId+ '"]').addClass('active');
            } 
        });
 
  //scroll to top button
             var  scrollToTop  =$('.scroll-to-top');
        if($(window).scrollTop() >=1000){
           if(scrollToTop.is(':hidden')){

            scrollToTop.fadeIn(400);
        }
        }else{
          scrollToTop.fadeOut(400);
         }

    });
    //click on scroll to top to go up
       $('.scroll-to-top').click(function(event){
           event.preventDEfault();
          $('html','body').animate({
              scrollTop:0},1000);

       });