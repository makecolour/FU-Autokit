const main = async () => {
    const id = await getFromStorage('STUDENT_ROLL', '');
    if(id==null)
        {
            id=="";
        }
    const pass = await getFromStorage('STUDENT_PASS', '');
    if(pass==null)
        {
            pass="";
        }
    const enabled = await getFromStorage('LBR_1', '');
    if (enabled == true) {
        document.getElementById("Username").setAttribute("value", id);
        document.getElementById("Password").setAttribute("value", pass);
    }
}
window.onload = main();
