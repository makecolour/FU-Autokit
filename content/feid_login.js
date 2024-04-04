const url = window.location.href;
const loginBtn = document.getElementsByClassName("btn-outline-primary");
const main = async () => {
    const fap1_ = await getFromStorage('FAP_1', '');
    const cms1_ = await getFromStorage('CMS_1', '');
    const flm1_ = await getFromStorage('FLM_1', '');
    const edn1_ = await getFromStorage('EDN_1', '');
    const gen_ = await getFromStorage('K', '');

    const checkFap = (url.includes("fap.fpt.edu.vn") && fap1_ == true)
    const checkCms = (url.includes("cmshn.fpt.edu.vn") && cms1_ == true)
    const checkFlm = (url.includes("flm.fpt.edu.vn") && flm1_ == true)
    const checkEdn = (url.includes("fu-edunext.fpt.edu.vn") && edn1_ == true)
    const checkK19 = (url.includes("feid.fpt.edu.vn") && gen_ == true)

    if (checkFap && checkK19 || checkCms && checkK19 || checkFlm && checkK19 || checkEdn && checkK19) {
        for (let i = 0; i < loginBtn.length; i++) {
            if (loginBtn[i].innerHTML.includes("Email fpt.edu.vn hoặc Gmail")) {
                loginBtn[i].click();
            }

        }
    }
}
window.onload = main();