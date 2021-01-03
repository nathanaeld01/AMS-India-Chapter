const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 769px)").matches) {
    $dropdown.hover(
        function() {
            $($dropdownMenu, this).not($dropdownMenu).stop(true,true).slideDown("500");
            $(this).toggleClass('show');
        },
          function() {
            $($dropdownMenu, this).not($dropdownMenu).stop(true,true).slideUp("500");
            $(this).toggleClass('show');
        }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var topHead = parseFloat($('#header').css("height"), 10);
    if(scroll >= topHead) {
        $('.navbar').addClass('sticky-top');
    }
    else {
        $('.navbar').removeClass('sticky-top');
    }
});
