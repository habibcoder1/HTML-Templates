(function($){
	jQuery(document).ready(function() {

		/* ===============
		 Counter Up
		=============== */
		jQuery('.advice-number').counterUp({
			delay: 10,
			time: 1000
		});


		/* ===============
		 Mobile Menu
		=============== */
		jQuery('.mobile-menu i').click(function(){
			jQuery('.main-menu').slideToggle(500);

			return false;
		});

		jQuery(window).resize(function(){
			if (jQuery(window).width()>992) {
				jQuery('.main-menu').removeAttr('style');
			}
		});

		/* ===============
		 Menu Fixed
		=============== */
		var menuHeight =  jQuery('.header-area').outerHeight();

		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop() >menuHeight) {
				jQuery('.menu-area').addClass('fixed');
			}else {
				jQuery('.menu-area').removeClass('fixed');
			}
		});


		/* ===============
		 Scroll Top
		=============== */

			jQuery('.scroll-up a i').hide();

		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>300) {
				jQuery('.scroll-up a i').fadeIn();
			}else {
				jQuery('.scroll-up a i').fadeOut();
			}
		});


		jQuery('.scroll-up a i').click(function(){
			jQuery('html, body').animate({scrollTop:0}, 120)
			return false;
		});


	});

})(jQuery);