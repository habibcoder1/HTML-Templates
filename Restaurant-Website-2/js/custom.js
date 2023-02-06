(function($){
	jQuery(document).ready(function(){

		// Mobile Menu
		jQuery('.mobile-menu i').click(function(){
			jQuery('.main-menu').slideToggle() && jQuery('.main-menu').css('background-color', 'rgba(0,0,0,.8)'); ;
		});
		
		jQuery(window).resize(function(){
			if (jQuery(window).width()>767.98) {
				jQuery('.main-menu').removeAttr('style')
			}
		});

		// Menu Fixed
		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>70) {
				jQuery('.top-header').addClass('fixed');
			}else {
				jQuery('.top-header').removeClass('fixed');
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
		 })
		 
		 jQuery('.scroll-top i').click(function(){
		 	jQuery('html, body').animate({scrollTop: 0}, 180);
		 });
		

		// Subscribe Form
		jQuery('.subscribe-form').submit(function() {
			var email = jQuery('#email').val();

			if (email == '') {
				jQuery('#email').css('border-color', '#f64b3c');
			}else {
				jQuery('#email').css('border-color', 'green');
			}
			return false;
		});

		
	});


})(jQuery);