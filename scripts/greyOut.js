function reply_click(clicked_id)
{
    localStorage.setItem('last_clicked', clicked_id);
}

function load_grey(clicked_id)
{
    var isGrey = localStorage.getItem(clicked_id)
    if (isGrey) {
        $('#' + clicked_id).addClass('greyOut');
    }
}

 /*localStorage.clear();*/