(function($){
	jQuery(document).ready(function(){

		// Menu Fixed
		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>=50) {
				jQuery('.top-header').addClass('fixed-header');
			}else {
				jQuery('.top-header').removeClass('fixed-header');
			}
		});

		// Scroll Top
		jQuery('.scroll-top i').hide();
		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>300) {
				jQuery('.scroll-top i').fadeIn(500);
			}else {
				jQuery('.scroll-top i').fadeOut(500);
			}
		});

		jQuery('.scroll-top i').click(function(){
			jQuery('html, body').animate({scrollTop: 0}, 200);
			return false;
		});

		// Counter Up
		jQuery('.about-count').counterUp();

		// Tooltip
		var exampleEl = document.getElementById('gotop')
		var tooltip = new bootstrap.Tooltip(exampleEl, {
		  boundary: document.body 
		})
		
		// Subscribe Form
		jQuery('#sub-form').submit(function() {
			var email = jQuery('#email').val();

			if (email == '' ) {
				jQuery('#email').css('border-color', 'red');
			}else {
				jQuery('#email').css('border-color', 'green');
			}
			return false;
		});

		// Single Nav
		jQuery('.main-menu ul').singlePageNav({
			speed: 200
		});


	});

})(jQuery);