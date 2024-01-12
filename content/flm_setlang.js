const lang = document.getElementById("language");
const main = async () => {
    const enabled = await getFromStorage('FLM_2', '');
    if(enabled==true)
    {

if (lang.value!='vi')
{
    changeLang();
}
    }}
    main();

function changeLang(){
    $.ajax({
        url: '/Language', // comma here instead of semicolon  
        data: { language: 'vi' },
        success: function () {
                window.location.reload();
        }
    });
}