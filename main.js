$(function() {
    const section = $("section");
    const menu = $(".menu");
    const navHeight = menu.outerHeight(); // получаем высоту навигации
    // поворот экрана
//   window.addEventListener("orientationchange", () => {
//       navHeight = nav.outerHeight();
//   }, false);
    $(window).on("scroll", () => {
        const position = $(this).scrollTop();
        section.each(function () {
            const top = $(this).offset().top - 100,
                bottom = top + $(this).outerHeight();
            if (position >= top && position <= bottom) {
                menu.find("a").removeClass("active");
 //               $(this).addClass("active");
                menu.find('a[href^="#' + $(this).attr('id') + '"]').addClass("active");
            };
        });
    });
    menu.find("a").on("click", function () {
        const id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(id).offset().top - navHeight
        }, 487);
        return false;
    });
});

$(function(){
    $(".btn_menu").click(function(){
        if ($(".menu_x").hasClass("show")){
            $(".menu_x").removeClass("show");
        } else {
            $(".menu_x").addClass("show");
        }
    });
});
