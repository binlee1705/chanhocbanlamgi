//"use strict"; 
function owlslide(num, margin, autoplay, dot, nav, items, animateIn, animateOut) {
    var option = {
        items: num,
        autoplay: num > items[0] ? autoplay : false,
        autoplayTimeout: 5000,
        smartSpeed: 1500,
        loop: num > 1,
        nav: num > items[0] ? nav : false,
        dots: num > items[0] ? dot : false,
        autoplayHoverPause: true,
        margin: margin[0],
        lazyLoad: true,
        navText: [''],
        animateIn: animateIn,
        animateOut: animateOut,
        responsive: {
            0: {
                items: items[4],
                margin: margin[4],
                autoplay: num > items[4] ? autoplay : false,
                nav: num > items[4] ? nav : false,
                dots: num > items[4] ? dot : false,
            },
            479: {
                items: items[3],
                margin: margin[3],
                autoplay: num > items[3] ? autoplay : false,
                nav: num > items[3] ? nav : false,
                dots: num > items[3] ? dot : false,
            },
            767: {
                items: items[2],
                margin: margin[2],
                autoplay: num > items[2] ? autoplay : false,
                nav: num > items[2] ? nav : false,
                dots: num > items[2] ? dot : false,
            },
            991: {
                items: items[1],
                margin: margin[1],
                autoplay: num > items[1] ? autoplay : false,
                nav: num > items[1] ? nav : false,
                dots: num > items[1] ? dot : false,
            },
            1199: {
                items: items[0],
                margin: margin[0],
                autoplay: num > items[0] ? autoplay : false,
                nav: num > items[0] ? nav : false,
                dots: num > items[0] ? dot : false,
            }
        }
    }
    return option;
}

$(document).ready(() => {
    $('html').on('click', ".tabs .tab-links a",
        function (e) {
            var currentAttrValue = $(this).attr('href');
            $('.tabs ' + currentAttrValue).addClass("active").siblings().removeClass("active");
            $(this).parent('li').addClass('active').siblings().removeClass('active');
            e.preventDefault();
        });
    // $(".marquee").marquee({ duration: 20000, gap: 20, delayBeforeStart: 0, direction: "left", duplicated: true, pauseOnHover: true });

    $('#slide .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [0, 0, 0, 0, 0, 0], true, true, true, [1, 1, 1, 1, 1], "fadeIn", "fadeOut"));
    });
    $('#gallery .group').each(function () {
        $(this).owlCarousel(owlslide($(this).find('>*').size(), [20, 20, 20, 20, 20, 20], true, true, true, [4, 4, 4, 4, 4], "", ""));
    });
    $("#lstQA .ques").click(function () {
        if (!$(this).parents(".item").hasClass("ac")) {
            $("#lstQA .item").removeClass("ac")
            $("#lstQA .item .ans").slideUp();
            $(this).parents(".item").addClass("ac");
            $(this).next(".ans").slideDown();
        }
    })
});


var size = parseInt($(".noidung").css("font-size")),
    lineheight = parseInt($(".noidung").css("line-height"));
size || (size = 16);
lineheight || (lineheight = 24);

function Increasenoidung() {
    size++;
    lineheight += 2;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText",
        "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}
function Decreasenoidung() {
    size--;
    lineheight -= 2;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText",
        "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}
function Resetnoidung() {
    size = 16;
    lineheight = 24;
    $(".noidung").css("cssText", "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
    $(".noidung").find("*").css("cssText",
        "font-size:" + size + "px !important; line-height:" + lineheight + "px !important");
}
