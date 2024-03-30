const main = async () => {
    const enabled = await getFromStorage('LBR_1', '');
    if (enabled == true) {
        var divs = document.querySelectorAll('.active');

        for (i = 0; i < divs.length; ++i) {
            if (divs[i].innerHTML == "Login") {
                divs[i].click();
                break;
            }
        };

    }
}
main()