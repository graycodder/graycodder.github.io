	jQuery(document).ready(function(){
		
		var pathname = window.location.href;
					var pathname =  pathname.split(".html")[1] 
		  			$('html, body').animate({
					scrollTop :($(pathname).offset().top - 80) 
					}, 800);
		
		$('.nav li a').click(function(){
			
			var idFind = $(this).attr('href').split("#")[1]
			var idFind = '#'+idFind
			if(idFind!='#')
			$('html, body').animate({
				scrollTop :($(idFind).offset().top - 80) 
			}, 800);
		});
		
		$('#contact-back ,#about-back' ).click(function(){
			
			$('body,html').animate({
							scrollTop: 0
						}, 800);
		});
		
	
		
	});