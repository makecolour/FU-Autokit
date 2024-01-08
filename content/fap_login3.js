const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");
const loginBtn = document.querySelector("#ctl00_mainContent_btnLogin");
const choice = [
	{ value: 3, name: "FU-Hòa Lạc", sub: "Hola" },
	{ value: 4, name: "FU-Hồ Chí Minh", sub: "Xavalo" },
	{ value: 5, name: "FU-Đà Nẵng", sub: "FUDA" },
	{ value: 6, name: "FU-Cần Thơ", sub: "Hovilo" },
	{ value: 7, name: "FU-Quy Nhơn", sub: "" }
]

function check(campus, i) {
	if (campus == choice[i].value - 2 || campus.toLowerCase() == choice[i].name.toLowerCase() || campus.toLowerCase() == choice[i].sub.toLowerCase() || campus.toLowerCase() == `${choice[i].value - 2}-${choice[i].sub}`.toLowerCase() || campus.toLowerCase() == `${choice[i].value - 2}-${choice[i].name}`.toLowerCase()) {
		return true;
	}
	return false;
}

function find(campus) {
	for (var i = 0; i < choice.length; i++) {
		if (check(campus, i)) {
			localStorage.setItem('STUDENT_CAMPUS', choice[i].value);
			alert("Đã lưu " + choice[i].name);
			console.log(campus);
			return choice[i];
		}
		else {
			continue
		}
	}
	return null;
}


console.log(localStorage.getItem('STUDENT_CAMPUS'));
if (localStorage.getItem('STUDENT_CAMPUS') == null) {
	while (true) {
		var campus = prompt("Nhập cơ sở bạn đang học (1-Hola, 2-Xavalo, 3-FUDA, 4-Hovilo, 5-Quy Nhơn)", "1");
		campus = find(campus)
		if (campus == null) {
			alert("Vui lòng nhập đúng định dạng: \"1\" hoặc \"Hola\" hoặc\"1-Hola\"");
		}
		else {
			break
		}
	}
}
else {
	var campus = localStorage.getItem('STUDENT_CAMPUS');
}
console.log(campus);
if (selectEl.value != campus) {
	// change value of select to Hola
	selectEl.value = campus;
	__doPostBack('ctl00$mainContent$ddlCampus', '');
} else {
	// click button
	loginBtn.click();
}


