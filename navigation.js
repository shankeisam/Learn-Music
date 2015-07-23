
function createNavigation(radius) {
    elements = $("#navigation").children().length;

    $('#navigation').children().each(function(index) {
        var rotation = (360 / elements) * index + 90;
        var negRot = rotation * -1;
        //alert(index);
        $(this).css({
            "transform": "rotate(" + rotation + "deg) translate(" + radius + "em) rotate(" + negRot + "deg)"
        });
    });
}
