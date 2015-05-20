// JavaScript Document

var preLoader = function(){
	
	$('body').prepend('<div class="preloader"><div class="animation-wrapper"><div class="animate-logo"></div></div></div>');
	
	
	changeToGrey();
	
	
}

$(document).ready(function(){
		preLoader();
});