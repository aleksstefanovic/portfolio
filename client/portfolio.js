$(document).ready(function() {
    $.get("/imports/nav.html", function(data){
        $("#nav").replaceWith(data);
        //console.log(location.pathname);
        $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/imports/nav.css') );
        if ($(window).width() <= 720) {
            //console.log("disabled dropdown on mobile");
            $("ul[class='nav']>li[class='dropdown'").removeClass("dropdown");
        }
        $("a[href='" + location.pathname + "']").addClass("current");
    });
});

function validateContact () {
    var name = document.forms["contactform"]["name"].value;
    var email = document.forms["contactform"]["email"].value;
    var body = document.forms["contactform"]["body"].value;
    //console.log(name,email,body);

    if (!name) {
        alert ("You must provide a name");
        return false;
    }
    if (!email) {
        alert ("You must provide an email address");
        return false;
    }
    if (!body) {
        alert ("You must provide an body");
        return false;
    }
    return true;
}
