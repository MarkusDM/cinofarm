'use strict';

 
$('.header__phone').hover(function () {
       
    clearTimeout($.data(this,'timer'));

    $('.header__phone-lists',this).stop(true,true).slideDown(400);

 }, function () {

   $.data(this,'timer', setTimeout($.proxy(function() {

     $('.header__phone-lists',this).stop(true,true).slideUp(400);

   }, this), 100));

});  
    
$('.popular__scroll-top').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#focal").offset().top
  }, 200);
});        
   
         
$('.focal__scroll').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#popular").offset().top
  }, 200);
});     
    
$('.popular__scroll-bottom').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#news").offset().top
  }, 200);
});

$('.news__scroll-top').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#popular").offset().top
  }, 200);
}); 


$('.news__scroll-bottom').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#education").offset().top
  }, 200);
}); 

$('.education__scroll-top').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#news").offset().top
  }, 200);
}); 

$('.education__scroll-bottom').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#literature").offset().top
  }, 200);
});




$('.literature__scroll-top').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#education").offset().top
  }, 200);
}); 

$('.literature__scroll-bottom').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#partners").offset().top
  }, 200);
});


$('.partners__scroll-top').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#literature").offset().top
  }, 200);
}); 

$('.partners__scroll-bottom').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 200);
});


$('.projects__scroll-top').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#partners").offset().top
  }, 200);
}); 

$('.projects__scroll-bottom').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#invitation").offset().top
  }, 200);
});


$('.footer__scroll').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#focal").offset().top
  }, 200);
}); 