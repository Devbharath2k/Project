AOS.init();

$(document).ready(function() {
    resizeFullHeightSection();

    // Handle window resize events to update the section height
    $(window).resize(function() {
        resizeFullHeightSection();
    });
});

function resizeFullHeightSection() {
    var windowHeight = $('.scroll section').height();
    $(".scroll-next").css("margin-top", `calc( 100vh + ${windowHeight/2 +'px'} )`);
}

var mbnew = $('.card-img-overlay').height();

$('.hero-banner').css("margin-bottom", mbnew ,'+px')