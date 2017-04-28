$(document).ready(function() {
    $.get("imports/nav.html", function(data){
        $("#nav").replaceWith(data);
        //console.log(location.pathname);
        $("a[href='" + location.pathname + "']").addClass("current");
    });
});
