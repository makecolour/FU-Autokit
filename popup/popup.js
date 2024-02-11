const settingForm = document.querySelector('form');
const rollNum = document.querySelector('#rollnum');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const campusInput = document.querySelector('#campus');

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
	const dng1_ = await getFromStorage('DNG_1', '');
	const lbr1_ = await getFromStorage('LBR_1', '');
	const theme = await getFromStorage('THEME', '');

	

	if (campus!=0&&campus!=3&&campus!=4&&campus!=5&&campus!=6&&campu!=7) {
		campusInput.value=0;
	}
	else{
		campusInput.value = campus;
	}
	emailInput.value = email;
	rollNum.value = roll;
	passwordInput.value = password;
	if(emailInput.value=="undefined")
	{
		emailInput.value ="";
	}
	if(rollNum.value=="undefined")
	{
		rollNum.value ="";
	}
	if(passwordInput.value=="undefined")
	{
		passwordInput.value ="";
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
	dng1.checked = dng1_;
	lbr1.checked = lbr1_;
	update(theme);
	//console.log(gen_)
	// const autoLogin = await getFromStorage('AUTO_LOGIN', false);
	// autoLoginCheckbox.checked = autoLogin;
});

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("show").addEventListener("click", myFunction);
	//document.getElementById("body").setAttribute("data-bs-theme", "dark");
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
for(let i = 0; i < themeBtn.length; i++)
{
	themeBtn[i].addEventListener("click", ()=>{
		update(themeBtn[i].value);
		setToStorage("THEME", themeBtn[i].value);
	})
}

const body = document.getElementById("body")

function update(value="light"){
	switch(value)
	{
		case "light":
			body.setAttribute("data-bs-theme","light");
			document.getElementById("setting").src = "/assets/gear.svg"
			break;
		case "dark":
			body.setAttribute("data-bs-theme","dark");
			document.getElementById("setting").src = "/assets/geardark.svg"
			break;
		case "sys":
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
			{
				return update("dark")
			}
			else{
				return update("light")
			}
			break;
		default:
			break;
	}
}



