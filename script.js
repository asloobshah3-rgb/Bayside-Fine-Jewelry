
$(document).ready(function () {

    // 1. Smooth Scrolling
    $('a[href^="#"]').on('click', function (e) {

        let target = $(this).attr('href');

        if (target.length > 1 && $(target).length) {

            e.preventDefault();

            $('html, body').animate({

                scrollTop: $(target).offset().top - 65

            }, 500);

            // Close Mobile Navbar
            if ($('#mainNavbar').hasClass('show')) {

                $('#mainNavbar').collapse('hide');

            }

        }

    });


    // 2. Newsletter Form Validation
    $('#newsletterForm').on('submit', function (e) {

        e.preventDefault();

        let email = $('#emailInput').val().trim();

        if (email === '') {

            $('#subscribeAlert')
                .text('Please enter your email address.')
                .removeClass('text-success')
                .addClass('text-danger');

            return;

        }

        // Success Message
        $('#subscribeAlert')
            .hide()
            .text('Thank you! Successfully subscribed.')
            .removeClass('text-danger')
            .addClass('text-success')
            .fadeIn(400);

        $('#subscribeBtn')
            .text('SUBSCRIBED')
            .prop('disabled', true);

        $('#emailInput').prop('disabled', true);

    });


    // 3. Category Image Hover
    $('.category-card img').hover(

        function () {

            $(this).stop().animate({
                opacity: 0.8
            }, 200);

        },

        function () {

            $(this).stop().animate({
                opacity: 1
            }, 200);

        }

    );


    // 4. Product Image Hover
    $('.product-image img').hover(

        function () {

            $(this).css('transform', 'scale(1.05)');

        },

        function () {

            $(this).css('transform', 'scale(1)');

        }

    );


    // 5. Service Image Hover
    $('.service-image img').hover(

        function () {

            $(this).css('transform', 'scale(1.05)');

        },

        function () {

            $(this).css('transform', 'scale(1)');

        }

    );


    // 6. Navbar Active Link
    $('.navbar-nav .nav-link').on('click', function () {

        $('.navbar-nav .nav-link').removeClass('active');

        $(this).addClass('active');

    });


    // 7. Back To Top
    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 300) {

            $('#backToTop').fadeIn();

        } else {

            $('#backToTop').fadeOut();

        }

    });


    $('#backToTop').on('click', function () {

        $('html, body').animate({

            scrollTop: 0

        }, 500);

    });


});
