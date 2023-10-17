function reply_click(clicked_id)
{
    $('#' + clicked_id).addClass('greyOut');
    localStorage.setItem(clicked_id, 'true');
}

function load_grey(clicked_id)
{
    var isGrey = localStorage.getItem(clicked_id)
    if (isGrey) {
        $('#' + clicked_id).addClass('greyOut');
    }
}

 /*localStorage.clear();*/