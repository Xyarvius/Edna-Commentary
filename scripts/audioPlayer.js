var currentSong = 0;
$("#playlist li a, #oops").click(function(e){
    e.preventDefault(); 
    $("#audioPlayer")[0].src = this;
    $("#audioPlayer")[0].play();
    $("#playlist li").removeClass("current-song");
    currentSong = $(this).parent().index();
    $(this).parent().addClass("current-song");
});

$("#audioPlayer")[0].addEventListener("ended", function(){
    var makeGrey = localStorage.getItem('last_clicked')
    $('#' + makeGrey).addClass('greyOut');
    localStorage.setItem(makeGrey, 'true');
});