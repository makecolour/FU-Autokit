const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");
const loginBtn = document.querySelector("#ctl00_mainContent_btnLogin");
if(localStorage.getItem("FAP_TIMES"!=0))
{
	localStorage.setItem("FAP_TIMES",0);
}
const campus = localStorage.getItem('STUDENT_CAMPUS');
console.log(campus);
if (selectEl.value != campus) {
	// change value of select to Hola
	selectEl.value = campus;
	__doPostBack('ctl00$mainContent$ddlCampus','');
} else {
	// click button
	loginBtn.click();
}


