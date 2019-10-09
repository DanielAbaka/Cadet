'use strict';
var theme = function () {

    // make main menu sticky
    // -------------------------------------------------------------------------------------------
    function handleStickyMenu() {
        if ( ! /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            $(".header").sticky({topSpacing: 0});
        } else {}

    }

    // prevent empty links
    // ---------------------------------------------------------------------------------------
    function handlePreventEmptyLinks() {
        $('a[href=#]').click(function (event) {
            event.preventDefault();
        });
    }

    // Placeholdem
    // ---------------------------------------------------------------------------------------
    function handlePlaceholdem() {
        Placeholdem(document.querySelectorAll('[placeholder]'));
    }

    // BootstrapSelect
    // ---------------------------------------------------------------------------------------
    function handleBootstrapSelect() {
        $('.selectpicker').selectpicker();
    }

    // add hover class for correct view on mobile devices
    // ---------------------------------------------------------------------------------------
    function handleHoverClass() {
        var hover = $('.thumbnail');
        hover.hover(
            function () {
                $(this).addClass('hover');
            },
            function () {
                $(this).removeClass('hover');
            }
        );
    }

    // superfish menu
    // ---------------------------------------------------------------------------------------
    function handleSuperFish() {
        $('ul.sf-menu').superfish();
        $('ul.sf-menu a').click(function() {
            $('body').scrollspy('refresh');
        });
        // fixed menu toggle
        $('.menu-toggle').on('click', function(){
            if($('.navigation').hasClass('opened')) {
                $(this).find('.fa').removeClass('fa-times').addClass('fa-bars');
                $('.navigation').removeClass('opened').addClass('closed');
            } else {
                $(this).find('.fa').removeClass('fa-bars').addClass('fa-times');
                $('.navigation').removeClass('closed').addClass('opened');
            }
        });
        // submenu fix
        $('.mobile-submenu').click(function () {
            $(this).parent().toggleClass('mobile-submenu-open');
        });
        $('ul.sf-menu a').click(function() {
            $('ul.sf-menu li').removeClass('mobile-submenu-open');
        });
    }

    // Smooth scrolling
    // ---------------------------------------------------------------------------------------
    function handleSmoothScroll(){
        $('.sf-menu a, .scroll-to').click(function () {

            //var headerH = $('header').outerHeight();
            var headerH = 190;
            $('.sf-menu a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - headerH + 'px'
            }, {
                duration: 1200,
                easing: 'easeInOutExpo'
            });
            return false;
        });
    }

    // prettyPhoto
    // ---------------------------------------------------------------------------------------
    function handlePrettyPhoto() {
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            theme: 'dark_square'
        });
    }

    // Scroll totop button
    // ---------------------------------------------------------------------------------------
    function handleToTopButton() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('.to-top').css({bottom: '11px'});
            } else {
                $('.to-top').css({bottom: '-100px'});
            }
        });
        $('.to-top').click(function () {
            $('html, body').animate({scrollTop: '0px'}, 800);
            return false;
        });
    }

    // preloader
    // ---------------------------------------------------------------------------------------
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut(100);
    });

    // Shrink header on scroll
    // ---------------------------------------------------------------------------------------
    function handleAnimatedHeader() {
        var header = $('.header.fixed');
        function refresh() {
            var scroll = $(window).scrollTop();
            if (scroll >= 31) {
                header.addClass('shrink');
            } else {
                header.removeClass('shrink');
            }
        };
        $(window).load(function () { refresh(); });
        $(window).scroll(function () { refresh(); });
        $(window).on('touchstart',function(){ refresh(); });
        $(window).on('scrollstart',function(){ refresh(); });
        $(window).on('scrollstop',function(){ refresh(); });
        $(window).on('touchmove',function(){ refresh(); });

    }

    // handleTabsFAQ
    // ---------------------------------------------------------------------------------------
    function handleTabsFAQ() {
        if($('#tabs-faq').length){
            var tabs = $('#tabs-faq');
            tabs.find('a').on('click', function () {
                tabs.find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-plus');
                $(this).find('.fa').removeClass('fa-plus').addClass('fa-angle-right');
            });
        }
    }

    // resize page
    // ---------------------------------------------------------------------------------------
    function resizePage() {
        if ($('body').hasClass('boxed')) {
            $('#main-slider').find('.page').each(function () {
                $(this).removeAttr('style');
            });
        } else {
            $('.page').css('min-height', $(window).height());
        }
        $('#main-slider').trigger('refresh');
        $('#testimonials').trigger('refresh');
        $('#testimonials').trigger('refresh');
        $('#team-members').trigger('refresh');
        $('#featured-projects').trigger('refresh');
        $('.partners-carousel .owl-carousel').trigger('refresh');

    }

    // INIT FUNCTIONS
    // ---------------------------------------------------------------------------------------
    return {
        onResize: function() {
            resizePage();
            handleStickyMenu();
        },
        init: function () {
            handleStickyMenu();
            handlePreventEmptyLinks();
            handlePlaceholdem();
            handleBootstrapSelect();
            handleHoverClass();
            handleSuperFish();
            handleSmoothScroll();
            handlePrettyPhoto();
            handleToTopButton();
            handleAnimatedHeader();
            handleTabsFAQ();
        },
        // Isotope
        initIsotope: function () {
            var $container = $('.projects');
            // init
            $container.isotope({
                // options
                itemSelector: '.item',
                layoutMode: 'masonry'
            });

            // filter items on button click
            $('#filtrable').on( 'click', 'a', function() {
                var filterValue = $(this).attr('data-filter');
                $("#filtrable li").removeClass("current");
                $(this).parent().addClass("current");
                $container.isotope({ filter: filterValue });
            });
        },
        // Main Slider
        initMainSlider: function () {
            $('#main-slider').owlCarousel({
                //items: 1,
                autoplay: false,
                autoplayHoverPause: true,
                loop: false,
                margin: 0,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0:    {items: 1},
                    479:  {items: 1},
                    768:  {items: 1},
                    991:  {items: 1},
                    1024: {items: 1}
                }
            });

        },
        // CountDown
        initCountDown: function () {
            var austDay = new Date();
            austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
            $('#defaultCountdown').countdown({until: austDay});
            $('#year').text(austDay.getFullYear());
        },
        // Partners Slider
        initPartnerSlider: function () {
            $('.partners-carousel .owl-carousel').owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 2},
                    768:  {items: 3},
                    991:  {items: 5},
                    1024: {items: 6}
                }
            });
        },
        // Testimonials
        initTestimonials: function () {
            $('#testimonials').owlCarousel({
                items: 1,
                autoplay: false,
                loop: true,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 1},
                    768:  {items: 1},
                    991:  {items: 1},
                    1024: {items: 1}
                }
            });
        },
        // Obedience
        initObedience: function () {
            $('.obedience .owl-carousel').owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: false,
                nav: false,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
                responsive: {
                    0:    {items: 3},
                    479:  {items: 5},
                    768:  {items: 10},
                    991:  {items: 12},
                    1024: {items: 15}
                }
            });
        },
        // Team Members
        initTeamMembers: function () {
            $('#team-members').owlCarousel({
                items: 4,
                autoplay: true,
                margin: 20,
                loop: true,
                dots: false,
                nav: false,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 2},
                    768:  {items: 2},
                    991:  {items: 3},
                    1024: {items: 4}
                }
            });
        },
        // Featured Projects
        initFeaturedProjects: function () {
            $('#featured-projects').owlCarousel({
                items: 5,
                autoplay: true,
                loop: true,
                dots: false,
                nav: false,
                navText: [
                    "<i class='fa fa-caret-left'></i>",
                    "<i class='fa fa-caret-right'></i>"
                ],
                responsive: {
                    0:    {items: 1},
                    479:  {items: 2},
                    768:  {items: 3},
                    991:  {items: 4},
                    1024: {items: 4}
                }
            });
        },
        // Animation on Scroll
        initAnimation: function () {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $('*[data-animation]').addClass('animated');
                $('.animated').waypoint(function (down) {
                    var elem = $(this);
                    var animation = elem.data('animation');
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + ' visible');
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + ' visible');
                        }
                    }
                }, {
                    offset: $.waypoints('viewportHeight')
                    //offset: 'bottom-in-view'
                    //offset: '95%'
                });
            }
            // Refresh Waypoints on tab click / animation
            $('#tabs-lv1 li a[data-toggle="tab"]').on('shown.bs.tab', function () { $.waypoints('refresh'); });
            $('#tabs-lv2 li a[data-toggle="tab"]').on('shown.bs.tab', function () { $.waypoints('refresh'); });
        },
        // Google map
        initGoogleMap: function() {
            var map;
            function initialize() {
                var mapOptions = {
                    scrollwheel: false,
                    zoom: 12,
                    center: new google.maps.LatLng(40.9807648, 28.9866516)
                };
                map = new google.maps.Map(document.getElementById('map-canvas'),
                    mapOptions);
            }
            google.maps.event.addDomListener(window, 'load', initialize);
        },
        // Calendar
        initCalendar: function() {
            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,basicWeek,basicDay'
                },
                defaultDate: '2014-09-12',
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                events: [
                    {
                        title: 'All Day Sermons',
                        url: 'single-sermon.html',
                        start: '2014-09-01'
                    },
                    {
                        title: 'Long Event',
                        url: 'single-sermon.html',
                        start: '2014-09-07',
                        end: '2014-09-10'
                    },
                    {
                        id: 999,
                        title: 'Thuesday Sermon',
                        url: 'single-sermon.html',
                        start: '2014-09-02T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Thuesday Sermon',
                        url: 'single-sermon.html',
                        start: '2014-09-09T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Thuesday Sermon',
                        url: 'single-sermon.html',
                        start: '2014-09-16T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Thuesday Sermon',
                        url: 'single-sermon.html',
                        start: '2014-09-23T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Thuesday Sermon',
                        url: 'single-sermon.html',
                        start: '2014-09-30T16:00:00'
                    },
                    {
                        id: 999,
                        title: 'Thuesday Sermon',
                        url: 'single-sermon.html',
                        start: '2014-10-07T16:00:00'
                    },
                    {
                        title: 'Conference',
                        url: 'single-sermon.html',
                        start: '2014-09-11',
                        end: '2014-09-13'
                    },
                    {
                        title: 'Meeting',
                        url: 'single-sermon.html',
                        start: '2014-09-12T10:30:00',
                        end: '2014-09-12T12:30:00'
                    },
                    {
                        title: 'This day sermon',
                        url: 'single-sermon.html',
                        start: '2014-09-12T12:00:00'
                    },
                    {
                        title: 'Large sermon',
                        url: 'single-sermon.html',
                        start: '2014-09-12T14:30:00'
                    },
                    {
                        title: 'Happy Hour',
                        url: 'single-sermon.html',
                        start: '2014-09-12T17:30:00'
                    },
                    {
                        title: 'Meeting',
                        url: 'single-sermon.html',
                        start: '2014-09-12T20:00:00'
                    },
                    {
                        title: 'Holiday sermon',
                        url: 'single-sermon.html',
                        start: '2014-09-13T07:00:00'
                    },
                    {
                        title: 'Another sermon',
                        url: 'single-sermon.html',
                        start: '2014-09-28'
                    }
                ]
            });
        }

    };

}();