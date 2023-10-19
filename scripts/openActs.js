function openAct(actName, clicked_id) {
    var i;
    var x = document.getElementsByClassName("act");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(actName).style.display = "block";
    
    $(".buttons.currentTab").removeClass("currentTab");
    $('#' + clicked_id).addClass('currentTab');
}