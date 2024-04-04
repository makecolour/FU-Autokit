const lang = document.getElementById("language");
const main = async () => {
    const enabled = await getFromStorage('FLM_2', '');
    const language = await getFromStorage('LANG', '');
    if (enabled == true) {
        if (language.includes('vi') && lang.value != 'vi') {
            changeLang("vi");
        }
        else if (language.includes('en') && lang.value != 'en') {
            changeLang("en");
        }
    }
}
window.onload = main();

function changeLang(label = "vi") {
    $.ajax({
        url: '/Language', // comma here instead of semicolon  
        data: { language: label },
        success: function () {
            window.location.reload();
        }
    });
}