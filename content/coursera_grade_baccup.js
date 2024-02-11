const grade = async () => {
    const enabled1 = await getFromStorage('CRS_3', '');
    if(enabled1==true)
    {
        autoOption();
        autoYesNo();
        autoComment();
    }}

setTimeout(grade(),3000);

function autoOption() {

    setTimeout(function () {
            var checkList = document.querySelectorAll('.rc-OptionsFormPart>div:last-child'); 
            
            // if (checkList.length === 0) {
            //     console.log("No elements found for autoOption");
            //     return;
            // }
            
            checkList.forEach(function (choice) {
                var maxPts=0;
                choice.childNodes.forEach(function (check){
                    const label = check.childNodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML.charAt(0);
                    const input = check.childNodes[0].childNodes[0];
                    if(label>maxPts)
                    {
                        maxPts=label;
                        input.click();
                    }
                    // console.log(check.childNodes[0].childNodes[1].childNodes[0].childNodes[0])
                    // console.log(label)
                })

                //console.log(checkList)
                
                //check.click();
            });
            

        }, 3000);
            
    }
    

function autoComment() {
    const formParts = document.getElementsByClassName("rc-FormPart");
    for (const form of formParts) {
        const t = form.getElementsByClassName(
            "c-peer-review-submit-textarea-field"
        );
        for (let l of t) {
            l.click();
            l.focus();
            document.execCommand("insertText", false, "OK");
        }
    }
}

function autoYesNo() {
    var checkList2 = document.querySelectorAll('.rc-YesNoFormPart>div>div:first-child>label');
    console.log("autoYesNo checkList2:", checkList2);

    checkList2.forEach(function (check) {
        check.click();
    });
}

