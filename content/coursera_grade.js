const grade = async () => {
    const enabled1 = await getFromStorage('CRS_3', '');
    if(enabled1==true)
    {
        autoOption();
    }}

    grade();

    function autoOption() {
        setTimeout(function () {
            var checkList = document.querySelectorAll('.rc-OptionsFormPart>div>div:last-child>label'); 
            checkList.forEach(function (check) {
                check.click();
            });
            setTimeout(autoYesNo, 1000);
            // Call autoComment() after autoOption() completes
            setTimeout(autoComment, 1000);
        }, 3000);
    }
    
    function autoComment() {
        const divs = document.querySelectorAll("div.rc-MultiLineInputFormPart");
        if (divs.length === 0) {
            autoOption();
            return;
        }
        divs.forEach(div => {
            const textarea = div.querySelector("textarea");
            textarea.value = "Ok";
        });
    }
    
    function autoYesNo(){
        var checkList2 = document.querySelectorAll('.rc-YesNoFormPart>div>div:first-child>label');
        if(checkList2.length === 0){
            autoOption();
            return;
        }
        checkList2.forEach(function (check) {
            check.click();
        });
    }
    

    