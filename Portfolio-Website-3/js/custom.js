(function($){

jQuery(document).ready(function(){jQuery(".main-menu ul").singlePageNav({speed:150}),jQuery(".hire-me").singlePageNav({speed:50}),jQuery(".mobile-menu i").click(function(){jQuery(".main-menu").slideToggle()}),jQuery(window).resize(function(){jQuery(window).width()>991.98&&jQuery(".main-menu").removeAttr("style")}),jQuery(window).scroll(function(){jQuery(window).scrollTop()>50?jQuery(".menu-area").addClass("fixed"):jQuery(".menu-area").removeClass("fixed")}),jQuery(".scrolltop i").hide(),jQuery(window).scroll(function(){jQuery(window).scrollTop()>300?jQuery(".scrolltop i").fadeIn():jQuery(".scrolltop i").fadeOut()}),jQuery(".scrolltop i").click(function(){return jQuery("html, body").animate({scrollTop:0},200),!1}),jQuery(".srcoll-down i").click(function(){return jQuery("html, body").animate({scrollTop:document.body.scrollHeight},150),!1}),jQuery(".play-video i").click(function(){let e=jQuery("#background-video").get(0);return e.paused?e.play():e.pause(),!1});new Typed(".hero-title h1",{strings:["web developer","theme developer","web designer","wordPress customizer","freelancer"],loop:!0,typeSpeed:80,backSpeed:30,backDelay:1500});jQuery("#contact-form").submit(function(){var e=jQuery("#name").val(),r=jQuery("#email").val(),o=jQuery("#sub").val(),l=jQuery("#message").val();return""==e?jQuery("#name").css("border-color","red"):jQuery("#name").css("border-color","green"),""==r?jQuery("#email").css("border-color","red"):jQuery("#email").css("border-color","green"),""==o?jQuery("#sub").css("border-color","red"):jQuery("#sub").css("border-color","green"),""==l?jQuery("#message").css("border-color","red"):jQuery("#message").css("border-color","green"),!1}),jQuery("#bar1").barfiller({barColor:"#16b597",tooltip:!0,duration:800,animateOnResize:!0,symbol:"%"}),jQuery("#bar2").barfiller({barColor:"#2980b9",tooltip:!0,duration:800,animateOnResize:!0,symbol:"%"}),jQuery("#bar3").barfiller({barColor:"#27ae60",tooltip:!0,duration:800,animateOnResize:!0,symbol:"%"}),jQuery("#bar4").barfiller({barColor:"#34495e",tooltip:!0,duration:800,animateOnResize:!0,symbol:"%"}),jQuery(".counter-count").counterUp({delay:10,time:1e3});mixitup(".work-details"),mixitup(containerEl),mixitup(containerEl,{selectors:{target:".blog-item"},animation:{duration:500}})});

})(jQuery);