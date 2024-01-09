const lang = document.getElementById("language");


if (lang.value!='vi')
{
    changeLang();
}


function changeLang(){
    $.ajax({
        url: '/Language', // comma here instead of semicolon  
        data: { language: 'vi' },
        success: function () {
                window.location.reload();
        }
    });
}