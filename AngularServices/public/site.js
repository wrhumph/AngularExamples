
function create_menu(target)
{
    var html = "<ul class='list-unstyled'>"
             + "<li><a href='index.html'>Contents</a></li>"       
             + "<li><a href='angular1.html'>Basic Module and Controller</a></li>"       
             + "<li><a href='angular2.html'>Provider Example</a></li>"
             + "<li><a href='angular3.html'>Provider with Customization</a></li>"
             + "<li><a href='angular4.html'>Factory Example</a></li>"       
             + "<li><a href='undefined.html'>Service Example</a></li>"       
             + "</ul>";
    $(target).html(html);
}