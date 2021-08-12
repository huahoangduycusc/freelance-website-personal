var flag = true;
$(document).on('click', '.menu', function (e) {
    flag = !flag;
    if (flag) {
        $(this).find("i").removeClass("bx-menu").addClass("bx-x");
        $(".header-container").addClass("active");
        $(".overflow").addClass("active");
    }
    else {
        $(this).find("i").addClass("bx-menu").removeClass("bx-x");
        $(".header-container").removeClass("active");
        $(".overflow").removeClass("active");
    }

});
$(".overflow").on('click', (e) => {
    flag = false;
    $(".menu").find("i").addClass("bx-menu").removeClass("bx-x");
    $(".header-container").removeClass("active");
    $(".overflow").removeClass("active");
});

// scrool with href with #
$(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href');
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    // add class active if user hit
    $(".nav-item-link").removeClass("active");
    $(this).addClass("active");
    // top position relative to the document
    var pos = $id.offset().top - 120;
    // animated top scrolling
    $('body, html').animate({ scrollTop: pos });
});