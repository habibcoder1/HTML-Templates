(function($){
	jQuery(document).ready(function(){


		/// Mobile Menu ///
		jQuery('.mobile-menu i').click(function(){
			jQuery('.main-menu').slideToggle();
		});

		jQuery(window).resize(function(){
			if (jQuery(window).width()>991.98) {
				jQuery('.main-menu').removeAttr('style');	
			}
		});


		/// Menu Fixed ///
		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>60 && jQuery(window).width()>991.98 ) {
				jQuery('.top-header').addClass('fixed');
			}else {
				jQuery('.top-header').removeClass('fixed');
			}
		});


		/// Scroll Top ///
		jQuery('.scroll-top i').hide();

		jQuery(window).scroll(function() {
			if (jQuery(window).scrollTop()>350 ) {
				jQuery('.scroll-top i').fadeIn(500);
			}else {
				jQuery('.scroll-top i').fadeOut(500);
			}
		});

		jQuery('.scroll-top i').click(function(){
			jQuery('html, body').animate({scrollTop: 0}, 180);
			return false;
		});


		/// Mixitup ///
		var mixer = mixitup('.work-images');
		var mixer = mixitup(containerEl);
		var mixer = mixitup(containerEl, {
			selectors: {
				target: '.blog-item'
			},
			animation:{
				duration: 300
			}
		});

		

		
	});

})(jQuery);