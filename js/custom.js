	jQuery(document).ready(function(){
		
		$('.nav li a').click(function(){
			console.log("sdfsfds");
			var idFind = $(this).attr('href').split("#")[1]
			var idFind = '#'+idFind
			if(idFind!='#')
			$('html, body').animate({
				scrollTop :($(idFind).offset().top - 80) 
			});
		});
		
		
	
		var pathname = window.location.href;
					var pathname =  pathname.split(".html")[1] 
		  			$('html, body').animate({
					scrollTop :($(pathname).offset().top - 80) 
					});
	});