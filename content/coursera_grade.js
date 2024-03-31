const label = {};
function autoOption() {
    var checkList = document.querySelectorAll('.rc-OptionsFormPart>div>div:first-child>label');
    console.log("autoOption checkList:", checkList);

    if (checkList.length == 0) {
        console.log("No elements found for autoOption");
        return;
    }

    var optionContent = checkList[0].querySelector('.option-contents>div:first-child>span').innerHTML.trim();
    console.log("autoOption optionContent:", optionContent);

    if (optionContent.charAt(0) == '0') {
        checkList = document.querySelectorAll('.rc-OptionsFormPart>div>div:last-child>label');
        console.log("autoOption updated checkList:", checkList);

        checkList.forEach(function (check) {
            check.click();
        });
    } else {
        checkList.forEach(function (check) {
            check.click();
        });
    }

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
            document.execCommand("insertText", false, label.review.message);
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

function grade() {
    setTimeout(() => {autoOption();
        autoYesNo();
        autoComment();}, 10000);
        
}
const fetchDataAndGrade = async() => {
    const lang = await getFromStorage('LANG', '');
    const res = await fetch(chrome.runtime.getURL(lang));
    const messages = await res.json();
    Object.assign(label, messages);
    const enabled1 = await getFromStorage('CRS_3', '');
    console.log(label)
    if (enabled1 == true) {
    // Call grade() after the fetch operation is complete
    grade();}
}
//setTimeout(grade(), 4000);
//document.addEventListener('load', (e) =>{setTimeout(fetchDataAndGrade(), 1500)});
//document.addEventListener('load', ()=>{console.log("DOM loaded")});
window.addEventListener('load', function() {
    setTimeout(fetchDataAndGrade, 500);
});

//setTimeout(fetchDataAndGrade(), 7000);