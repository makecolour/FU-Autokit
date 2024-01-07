//localStorage.setItem('STUDENT_CAMPUS', "0");
const main = async () => {
	const campus = await getFromStorage('STUDENT_CAMPUS', '');

    setTimeout(() =>{
        localStorage.setItem('STUDENT_CAMPUS', campus);
    },1000);
}
main();