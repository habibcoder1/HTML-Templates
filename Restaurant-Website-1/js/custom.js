(function($){
	jQuery(document).ready(function(){

		//Mobile Menu
		jQuery('.mobile-menu i').click(function(){
			jQuery('.main-menu').slideToggle();
		});

		jQuery(window).resize(function(){
			if (jQuery(window).width()>767.98) {
				jQuery('.main-menu').removeAttr('style');
			}
		});

		// Menu Fixed
		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>100 && jQuery(window).width()>767.98 ) {
				jQuery('.main-menu').addClass('fixed-menu') && jQuery('.main-menu').css('margin-top', 0);
			}else {
				jQuery('.main-menu').removeClass('fixed-menu');
			}
		});

		// Booking Form Validation
		jQuery("#booking-form").validate({

			errorClass: "error fail-alert",
			validClass: "valid success-alert",

			rules: {
			    name : {
			        required: true,
			        minlength: 3
			    },
			    email: {
			        required: true,
			        email: true
				},
				date: {
			        required: true
			    },
			    time: {
			    	required: true
			    },
			    people: {
			    	required: true,
			    	number: true
			    }

			},
			messages : {
			    name: {
			    	required: 'Please enter your name',
			        minlength: "Name at least 3 chars."
			    },
			    email: {
			    	required: 'Please enter a valid email',
			        email: "Email should be abc@gmail.com"
			    },
			    date: {
			        required: "Please select booking date"
			    },
			    time: {
			        required: "Please enter coming time"
			    },
			    people: {
			    	required: 'How many peoples will come ?',
			    	number: 'only numerical is allow'
			    }
			},
			submitHandler: function(form) {
	            form.submit();
	            confirm('Are You Confirmed ?');
	            return false;
	        }

		});

		// Form Date
		jQuery('#date').datetimepicker({
			timepicker: false,
			datepicker: true,
			format: 'd.m.y'
		});

		// Form Time
		jQuery('#time').datetimepicker({
			datepicker: false,
			timepicker: true,
			format: 'H:i:a',
			ampm: true, 
		});

		//Scroll Top
		jQuery(".scroll-top i").hide();

		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop()>250) {
				jQuery('.scroll-top i').fadeIn(500);
			}else {
				jQuery('.scroll-top i').fadeOut(500);
			}
		});

		jQuery('.scroll-top i').click(function(){
			jQuery('html, body').animate({scrollTop: 0}, 200);
			return false;
		});

		// Magnific Popup (Popular Burger)
		jQuery('.magnific-popup').magnificPopup({
			delegate: 'a',
			type: 'image',
			image: {
	            titleSrc: 'title' 
	        },
			gallery: {
				enabled: true
			}
		});

		// Magnific Popup (Enjoy Food)
		jQuery('.enjoyfood-image').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		//Owl Carousel
		jQuery('.owl-carousel').owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			autoplayTimeout: 3000,
			center: true,
			smartSpeed: 1000,
		});



	});


})(jQuery);
