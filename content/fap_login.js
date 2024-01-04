const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");

if (selectEl.selectedIndex !== 1) {
	// change value of select to Hola
	selectEl.selectedIndex = 1;
	__doPostBack('ctl00$mainContent$ddlCampus','');
} else {
	const loginBtn = document.querySelector("#ctl00_mainContent_btnLogin");

	// click button
	loginBtn.click();
}
