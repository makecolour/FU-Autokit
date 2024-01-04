const main = async () => {
    const roll = await getFromStorage('STUDENT_ROLL', '');
	const password = await getFromStorage('STUDENT_PASS', '');
    document.getElementById("Username").setAttribute("value", roll);
    document.getElementById("Password").setAttribute("value", password);
}
main();