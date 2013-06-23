	jQuery(document).ready(function(e){
		
		var pathname = window.location.href;
					var pathname =  pathname.split(".html")[1] 
		  			$('html, body').animate({
					scrollTop :($(pathname).offset().top - 80) 
					}, 800);
		
		$('.nav li a').click(function(e){
			
			
		   
			
			var idFind = $(this).attr('href').split("#")[1]
			var idFind = '#'+idFind
			if(idFind!='#')
			{$('html, body').animate({
				scrollTop :($(idFind).offset().top - 80) 
			}, 800);}else{
				$('body,html').animate({
								scrollTop: 0
							}, 800);
			}
		    	});
		
		$('#contact-back ,#about-back' ).click(function(){
			
			$('body,html').animate({
							scrollTop: 0
						}, 800);
		});
		
	
		
	});