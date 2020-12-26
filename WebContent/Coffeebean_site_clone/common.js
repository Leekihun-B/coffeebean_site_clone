$(function() {
    // MD'S PICK slick 효과

    $('.md_pick_1').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        dots: true,
        dotsClass: 'slick-dots',
        autoplaySpeed: 3500,
        speed: 2800,
    });

    // What's new 효과

    $('.what_new_1').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        speed: 2800,
    });

    /** MD'S PICK slick - button play pause */

    $(".button1-1").click(function() {
        var a = $(".button1-1").hasClass("button1-2");
        $(".button1-1").toggleClass("button1-2");
        if (!a) {
            $('.md_pick_1').slick('slickPause');
        } else {
            $('.md_pick_1').slick('slickPlay');
        }
    });

    /** What's new slick - button play pause */

    $(".button2-1").click(function() {
        var a = $(".button2-1").hasClass("button2-2");
        $(".button2-1").toggleClass("button2-2");
        if (!a) {
            $('.what_new_1').slick('slickPause');
        } else {
            $('.what_new_1').slick('slickPlay');
        }
    });


    /** MD'S PICK slick - QuickView box hover 적용 */

    $(".md_pick_1_hover").mouseenter(function() {
        $(".md_pick_1_box_quick").addClass("md_pick_1_box_quick1");
        $(".md_pick_1_box_quick1").css("display", "block");
    });

    $(".md_pick_1_hover").mouseleave(function() {
        $(".md_pick_1_box_quick1").css("display", "none");
        $(".md_pick_1_box_quick").removeClass("md_pick_1_box_quick1");
    });

    $(".md_pick_2_hover").mouseenter(function() {
        $(".md_pick_2_box_quick").addClass("md_pick_2_box_quick1");
        $(".md_pick_2_box_quick1").css("display", "block");
    });

    $(".md_pick_2_hover").mouseleave(function() {
        $(".md_pick_2_box_quick1").css("display", "none");
        $(".md_pick_2_box_quick").removeClass("md_pick_2_box_quick1");
    });

    $(".md_pick_3_hover").mouseenter(function() {
        $(".md_pick_3_box_quick").addClass("md_pick_3_box_quick1");
        $(".md_pick_3_box_quick1").css("display", "block");
    });

    $(".md_pick_3_hover").mouseleave(function() {
        $(".md_pick_3_box_quick1").css("display", "none");
        $(".md_pick_3_box_quick").removeClass("md_pick_3_box_quick1");
    });

    $(".md_pick_4_hover").mouseenter(function() {
        $(".md_pick_4_box_quick").addClass("md_pick_4_box_quick1");
        $(".md_pick_4_box_quick1").css("display", "block");
    });

    $(".md_pick_4_hover").mouseleave(function() {
        $(".md_pick_4_box_quick1").css("display", "none");
        $(".md_pick_4_box_quick").removeClass("md_pick_4_box_quick1");
    });

    $(".md_pick_5_hover").mouseenter(function() {
        $(".md_pick_5_box_quick").addClass("md_pick_5_box_quick1");
        $(".md_pick_5_box_quick1").css("display", "block");
    });

    $(".md_pick_5_hover").mouseleave(function() {
        $(".md_pick_5_box_quick1").css("display", "none");
        $(".md_pick_5_box_quick").removeClass("md_pick_5_box_quick1");
    });

    $(".md_pick_6_hover").mouseenter(function() {
        $(".md_pick_6_box_quick").addClass("md_pick_6_box_quick1");
        $(".md_pick_6_box_quick1").css("display", "block");
    });

    $(".md_pick_6_hover").mouseleave(function() {
        $(".md_pick_6_box_quick1").css("display", "none");
        $(".md_pick_6_box_quick").removeClass("md_pick_6_box_quick1");
    });

    $(".md_pick_7_hover").mouseenter(function() {
        $(".md_pick_7_box_quick").addClass("md_pick_7_box_quick1");
        $(".md_pick_7_box_quick1").css("display", "block");
    });

    $(".md_pick_7_hover").mouseleave(function() {
        $(".md_pick_7_box_quick1").css("display", "none");
        $(".md_pick_7_box_quick").removeClass("md_pick_7_box_quick1");
    });

    $(".md_pick_8_hover").mouseenter(function() {
        $(".md_pick_8_box_quick").addClass("md_pick_8_box_quick1");
        $(".md_pick_8_box_quick1").css("display", "block");
    });

    $(".md_pick_8_hover").mouseleave(function() {
        $(".md_pick_8_box_quick1").css("display", "none");
        $(".md_pick_8_box_quick").removeClass("md_pick_8_box_quick1");
    });


    /** 커피빈이미지 클릭시 로그인 회원가입 box 생성, 제거 및  boder padding-top 변경 */
    $(".li1_img").click(function() {
        $(".main_login").slideToggle(200);
        $(".main_login").toggleClass("main_login1");
        $(".boder").toggleClass("boder1");
        $(".li1_img").toggleClass("li1_img1");
    });

    /** 메뉴 hover 기능 구현 */
    $(".li2_1").hover(function() {
        $(".li2_a").toggleClass("li2_a_1");
        $(".li2_1_box").fadeToggle(200);
        $(".li2_1_box").toggleClass("li2_1_box1");
    });

    $(".li2_2").hover(function() {
        $(".li2_b").toggleClass("li2_b_1");
        $(".li2_2_box").fadeToggle(200);
        $(".li2_2_box").toggleClass("li2_2_box1");
    });

    $(".li2_3").hover(function() {
        $(".li2_c").toggleClass("li2_c_1");
        $(".li2_3_box").fadeToggle(200);
        $(".li2_3_box").toggleClass("li2_3_box1");
    });

    $(".li2_4").hover(function() {
        $(".li2_d").toggleClass("li2_d_1");
        $(".li2_4_box").fadeToggle(200);
        $(".li2_4_box").toggleClass("li2_4_box1");
    });

    $(".li2_5").hover(function() {
        $(".li2_e").toggleClass("li2_e_1");
        $(".li2_5_box").fadeToggle(200);
        $(".li2_5_box").toggleClass("li2_5_box1");
    });

    $(".li2_6").hover(function() {
        $(".li2_f").toggleClass("li2_f_1");
        $(".li2_6_box").fadeToggle(200);
        $(".li2_6_box").toggleClass("li2_6_box1");
    });

    $(".search_icon").click(function() {
        $(".search_place").slideToggle(300);
        $(".search_icon").toggleClass("search_icon1");
        $(".search_place").toggleClass("search_place1");
    });

});