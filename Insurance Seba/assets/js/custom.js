(function($){
    'use strict';
    jQuery(document).ready(function($){
       
        // site menu //
        let siteMenuIcon  = document.querySelector('.site-menu-icon i');
        let siteMenu      = document.querySelector('.site-menu');
        let siteMenuClose = document.querySelector('.close-button i');

        siteMenuIcon.addEventListener('click', function() {
            siteMenu.classList.add('menu-show');
        });

        siteMenuClose.addEventListener('click', function() {
            siteMenu.classList.remove('menu-show');
        });

        // Accordion JavaScript //
        // accordion item variable
        const accordionItems = document.querySelectorAll('.accordion-item');
        // acconrdion loop
        accordionItems.forEach(item => {
            const accHeader  = item.querySelector('.accordion-header');
            const accContent = item.querySelector('.accordion-content');
            const accIcon    = item.querySelector('button span i.fa-solid');
        
            accHeader.addEventListener('click', () => {
                accContent.classList.toggle('hidden');
                accIcon.classList.toggle('fa-chevron-down');
                accIcon.classList.toggle('fa-chevron-right');
            });
        });

    });
})(jQuery);