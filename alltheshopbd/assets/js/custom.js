(function($){
    'use strict';
    jQuery(document).ready(function($){
        // menu hover
        jQuery('.main-menu ul li').hover(function(){
            jQuery(this).children('ul').slideToggle(400);
        })
        
        // hero slider
        jQuery('.atsbdhero-slider').slick({
            autoplay: true,
            infinite: true,
            dots: true,
            speed: 800,
        });
        // onsale slider
        jQuery('.onsale-slider').slick({
            autoplay: true,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 1,
            centerPadding: '60px',
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    slidesToShow: 3
                  }
                },
                {
                    breakpoint: 640,
                    settings: {
                      arrows: false,
                      slidesToShow: 2
                    }
                },
            ]
        });
        // related prodcuts slider
        jQuery('.related_products-slider').slick({
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerPadding: '60px',
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                    breakpoint: 640,
                    settings: {
                      arrows: false,
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                },
            ]
        });
        
        // side menu
        let mobileMenuBar   = document.querySelector('.mobile-menubar span i');
        let mobileMenu      = document.querySelector('.mobile-menu');
        let mobileMenuClose = document.querySelector('.mobile-menu .close-icon i');

        mobileMenuBar.addEventListener('click', function(){
            mobileMenu.classList.add('show-menu');
        });
        mobileMenuClose.addEventListener('click', function(){
            mobileMenu.classList.remove('show-menu');
        });

        // header sticky menu
        window.addEventListener("scroll", function(){
            let sheader = document.querySelector(".header-area .sticky-header");
            sheader.classList.toggle("sticky-menu-show", window.scrollY > 50);
        });

        // footer sticky search form
        let fSerchForm = document.querySelector('.footer-sticky-menu .search-form');
        let fSearchIcon = document.querySelector('.footer-sticky-menu .search-icon i');
        fSearchIcon.addEventListener('click', function(){
            fSerchForm.classList.toggle('show-search-menu');
        });

        // light dark mode
        let darkLight = document.querySelector('.top-header .light_dark_mode a i');
        let htmlTag   = document.querySelector('html'); 

        darkLight.addEventListener('click', function(){
            htmlTag.classList.toggle('dark');
            // for icons
            darkLight.classList.toggle('fa-moon');
            darkLight.classList.toggle('fa-sun');
        });
        // get user's system/browser prefers dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            htmlTag.classList.add('dark');
            darkLight.classList.replace('fa-moon', 'fa-sun');
        };
        

    });
}(jQuery));