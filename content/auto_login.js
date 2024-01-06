const main = async () => {
    const email = await getFromStorage('STUDENT_EMAIL', '');
    const password = await getFromStorage('STUDENT_PASSWORD', '');
    document.querySelector("#identifierId").setAttribute('value', email);
    const passEl = document.getElementsByName("Passwd");
    if (passEl) {
        passEl.setAttribute('value', password);
        console.log(password);
    }


}
main();