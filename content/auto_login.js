const main = async () => {
    const email = await getFromStorage('STUDENT_EMAIL', '');
    const password = await getFromStorage('STUDENT_PASSWORD', '');
    document.querySelector("#identifierId").setAttribute('value', email);
    const nextBtn = document.querySelector(".VfPpkd-Jh9lGc");
    console.log(nextBtn);
}
main();