
const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");
const campus = window.localStorage.getItem('STUDENT_CAMPUS');
console.log(campus);
if (selectEl.value != campus) {
	// change value of select to Hola
	selectEl.value = campus;
	//__doPostBack('ctl00$mainContent$ddlCampus','');
} else {
	const loginBtn = document.querySelector("#ctl00_mainContent_btnLogin");

	// click button
	loginBtn.click();
}


