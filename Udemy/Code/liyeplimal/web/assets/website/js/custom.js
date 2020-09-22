$(document).ready(function () {
    "use strict";
    $('.testimonial2-carousel').owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    })
    $('.blog-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs></defs><path d='M40,72A32,32,0,1,1,72,40,31.994,31.994,0,0,1,40,72Zm3.729-18.529-9.742-9.342H57.548a3.089,3.089,0,0,0,3.1-3.1V38.968a3.089,3.089,0,0,0-3.1-3.1H33.987l9.742-9.342a3.1,3.1,0,0,0,.052-4.426L42.361,20.7a3.084,3.084,0,0,0-4.374,0L20.865,37.806a3.084,3.084,0,0,0,0,4.374L37.987,59.3a3.084,3.084,0,0,0,4.374,0L43.781,57.9A3.1,3.1,0,0,0,43.729,53.471Z' transform='translate(-8 -8)'/></svg>", "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs></defs><path d='M40,72A32,32,0,1,1,72,40,31.994,31.994,0,0,1,40,72Zm3.729-18.529-9.742-9.342H57.548a3.089,3.089,0,0,0,3.1-3.1V38.968a3.089,3.089,0,0,0-3.1-3.1H33.987l9.742-9.342a3.1,3.1,0,0,0,.052-4.426L42.361,20.7a3.084,3.084,0,0,0-4.374,0L20.865,37.806a3.084,3.084,0,0,0,0,4.374L37.987,59.3a3.084,3.084,0,0,0,4.374,0L43.781,57.9A3.1,3.1,0,0,0,43.729,53.471Z' transform='translate(72 72) rotate(180)'/></svg>"],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
//                nav: false
            }
        }
    });

    $('.avatar-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs></defs><path d='M40,72A32,32,0,1,1,72,40,31.994,31.994,0,0,1,40,72Zm3.729-18.529-9.742-9.342H57.548a3.089,3.089,0,0,0,3.1-3.1V38.968a3.089,3.089,0,0,0-3.1-3.1H33.987l9.742-9.342a3.1,3.1,0,0,0,.052-4.426L42.361,20.7a3.084,3.084,0,0,0-4.374,0L20.865,37.806a3.084,3.084,0,0,0,0,4.374L37.987,59.3a3.084,3.084,0,0,0,4.374,0L43.781,57.9A3.1,3.1,0,0,0,43.729,53.471Z' transform='translate(-8 -8)'/></svg>", "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs></defs><path d='M40,72A32,32,0,1,1,72,40,31.994,31.994,0,0,1,40,72Zm3.729-18.529-9.742-9.342H57.548a3.089,3.089,0,0,0,3.1-3.1V38.968a3.089,3.089,0,0,0-3.1-3.1H33.987l9.742-9.342a3.1,3.1,0,0,0,.052-4.426L42.361,20.7a3.084,3.084,0,0,0-4.374,0L20.865,37.806a3.084,3.084,0,0,0,0,4.374L37.987,59.3a3.084,3.084,0,0,0,4.374,0L43.781,57.9A3.1,3.1,0,0,0,43.729,53.471Z' transform='translate(72 72) rotate(180)'/></svg>"],
    });

    //Language dropdown
    $("#lng_select").msDropdown();




    $('#bootstrap-touch-slider').bsTouchSlider();
    $('.contentSidebar, .rightSidebar').theiaStickySidebar({
        additionalMarginTop: 30
    });

    $('body').append('<div id="toTop" class="btn btn-top"><span class="ti-arrow-up"></span></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });

    (function ($) {
        $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

        $('.accordion a').click(function (j) {
            var dropDown = $(this).closest('li').find('p');

            $(this).closest('.accordion').find('p').not(dropDown).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.accordion').find('a.active').removeClass('active');
                $(this).addClass('active');
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });
    })(jQuery);



    //Filter portfolio
    shuffleme.init();


});
var shuffleme = (function ($) {
    var $grid = $('#grid'), //locate what we want to sort 
            $filterOptions = $('.portfolio-sorting li'), //locate the filter categories
            $sizer = $grid.find('.shuffle_sizer'), //sizer stores the size of the items

            init = function () {

                // None of these need to be executed synchronously
                setTimeout(function () {
                    listen();
                    setupFilters();
                }, 100);

                // instantiate the plugin
                $grid.shuffle({
                    itemSelector: '[class*="col-"]',
                    sizer: $sizer
                });
            },
            // Set up button clicks
            setupFilters = function () {
                var $btns = $filterOptions.children();
                $btns.on('click', function (e) {
                    e.preventDefault();
                    var $this = $(this),
                            isActive = $this.hasClass('active'),
                            group = isActive ? 'all' : $this.data('group');

                    // Hide current label, show current label in title
                    if (!isActive) {
                        $('.portfolio-sorting li a').removeClass('active');
                    }
                    $this.toggleClass('active');
                    // Filter elements
                    $grid.shuffle('shuffle', group);
                });

                $btns = null;
            },
            // Re layout shuffle when images load. This is only needed
            // below 768 pixels because the .picture-item height is auto and therefore
            // the height of the picture-item is dependent on the image
            // I recommend using imagesloaded to determine when an image is loaded
            // but that doesn't support IE7
            listen = function () {
                var debouncedLayout = $.throttle(300, function () {
                    $grid.shuffle('update');
                });

                // Get all images inside shuffle
                $grid.find('img').each(function () {
                    var proxyImage;

                    // Image already loaded
                    if (this.complete && this.naturalWidth !== undefined) {
                        return;
                    }

                    // If none of the checks above matched, simulate loading on detached element.
                    proxyImage = new Image();
                    $(proxyImage).on('load', function () {
                        $(this).off('load');
                        debouncedLayout();
                    });

                    proxyImage.src = this.src;
                });

                // Because this method doesn't seem to be perfect.
                setTimeout(function () {
                    debouncedLayout();
                }, 500);
            };

    return {
        init: init
    };
}(jQuery));