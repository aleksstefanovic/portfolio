$(document).ready(function() {
    $.get("imports/nav.html", function(data){
        $("#nav").replaceWith(data);
        //console.log(location.pathname);
        $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'imports/nav.css') );
        if ($(window).width() <= 720) {
            //console.log("disabled dropdown on mobile");
            $("ul[class='nav']>li[class='dropdown'").removeClass("dropdown");
        }
        $("a[href='" + location.pathname + "']").addClass("current");
    });
});
