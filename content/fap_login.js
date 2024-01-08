const selectEl = document.querySelector("#ctl00_mainContent_ddlCampus");
const settings = {};
chrome.storage.sync.get(["STUDENT_CAMPUS"]).then((campus) => {
	console.log("Campus: " + campus.STUDENT_CAMPUS);
	Object.assign(settings, campus);
	FixFAPLoginError_12_22();
	DoLogin();
});

function CheckLoggedInUser() {
	const loggedInUserDiv = document.getElementById("ctl00_divUser");
	if (loggedInUserDiv) return true;
	return false;
}

function DoLogin() {
	if (CheckLoggedInUser() == false &&
		settings.STUDENT_CAMPUS != "") {
		Login();
	}
}
function Login() {
	const footer = document.getElementById("cssTable");

	const campusSelection = document.getElementById(
		"ctl00_mainContent_ddlCampus"
	);
	if (!campusSelection) return;

	if (
		campusSelection.value === "" ||
		campusSelection.value !== settings.STUDENT_CAMPUS
	) {
		campusSelection.value = settings.STUDENT_CAMPUS;
		const event = new Event("change");
		campusSelection.dispatchEvent(event);
	} else {

		footer.insertAdjacentHTML(
			"beforeend",
			'<h5 id="pointer_button" style="text-align: center; font-weight: bold;" onclick=" \n \
		const loginButton = document.querySelector(\'#ctl00_mainContent_btnLogin\'); \n \
		if (loginButton) \n \
		  loginButton.click(); \n \
	  "></h5>'
		);
		const loginButton = document.querySelector("#pointer_button");
		if (!loginButton) return;
		loginButton.click();
	}
}
function FixFAPLoginError_12_22() {
	const currentUrl = window.location.href;
	const urlCheckingRegex = new RegExp(/^(.*)(Default\.aspx\?token=)(.*)$/);
	if (urlCheckingRegex.test(currentUrl)) {

		setTimeout(() => {
			window.location.assign("https://fap.fpt.edu.vn/Default.aspx");
		}, 3000);
	}
}


