const settingForm = document.querySelector('form');
const rollNum = document.querySelector('#rollnum');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const campusInput = document.querySelector('#campus');

// const btn = document.querySelector('#btn');
// const radioButtons = document.querySelectorAll('input[name="gen"]');
// btn.addEventListener("click", () => {
// 	let selected;
// 	for (const radioButton of radioButtons) {
// 		if (radioButton.checked) {
// 			selected = radioButton.value;
// 			break;
// 		}
// 	}
// 	// show the output:
// 	if (selected == "K19") {
// 		document.getElementById("check").style.display = 'none';
// 		document.getElementById("k5").style.display = 'block';
// 	}
// 	else if (selected == "K18") {
// 		document.getElementById("check").style.display = 'block';
// 		document.getElementById("k5").style.display = 'none';
// 	}
// 	else {
// 		output.innerHTML = `Chưa chọn`;
// 	}
// });

const k18 = document.getElementById("K18");
const k19 = document.getElementById("K19");
k18.addEventListener("click", () => {
	document.getElementById("check").style.display = 'block';
	document.getElementById("k5").style.display = 'none';
});
k19.addEventListener("click", () => {
	document.getElementById("check").style.display = 'none';
	document.getElementById("k5").style.display = 'block';
});

settingForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const roll = e.target.rollnum.value;
	const email = e.target.email.value;
	const password = e.target.password.value;
	const campus = e.target.campus.value;
	camp = campus;
	// const autoLogin = e.target.autoLogin.checked;

	setToStorage('STUDENT_ROLL', roll);
	setToStorage('STUDENT_EMAIL', email);
	setToStorage('STUDENT_PASS', password);
	setToStorage('STUDENT_CAMPUS', campus);
	// setToStorage('AUTO_LOGIN', autoLogin);

	alert('Đã lưu');

	// exit
	setFap(campus);
	window.close();
});

// when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
	const roll = await getFromStorage('STUDENT_ROLL', '');
	const email = await getFromStorage('STUDENT_EMAIL', '');
	const password = await getFromStorage('STUDENT_PASS', '');
	const campus = await getFromStorage('STUDENT_CAMPUS', '');
	localStorage.setItem('campus', JSON.stringify(campus));
	emailInput.value = email;
	rollNum.value = roll;
	passwordInput.value = password;
	campusInput.value = campus;
	// const autoLogin = await getFromStorage('AUTO_LOGIN', false);
	// autoLoginCheckbox.checked = autoLogin;
});

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("show").addEventListener("click", myFunction);
});

function myFunction() {
	var x = document.getElementById("password");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
};

const fap = document.getElementById("FAP");
const edn = document.getElementById("EDN");
const cms = document.getElementById("CMS");
const flm = document.getElementById("FLM");

fap.addEventListener("click", () => {
	window.open("https://fap.fpt.edu.vn/", "_blank");
})

edn.addEventListener("click", () => {
	window.open("https://fu-edunext.fpt.edu.vn/", "_blank");
})

cms.addEventListener("click", () => {
	window.open("https://cmshn.fpt.edu.vn/", "_blank");
})
flm.addEventListener("click", () => {
	window.open("https://flm.fpt.edu.vn/", "_blank");
})