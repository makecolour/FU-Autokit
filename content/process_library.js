const main = async () => {
    const rollnum = await getFromStorage('STUDENT_ROLL', '');
    const password = await getFromStorage('STUDENT_PASS', '');
    document.getElementById("Username").setAttribute("value", rollnum);
    document.getElementById("Password").setAttribute("value", password);
}
main();