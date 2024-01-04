
const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");
let camp;
const main = async () => {
	camp = await getFromStorage('STUDENT_CAMPUS', '');
	if (selectEl.value != camp ) {
		// change value of select to Hola
		selectEl.value = camp;
		__doPostBack('ctl00$mainContent$ddlCampus','');
	} 
}
main();

	const loginBtn = document.querySelector("#ctl00_mainContent_btnLogin");

	// click button
	loginBtn.click();
