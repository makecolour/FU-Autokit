const settingForm = document.querySelector('form');
const rollNum = document.querySelector('#rollnum');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const campusInput = document.querySelector('#campus');
// const autoLoginCheckbox = document.querySelector('#auto-login');

const btn = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="gen"]');
btn.addEventListener("click", () => {
	let selected;
	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			selected = radioButton.value;
			break;
		}
	}
	// show the output:
	if (selected == "K19") {
		document.getElementById("check").style.display = 'none';
		document.getElementById("k5").style.display = 'block';
	}
	else if (selected == "K18") {
		document.getElementById("check").style.display = 'block';
		document.getElementById("k5").style.display = 'none';
	}
	else {
		output.innerHTML = `Chưa chọn`;
	}
});

settingForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const roll = e.target.rollnum.value;
	const email = e.target.email.value;
	const password = e.target.password.value;
	const campus = e.target.campus.value;
	// const autoLogin = e.target.autoLogin.checked;

	setToStorage('STUDENT_ROLL', roll);
	setToStorage('STUDENT_EMAIL', email);
	setToStorage('STUDENT_PASS', password);
	setToStorage('STUDENT_CAMPUS', campus);
	// setToStorage('AUTO_LOGIN', autoLogin);

	alert('Đã lưu');

	// exit
	window.close();
});

// when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
	const roll = await getFromStorage('STUDENT_ROLL', '');
	const email = await getFromStorage('STUDENT_EMAIL', '');
	const password = await getFromStorage('STUDENT_PASS', '');
	const campus = await getFromStorage('STUDENT_CAMPUS', '');
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

document.getElementById("bgm").volume = 0.1;
