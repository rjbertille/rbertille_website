var elemenetPosition = $("#myNav").affix({
     
     offset: {
     	top: $(".content").outerHeight(true)
     }
});




$(window).scroll(function) {
	if($(window).scrollTop() > elementPosition.top) {
		$('.navbar').css('position', 'fixed').css('top', '0');
	} else {
		$('.navbar').css('position', 'static').css('center');
	}
});

