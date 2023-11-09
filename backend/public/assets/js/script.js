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
$(document).ready(function() {
    var rocketContainer = $("#rocket-container");
    var rocket = $("#rocket").height();

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var websiteHeight = $("body").height();

        var percentage = (scrollPos / (websiteHeight - windowHeight)) * 100;

        rocketContainer.css("bottom", `calc(${percentage}%)`);
        rocketContainer.css("transform", `translate(0, ${percentage}%)`);
    });

});

var mbnew = $('.card-img-overlay').height()+100;

$('.hero-banner').css("margin-bottom", mbnew ,'+px')