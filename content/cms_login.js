const main = async () => {
    const enabled = await getFromStorage('CMS_1', '');
    if(enabled==true)
    {
        var divs = document.querySelectorAll('.login');
        if (divs.length > 0) {
            divs[0].lastElementChild.click();
        }
        else {
            var divs = document.querySelectorAll('.btn-secondary[title="fpt.edu.vn"]');
            for (i = 0; i < divs.length; ++i) {
                divs[i].click();
            };
        }
    }
}
main();
