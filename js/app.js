var flag = true;
$(document).on('click', '.menu', function (e) {
    flag = !flag;
    if (flag) {
        $(this).find("i").removeClass("bx-menu").addClass("bx-x white");
        $(".header-container").addClass("active");
        $(".overflow").addClass("active");
    }
    else {
        $(this).find("i").addClass("bx-menu").removeClass("bx-x white");
        $(".header-container").removeClass("active");
        $(".overflow").removeClass("active");
    }

});
$(".overflow").on('click', (e) => {
    flag = false;
    $(".menu").find("i").addClass("bx-menu").removeClass("bx-x white");
    $(".header-container").removeClass("active");
    $(".overflow").removeClass("active");
});