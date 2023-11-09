AOS.init();

$(document).ready(function () {
    resizeFullHeightSection();

    // Handle window resize events to update the section height
    $(window).resize(function () {
        resizeFullHeightSection();
    });
});

function resizeFullHeightSection() {
    var windowHeight = $('.scroll section').height();
    $(".scroll-next").css("margin-top", `calc( 100vh + ${windowHeight / 2 + 'px'} )`);
}
$(document).ready(function () {
    var rocketContainer = $("#rocket-container");
    var rocket = $("#rocket").height();

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var websiteHeight = $("body").height();

        var percentage = (scrollPos / (websiteHeight - windowHeight)) * 100;

        rocketContainer.css("bottom", `calc(${percentage}%)`);
        rocketContainer.css("transform", `translate(0, ${percentage}%)`);
    });

});

var mbnew = $('.card-img-overlay').height() + 100;

$('.hero-banner').css("margin-bottom", mbnew, '+px')

$(document).ready(function () {
    var previousScroll = 0;

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();

        if ($(this).scrollTop() > 200) {
            $('.nav-holder').addClass('nav-animate');
            if ($(this).scrollTop() > window.innerHeight && currentScroll < previousScroll) {
                // Scrolling down
                $('.nav-holder').addClass('nav-fixed');
            } else {
                $('.nav-holder').removeClass('nav-fixed');
            }
        } else {
            // Scrolling up
            $('.nav-holder').removeClass('nav-animate');
        }

        previousScroll = currentScroll;
    });
});
