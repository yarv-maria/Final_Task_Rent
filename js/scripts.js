$(window).ready(function () {

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 500)
    }, 500);

    /*----------------- MODAL-CALLBACK ----------------*/

    $('.get-modal-callback').click(function () {
        $('.modal-callback').fadeIn(400).css('display', 'flex');
    });

    $('.modal-callback').click(function (event) {
        var clickedElement = event.target;
        if(!$(clickedElement).closest('.modal-inner').length) {
            $('.modal-callback').fadeOut(400);
        }
        if($(clickedElement).hasClass('close-modal')) {
            $('.modal-callback').fadeOut(400);
        }
    });

    /*----------------- MODAL-MORE-INFO ----------------*/

    $('.get-modal-more-info').click(function () {
        $('.modal-more-info').fadeIn(400).css('display', 'flex');
    });

    $('.modal-more-info').click(function (event) {
        var clickedElement = event.target;
        if(!$(clickedElement).closest('.modal-inner').length) {
            $('.modal-more-info').fadeOut(400);
        }
        if($(clickedElement).hasClass('close-modal')) {
            $('.modal-more-info').fadeOut(400);
        }
    });

    /*----------------- BURGER ----------------*/
    
    $('.burger').click(function () {
        $(this).toggleClass('fa-close fa-bars');
        $('.header-menu').toggleClass('active');
    });

    /*----------------- MOVE CALLBACK-PHONE ----------------*/

    if ($(window).width() <= 760) {
        $('header .callback-phone').appendTo('.header-menu');
    }

    $(window).resize(function () {
        if ($(window).width() <= 760) {
            $('header .callback-phone').appendTo('.header-menu');
        } else {
            $('.header-menu .callback-phone').prependTo('header .callback');
        }
    });

    /*----------- SCROLL OF THE ANCHOR ----------------*/

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('body, html').animate({scrollTop: $(target).offset().top - $('header').height()}, 1000);
        $('.burger').toggleClass('fa-close fa-bars');
        $('.header-menu').toggleClass('active');
        return false;
    });

});

