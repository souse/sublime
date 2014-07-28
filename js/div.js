jQuery(function($){

	$(".test").on("click", function(){		
		$(this).animate({right:"300px"}, 1000);
	});


	var slideContainer = $('#slideContainer'),
		c = 1, 
		s_w = (110 * c)+"px";

	$(".link_prev").on("click", function(){
		slideContainer.animate(
			{left: '+=' +s_w},
			500);
	});
	
	
});