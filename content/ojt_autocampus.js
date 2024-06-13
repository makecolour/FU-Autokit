var camp;
var enabled;
const main = async () => {
    const campus = await getFromStorage('STUDENT_CAMPUS', '');
    enabled = await getFromStorage('OJT_1', '');
    switch(campus) {
        case '3':
            camp = 'FU_HL';
            break;
        case '5':
            camp = 'FU_DN';
            break;
        default:
            camp = null;
            break;
        // Add more cases if needed
    }
}

window.onload = main().then(() => {
    const campusList = document.querySelector("body > main > form > div > select");
    const submitBtn = document.querySelector("body > main > form > button");
    if(enabled) {
        console.log(camp);
        if(camp) {
            campusList.value = camp;
            submitBtn.click();
        }
    }
});