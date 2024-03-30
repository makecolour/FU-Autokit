const settingForm = document.querySelector('form');
const rollNum = document.querySelector('#rollnum');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const campusInput = document.querySelector('#campus');
const show = document.getElementById("show");
//const version = document.getElementById("version");

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

	const gen_ = await getFromStorage('K', '');
	const fap1_ = await getFromStorage('FAP_1', '');
	const fap2_ = await getFromStorage('FAP_2', '');
	const fap3_ = await getFromStorage('FAP_3', '');
	const fap4_ = await getFromStorage('FAP_4', '');
	const edn1_ = await getFromStorage('EDN_1', '');
	const edn2_ = await getFromStorage('EDN_2', '');
	const cms1_ = await getFromStorage('CMS_1', '');
	// const cms2_ = await getFromStorage('CMS_2', '');
	const crs1_ = await getFromStorage('CRS_1', '');
	const crs2_ = await getFromStorage('CRS_2', '');
	const crs3_ = await getFromStorage('CRS_3', '');
	const flm1_ = await getFromStorage('FLM_1', '');
	const flm2_ = await getFromStorage('FLM_2', '');
	const flm3_ = await getFromStorage('FLM_3', '');
	const dng1_ = await getFromStorage('DNG_1', '');
	const lbr1_ = await getFromStorage('LBR_1', '');
	const theme = await getFromStorage('THEME', '');
	const lang = await getFromStorage('LANG', '');
	if (campus != 0 && campus != 3 && campus != 4 && campus != 5 && campus != 6 && campus != 7) {
		campusInput.value = 0;
	}
	else {
		campusInput.value = campus;
	}
	emailInput.value = email;
	rollNum.value = roll;
	passwordInput.value = password;
	if (emailInput.value == "undefined") {
		emailInput.value = "";
	}
	if (rollNum.value == "undefined") {
		rollNum.value = "";
	}
	if (passwordInput.value == "undefined") {
		passwordInput.value = "";
	}

	gen.checked = gen_;
	fap1.checked = fap1_;
	fap2.checked = fap2_;
	fap3.checked = fap3_;
	fap4.checked = fap4_;
	edn1.checked = edn1_;
	edn2.checked = edn2_;
	cms1.checked = cms1_;
	// cms2.checked = cms2_;
	crs1.checked = crs1_;
	crs2.checked = crs2_;
	crs3.checked = crs3_;
	flm1.checked = flm1_;
	flm2.checked = flm2_;
	flm3.checked = flm3_;
	dng1.checked = dng1_;
	lbr1.checked = lbr1_;
	update(theme);
	if (lang.includes("vi")) {
		updateLang("vi");
	}
	else {
		updateLang("en");
	}
	//version.textContent = chrome.runtime.getManifest().version;
	//console.log(gen_)
	// const autoLogin = await getFromStorage('AUTO_LOGIN', false);
	// autoLoginCheckbox.checked = autoLogin;
});

show.addEventListener("change", () => {
	if (show.checked) {
		passwordInput.type = 'text';
	} else {
		passwordInput.type = 'password';
	}
});
//document.getElementById("body").setAttribute("data-bs-theme", "dark");


const fap = document.getElementById("FAP");
const edn = document.getElementById("EDN");
const cms = document.getElementById("CMS");
const flm = document.getElementById("FLM");
const crs = document.getElementById("CRS");
const dng = document.getElementById("DNG");
const lbr = document.getElementById("LBR");

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

crs.addEventListener("click", () => {
	window.open("https://www.coursera.org/", "_blank");
})

dng.addEventListener("click", () => {
	window.open("https://dng.fpt.edu.vn/Invoice", "_blank");
})

lbr.addEventListener("click", () => {
	window.open("https://library.fpt.edu.vn/", "_blank");
})

const themeBtn = document.getElementsByClassName("bg")
for (let i = 0; i < themeBtn.length; i++) {
	themeBtn[i].addEventListener("click", () => {
		update(themeBtn[i].value);
		setToStorage("THEME", themeBtn[i].value);
	})
}
const langBtn = document.getElementsByClassName("lang")

for (let i = 0; i < langBtn.length; i++) {
	langBtn[i].addEventListener("click", () => {
		updateLang(langBtn[i].value);
	})
}

async function updateLang(lang = "vi") {
	switch (lang) {
		case "vi":
			setToStorage("LANG", '/_locales/vi/messages.json');
			fetch(chrome.runtime.getURL('/_locales/vi/messages.json')).then(response => response.json()).then(messages => {
				changeLanguage(messages);
			});
			break;
		case "en":
			setToStorage("LANG", '/_locales/en/messages.json');
			fetch(chrome.runtime.getURL('/_locales/en/messages.json')).then(response => response.json()).then(messages => {
				changeLanguage(messages);
			});
			break;
		default:
			break;
	}
}

const body = document.getElementById("body")
function update(value = "light") {
	switch (value) {
		case "light":
			body.setAttribute("data-bs-theme", "light");
			document.getElementById("setting").src = "/assets/gear.svg"
			break;
		case "dark":
			body.setAttribute("data-bs-theme", "dark");
			document.getElementById("setting").src = "/assets/geardark.svg"
			break;
		case "sys":
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				return update("dark")
			}
			else {
				return update("light")
			}
			break;
		default:
			break;
	}
}

function changeLanguage(label) {
	document.getElementById("theme").textContent = label.theme.message;
	document.getElementById("light").textContent = label.light.message;
	document.getElementById("dark").textContent = label.dark.message;
	document.getElementById("sys").textContent = label.system.message;
	document.getElementById("language").textContent = label.language.message;
	document.getElementById("vi").textContent = label.vi.message;
	document.getElementById("en").textContent = label.en.message;

	const onoff = document.getElementsByClassName("onoff");
	for (let i = 0; i < onoff.length; i++) {
		onoff[i].textContent = label.onoff.message;
	}

	const autologin = document.getElementsByClassName("autologin");
	for (let i = 0; i < autologin.length; i++) {
		autologin[i].textContent = label.autoLogin.message;
	}

	document.getElementById("feedback").textContent = label.feedback.message;
	document.getElementById("GPA").textContent = label.gpa_1.message;
	document.getElementById("FE").textContent = label.fe.message;

	document.getElementById("gradeongroupmates").textContent = label.gradeongroupmates.message;

	document.getElementById("getshareablelink").textContent = label.getshareablelink.message;
	document.getElementById("autoreview").textContent = label.autoreview.message;

	document.getElementById("autochangelang").textContent = label.autochangelang.message;
	document.getElementById("suggestion").textContent = label.suggestion.message;

	document.getElementById("autofillroll").textContent = label.autofillroll.message;

	document.getElementById("autofillall").textContent = label.autofillall.message;

	document.getElementById("K18").textContent = label.k18.message;
	document.getElementById("K19").textContent = label.k19.message;

	document.getElementById("select").textContent = label.select.message;
	const campuses = document.getElementById("campus");
	for (let i = 0; i < campuses.options.length; i++) {
		campuses.options[i].textContent = label["campus" + campuses.options[i].value].message;
	}

	let formElement = document.getElementById('check');
	let labels = formElement.querySelectorAll('label');
	for (let i = 0; i < labels.length; i++) {
		const fill = labels[i].getAttribute('for');
		switch (fill) {
			case "rollnum":
				labels[i].textContent = label.rollnum.message;
				break;
			case "email":
				labels[i].textContent = label.email.message;
				break;
			case "password":
				labels[i].innerHTML = label.password.message;
				break;
			default:
				break
		}
	}
	rollNum.placeholder = label.roll_placeholder.message;
	emailInput.placeholder = label.email_placeholder.message;
	passwordInput.placeholder = label.password_placeholder.message;

	document.querySelector('label[for="show"]').innerText = label.show.message;
	document.querySelector("#check > button").innerText = label.save.message;

	document.getElementById("madeby").innerHTML = label.madeby.message;
	document.getElementById("version").innerHTML = label.version.message.replace("{{version}}", chrome.runtime.getManifest().version);
}
