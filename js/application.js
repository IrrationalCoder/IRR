// JavaScript Document

var changeToGrey =  function(){
	var counter = 0
	var changeColor = setInterval(function(){
	   switch (counter){
			case 0:
				$('.animate-logo').css({'border-top': '20px solid grey'})	
				break;
			case 1:
				$('.animate-logo').css({'border-right': '20px solid grey'});
				break;
			case 2:
				$('.animate-logo').css({'border-bottom': '20px solid grey'});
				break;
			case 3:
				$('.animate-logo').css({'border-left': '20px solid grey'});	
		}
		
    counter++;
}, 3000);
}

var preLoader = function(){
	
	$('body').prepend('<div class="preloader"><div class="animation-wrapper"><div class="animate-logo"></div></div></div>');
	
	
	changeToGrey();
	
	
}

$(document).ready(function(){
		preLoader();
});