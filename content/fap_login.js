function login(campus){
	window.localStorage.setItem('campus', campus);
	console.log(campus);
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
	

