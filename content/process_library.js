const main = async () => {
    const id = await getFromStorage('STUDENT_ROLL', '');
    const pass = await getFromStorage('STUDENT_PASS', '');
    document.getElementById("Username").setAttribute("value", id);
    document.getElementById("Password").setAttribute("value", pass);
}
main();
