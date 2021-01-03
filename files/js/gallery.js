$(function () {
    $('.gallery-item img').click(function() {
        var loc = $(this).attr("src");
        $('.gallery-ol').fadeIn(200, "linear");
        $('.gallery-expand').fadeIn(200, "linear");
        $('.gallery-expand img').attr("src",loc);
        $('.navbar.sticky-top').css("z-index", "1");
    });
    $(".gallery-ol").on('click', function (e) {
        if (e.target.className != "cont") {
            $('.gallery-ol').fadeOut(200, "linear");
            $('.gallery-expand').fadeOut(200, "linear");
            $('.gallery-expand img').attr("src","");
        }
    });
    $('.gallery-expand .close').click(function() {
        $('.gallery-ol').fadeOut(200, "linear");
        $('.gallery-expand').fadeOut(200, "linear");
        $('.gallery-expand img').attr("src","");
    });
});

var gallArray = [];
$(document).ready(function(){
    $(".img-fullwidth").each(function() {
       imgsrc = $(this).attr("src");
       gallArray.push(imgsrc);
    });
});

function getPrev() {
    var curr = $(".gallery-expand img").attr("src");
    var i, repl;

    for(i=0; i < gallArray.length; i++) {
        if(curr == gallArray[0])
            repl = gallArray[gallArray.length - 1];
        if(gallArray[i]==curr)
            repl = gallArray[i-1];
    }
    $('.gallery-expand img').attr("src",repl);
}
function getNext() {
    var curr = $(".gallery-expand img").attr("src");
    var i, repl;
    for(i=0; i < gallArray.length; i++) {
        if(gallArray[i]==curr)
            repl = gallArray[i+1];
        if(gallArray[gallArray.length - 1] == curr)
            repl = gallArray[0];
    }
    $('.gallery-expand img').attr("src",repl);
}
