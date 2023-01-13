
// ***************************************
// *********** Mobile Nav Menu ***********
// ***************************************

$("#spark-portal").hide();
$(".toggleMenu").click(function(){
    $(".toggleMenu").toggleClass("mobile-menu_menuOpen");
    $(".sub_header").toggleClass("!hidden");
    $("html").toggleClass("no-scroll");
    $("#spark-portal").slideToggle();
});

// *********** End ***********


// ***************************************
// *********** Video Play Action ***********
// ***************************************
$(".play-video-ui").hide();
$(".video_playshow").click(function(){
    $(".play-video-ui").toggle();
});
// video_playButton


// *********** End ***********



// ***************************************
// *********** Initiate Animation on Scroll ***********
// ***************************************

AOS.init();

// *********** End ***********