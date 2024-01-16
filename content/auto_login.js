const url = window.location.href;
const main = async () => {
    const email = await getFromStorage('STUDENT_EMAIL', '');
    const fap1_ = await getFromStorage('FAP_1', '');
    const edn1_ = await getFromStorage('EDN_1', '');
    const cms1_ = await getFromStorage('CMS_1', '');
    const crs1_ = await getFromStorage('CRS_1', '');
    const flm1_ = await getFromStorage('FLM_1', '');
    const gen_ = await getFromStorage('K', '');

if((url.includes("fap.fpt.edu.vn")&&gen_==false&&fap1_==true)||(url.includes("cmshn.fpt.edu.vn")&&gen_==false&&cms1_==true)||(url.includes("www.coursera.org")&&gen_==false&&crs1_==true)||(url.includes("flm.fpt.edu.vn")&&flm1_==true)||(url.includes("fu-edunext.fpt.edu.vn")&&edn1_==true)||(url.includes("feid.fpt.edu.vn")&&gen_==true))
{
    document.querySelector("#identifierId").setAttribute('value', email);
    // setTimeout(() => {
    //     const nextBtn = document.querySelector(".VfPpkd-Jh9lGc");
    //     nextBtn.click();
    // },2000)
    
}

}
main();