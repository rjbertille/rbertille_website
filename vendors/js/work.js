$(document).ready(function(){
	$('.nav-link').mouseenter(function(){
		$('.nav-link').fadeTo('fast',1);
	});
	$('.nav-link').mouseleave(function(){
		$('.nav-link').fadeTo('fast',0.5);
	});
});

$(document).ready(function(){
	$('.nav-link-second').mouseenter(function(){  
		$('.nav-link-second').fadeTo('fast',1);
	});
	$('.nav-link-second').mouseleave(function(){
		$('.nav-link-second').fadeTo('fast',0.5);
	});
});

$(document).ready(function(){
	$('.nav-link-third').mouseenter(function(){
		$('.nav-link-third').fadeTo('fast',1);
	});
	$('.nav-link-third').mouseleave(function(){
		$('.nav-link-third').fadeTo('fast',0.5);
	});
});

$(document).ready(function(){
	$('.nav-link-fourth').mouseenter(function(){
		$('.nav-link-fourth').fadeTo('fast',1);
	});
	$('.nav-link-fourth').mouseleave(function(){
		$('.nav-link-fourth').fadeTo('fast',0.5);
	});
});

$(document).ready(function(){
	$('.nav-link-five').mouseenter(function(){
		$('.nav-link-five').fadeTo('fast',1);
	});
	$('.nav-link-five').mouseleave(function(){
		$('.nav-link-five').fadeTo('fast',0.5);  
	});
});

/* Skill selection button */ 

$(document).ready(function(){
	$('#all').click(function(){
		$('.skill_html').show("slow");
		$('.skill_js').show("slow");
		$('.skill_responsive').show("slow");
		$('.skill_wordpress').show("slow");
	});
});

$(document).ready(function(){
	$('#html').click(function(){
		$('.skill_html').show("slow");
		$('.skill_js').hide("slow");
		$('.skill_responsive').hide("slow");
		$('.skill_wordpress').hide("slow");
	});
});

$(document).ready(function(){
	$('#javascript').click(function(){
		$('.skill_js').show("slow");
		$('.skill_html').hide("slow");
		$('.skill_responsive').hide("slow");
		$('.skill_wordpress').hide("slow");
	});
});

$(document).ready(function(){
	$('#responsive').click(function(){
		$('.skill_responsive').show("slow");
		$('.skill_html').hide("slow");
		$('.skill_js').hide("slow");
		$('.skill_wordpress').hide("slow");
	});
});

$(document).ready(function(){
	$('#wordpress').click(function(){
		$('.skill_wordpress').show("slow");
		$('.skill_html').hide("slow");
		$('.skill_js').hide("slow");
		$('.skill_responsive').hide("slow");
	});
});

/* LINK ACTIVE */

$(document).ready(function(){
	$('nav a').click(function(){
		$('.work_link').removeClass('active');
		$(this).addClass('active');
		
	});
})