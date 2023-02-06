(function($){
	jQuery(document).ready(function(){

		// Video Play & Pause
		jQuery('.video-icon i').click(function () {
	        var mediaVideo = jQuery("#travelvideo").get(0);
	        if (mediaVideo.paused) {
	           mediaVideo.play();
	        }else {
	           mediaVideo.pause();
	        }
	        return false;
	    });


		// Moblie Menu (Responsive)
		jQuery('.mobile-menu i').click(function(){
			jQuery('.main-menu').slideToggle('slow');
		});

		jQuery(window).resize(function(){
			if (jQuery(window).width()>991.98) {
				jQuery('.main-menu').removeAttr('style');
			}
		});


		// Menu Fixed
		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>40) {
				jQuery('.top-header').addClass('fixed');
			}else {
				jQuery('.top-header').removeClass('fixed') ;
			}
		});

		// Fixed Menu Background
		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>40 && jQuery(window).width()<991.98 ) {
				jQuery('.main-menu').addClass('fixedmenu-background');
			}else {
				jQuery('.main-menu').removeClass('fixedmenu-background');
			}
		});

	    // Scroll Top
	    jQuery('.scroll-top i').hide();
	    jQuery(window).scroll(function(){
	    	if (jQuery(window).scrollTop()>300) {
	    		jQuery('.scroll-top i').fadeIn();
	    	}else {
	    		jQuery('.scroll-top i').fadeOut();
	    	}
	    });

	    jQuery('.scroll-top i').click(function(){
	    	jQuery('html, body').animate({scrollTop: 0}, 120);
	    	return false;
	    });	

		
			  
	});

})(jQuery);