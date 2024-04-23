var enabled;
var campus;
var k;
var button = document.getElementById("btnLogin");
const main = async () => {
    enabled = await getFromStorage('OCD_1', '');
    k = await getFromStorage('K','')
    const campusVal = await getFromStorage('STUDENT_CAMPUS','');
    switch (campusVal){
        case 0:
            campus = null;
            console.log(campusVal);
            break;
        case '3':
            campus = 'APHL';
            break;
        case '4':
            campus = 'HCM';
            break;
        case '5':
            campus = 'DN';
            break;
        case '6':
            campus = 'CT';
            break;
        case '7':
            campus = 'QN';
            break;
        default:
            campus = null;
            console.log(campusVal);
            break;
    }
}
window.onload = main().then(() => {
    if (enabled == true) {
        const loginBtn = document.getElementById("btnLogin");
        if(loginBtn){
            loginBtn.click();
            //handleShowModal();
            campusChange();
            if(campus!=null)
            {
                if(k)
                {
                    document.getElementById("feid_login").click();
                }
                else{
                    document.getElementById("google_login").click();
                }
            }
            else{
                console.log(campus)
            }
        }
    }
});
function campusChange(){
    var valueGoogle = document.getElementById("google_login").href;
    var valueFEID = document.getElementById("feid_login").href;
    var campusIndexGoogle = valueGoogle.lastIndexOf('=');
    var campusIndexFEID = valueFEID.lastIndexOf('=');
    document.getElementById("google_login").href = valueGoogle.substring(0, campusIndexGoogle + 1) + campus;
    document.getElementById("feid_login").href = valueFEID.substring(0, campusIndexFEID + 1) + campus;
}   