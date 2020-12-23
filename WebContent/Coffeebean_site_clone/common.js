// MD'S PICK slick 효과
$('.md_pick_1').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    dots: true,
    dotsClass: 'slick-dots',
    autoplaySpeed: 3800,
    speed: 2800
});

// What's new 효과

$('.what_new_1').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3600,
    speed: 2800
});

/** button play pause */

$(".button1-1").click(function() {
    $(this).addClass("button1-2");
});

$(".button1-2").click(function() {
    $(this).removeClass("button1-2");
});