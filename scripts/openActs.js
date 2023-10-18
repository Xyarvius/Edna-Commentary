function openAct(actName) {
    var i;
    var x = document.getElementsByClassName("act");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(actName).style.display = "block";
}