function main() {
	$('.skill').fadeIn(1000);
	  $('.projects-button').on('click', function() {
	  	$(this).toggleClass('active');
	  	  $(this).text('Projects Viewed');
	  	  	/*$(this).next().hide();*/
	  	      $(this).next().slideToggle(400);  

	});
}

$(document).ready(main);