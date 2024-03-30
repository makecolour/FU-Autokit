
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

const grade = async () => {
    const enabled1 = await getFromStorage('CRS_3', '');
    const lang = await getFromStorage('LANG', '');
    if (enabled1 == true) {
        fetch(chrome.runtime.getURL(lang)).then(response => response.json()).then(messages => {
            Object.assign(label, messages);
            autoOption();
            autoYesNo();
            autoComment();
        });

    }
}

document.addEventListener('DOMContentLoaded', setTimeout(grade(), 1000));