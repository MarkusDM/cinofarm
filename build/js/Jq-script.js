'use strict';

 
$('.header__phone').hover(function () {
       
    clearTimeout($.data(this,'timer'));

    $('.header__phone-lists',this).stop(true,true).slideDown(400);

 }, function () {

   $.data(this,'timer', setTimeout($.proxy(function() {

     $('.header__phone-lists',this).stop(true,true).slideUp(400);

   }, this), 100));

});  
    
        
   
         
		
        
    

