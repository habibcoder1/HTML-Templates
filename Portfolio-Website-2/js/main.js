(function($){
	jQuery(document).ready(function(){


		/* ===============
		 	Mobile Menu
		 ================*/
		 jQuery('.mobile-menu i').click(function(){
		 	jQuery('.main-menu').slideToggle(500);
		 });

		 jQuery(window).resize(function(){
		 	if (jQuery(window).width()>767.98) {
		 		jQuery('.main-menu').removeAttr('style');
		 	}
		 });

		/* =================
			Menu Fixed
		================= */

		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop() >90) {
				jQuery('.menu-area').addClass('fixed') && jQuery('.menu-area').css('margin-top', 0);
			}else {
				jQuery('.menu-area').removeClass('fixed') && jQuery('.menu-area').css('margin-top', 55);
			}
		});


		/* =================
			Scroll Top
		================= */

		jQuery('.scroll-up a i').hide();

		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>250) {
				jQuery('.scroll-up a i').fadeIn(500);
			}else {
				jQuery('.scroll-up a i').fadeOut(500);
			}
		});


		jQuery('.scroll-up a i').click(function(){
			jQuery('html, body').animate({scrollTop: 0}, 150);

			return false;
		});


		/* =============
		 	Mixitup
		 ==============*/
		var mixer = mixitup('.portfolio-items');
		var mixer = mixitup('containerEl');
		var mixer = mixitup('containerEl', {
			selectors: {
				target: '.blog-item'
			},
			animation:{
				duration: 300
			}

		});

		



	});


})(jQuery);
