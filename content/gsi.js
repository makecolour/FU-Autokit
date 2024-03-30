const url = window.location.href;
const emailEl = document.querySelectorAll(".fFW7wc-ibnC6b-K4efff");
console.log(emailEl);
const main = async () => {
    const email = await getFromStorage('STUDENT_EMAIL', '');
    const edn1_ = await getFromStorage('EDN_1', '');
    const flm1_ = await getFromStorage('FLM_1', '');
    const fap1_ = await getFromStorage('FAP_1', '');
    if ((url.includes("flm.fpt.edu.vn") && flm1_ == true) || (url.includes("fu-edunext.fpt.edu.vn") && edn1_ == true) || (url.includes("googleauthensite01.fpt.edu.vn") && fap1_ == true)) {
        setTimeout(() => {
            for (var i = 0; i < emailEl.length; i++) {
                if (emailEl[i].innerHTML == email.toLowerCase()) {
                    const child = emailEl[i];
                    child.click();
                    //console.log(child);
                    child.parentElement.click();
                    child.parentElement.parentElement.click();
                    child.parentNode.click();
                    const loginBtn = child.parentElement.parentElement;
                    loginBtn.click();
                    //console.log(loginBtn);
                }
            }
        }, 500);
        setTimeout(() => {
            for (var i = 0; i < emailEl.length; i++) {
                if (emailEl[i].innerHTML == email.toLowerCase()) {
                    const child = emailEl[i];
                    child.click();
                    //console.log(child);
                    child.parentElement.click();
                    child.parentElement.parentElement.click();
                    child.parentNode.click();
                    const loginBtn = child.parentElement.parentElement;
                    loginBtn.click();
                    //console.log(loginBtn);
                }
            }
        }, 1000);
        setTimeout(() => {
            for (var i = 0; i < emailEl.length; i++) {
                if (emailEl[i].innerHTML == email.toLowerCase()) {
                    const child = emailEl[i];
                    child.click();
                    //console.log(child);
                    child.parentElement.click();
                    child.parentElement.parentElement.click();
                    child.parentNode.click();
                    const loginBtn = child.parentElement.parentElement;
                    loginBtn.click();
                    //console.log(loginBtn);
                }
            }
        }, 1500);
    }

    else {
        console.log("nothing happened");
    }

}
main();
