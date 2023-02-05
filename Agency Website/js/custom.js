(function($){
	jQuery(document).ready(function(){

		// Mobile Menu
		jQuery('.mobile-menu i').click(function(){
			jQuery('.main-menu').slideToggle();
		});
		jQuery(window).resize(function(){
			if (jQuery(window).width()>991.98) {
				jQuery('.main-menu').removeAttr('style');
			}
		});
		jQuery('.close-btn i').click(function(){
			jQuery('.main-menu').slideUp();
		});


		// Menu Fixed
		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>100) {
				jQuery('.menu-area').addClass('fixed');
			}else {
				jQuery('.menu-area').removeClass('fixed');
			}
		});

		// Search Form Validation
		jQuery('#search-form').submit(function() {
			let search = jQuery('#search').val();

			if ( search == '' ) {
				jQuery('#search').css('border-color', 'red');
			}else {
				jQuery('#search').css('border-color', 'green');
			}
			return false;
		});

		// Footer Form
		jQuery('#newsletter-form').submit(function() {
			let name = jQuery('#name').val();
			let email = jQuery('#email').val();

			if (name == '') {
				jQuery('#name').css('border-color', 'red');
			}else {
				jQuery('#name').css('border-color', 'green');
			}

			if ( email == '' ) {
				jQuery('#email').css('border-color', 'red');
			}else {
				jQuery('#email').css('border-color', 'green');
			}
			return false;
		});

		// Scroll Top
		jQuery('.scroll-top i').hide();

		jQuery(window).scroll(function() {
			if (jQuery(window).scrollTop()>250) {
				jQuery('.scroll-top i').fadeIn();
			}else {
				jQuery('.scroll-top i').fadeOut();
			}
		});

		jQuery('.scroll-top i').click(function() {
			jQuery('html, body').animate({scrollTop: 0}, 150);
		});


		
	});

})(jQuery);