function login(campus){
	const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");
	if(selectEl.value != campus)
	{
		selectEl.value = campus;
		__doPostBack('ctl00$mainContent$ddlCampus','');
	}
	console.log(campus);
	const loginBtn = document.querySelector("#ctl00_mainContent_btnLogin");		
	loginBtn.click();
} 

const main = async (fn) => {
	const campus = await getFromStorage('STUDENT_CAMPUS', '');
	fn(campus);
}

main(login);



// if (selectEl.selectedIndex !== 1) {
// 	// change value of select to Hola
// 	selectEl.selectedIndex = 1;
// 	__doPostBack('ctl00$mainContent$ddlCampus','');
// }
	

// 	click button
	

