const main = async () => {
    const enabled = await getFromStorage('CMS_1', '');
    if(enabled==true)
    {
        if(enabled.CMS_1==true)
        {
            
        }
        var check = false;
        var divs = document.querySelectorAll('.login');
        if (divs.length > 0) {
            check = true;
        }
        if (window.location.href != "https://cmshn.fpt.edu.vn/login/index.php" && check == true) {
            window.location.replace("https://cmshn.fpt.edu.vn/login/index.php");
        }
        else {
            var divs = document.querySelectorAll('.btn-secondary');
            for (i = 0; i < divs.length; ++i) {
                divs[i].click();
            };
        }
    }
}
main();
