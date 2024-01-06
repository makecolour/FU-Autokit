const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");
const loginBtn = document.querySelector("#ctl00_mainContent_btnLogin");	

// const main = async () => {
// 	const campus = await getFromStorage('STUDENT_CAMPUS', '');
// 	if(selectEl.value != campus)
// 	{
// 		selectEl.value = campus;
// 	}
// 	else{
// 		loginBtn.click();
// 	}
// }
// main();
 


if (selectEl.selectedIndex !== 1) {
	// change value of select to Hola
	selectEl.selectedIndex = 1;
	__doPostBack('ctl00$mainContent$ddlCampus','');
}
	

	click button
	

