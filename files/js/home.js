$(document).ready(function() {
    function changeCSS(winWidth) {
        var scrWidth = winWidth;
        $('.carousel-caption').each(function() {
            var topCSS = $(this).data("top");

            if(window.matchMedia("(min-width: 320px)").matches) {
                $(this).css("top", topCSS[0]+'px');
            }
            if(window.matchMedia("(min-width: 768px)").matches) {
                $(this).css("top", topCSS[1]+'px');
            }
            if(window.matchMedia("(min-width: 1024px)").matches) {
                $(this).css("top", topCSS[2]+'px');
            }
            if(window.matchMedia("(min-width: 1200px)").matches) {
                $(this).css("top", topCSS[3]+'px');
            }
        });
    }
    function progBar(ms) {
        $('.carousel-bar').css("width", "0%");
        $('.carousel-bar').animate(
            {width: "100%"},
            ms,
            "linear",
            function() {
                progBar(ms, true);
                $('.carousel').carousel('next');
            }
        );
    }
    setInterval(function() {
        changeCSS($(window).innerWidth());
    }, 1);
    var milisec = $(".carousel").data("int");

    if(milisec != false) {
        var ms = parseInt(milisec);
        progBar(ms);
        $('a[class^="carousel-control-"]').on('click', function(e) {
            progBar(ms);
        });
        $(".carousel-indicators li").click(function(){
            if(!$(this).hasClass('active')){
                progBar(ms);
            }
        });
        $(".carousel").hover(function(){
            $('.carousel-bar').pause();
        }, function() {
            $('.carousel-bar').resume();
        });
        $(window).focus(function() {
            $('.carousel-bar').resume();
            $(".carousel").hover(function(){
                $('.carousel-bar').pause();
            }, function() {
                $('.carousel-bar').resume();
            });
        });
        $(window).blur(function() {
            $('.carousel-bar').pause();
        });
    }
});
