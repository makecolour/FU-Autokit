const main = async () => {
    const enabled = await getFromStorage('CMS_1', '');
    const k19 = await getFromStorage('K', '');
    if (enabled == true) {

        var divs = document.querySelectorAll('.login');
        if (divs.length > 0) {
            divs[0].lastElementChild.click();
        }
        else if (k19 == false) {
            var divs = document.querySelectorAll('.btn-secondary[title="fpt.edu.vn"]');
            for (i = 0; i < divs.length; ++i) {
                divs[i].click();
            };
        }
        else if (k19 == true) {
            var divs = document.getElementsByClassName("btn-primary");
            console.log(divs)
            for (i = 0; i < divs.length; ++i) {
                if (divs[i].innerHTML == "Login with FEID") {
                    divs[i].click();
                }
            };
        }
    }

}
main();
