const linkBtn = document.getElementById("link");
document.addEventListener('DOMContentLoaded', async () => {
	const link = await getFromStorage('finalUrl', '')
	const lang = await getFromStorage('LANG', '');
	const theme = await getFromStorage('THEME', '')
	update(theme);
	linkBtn.value = link;
	if (lang.includes("vi")) {
		updateLang("vi");
	}
	else {
		updateLang("en");
	}
})

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
function changeLanguage(label) {
	document.getElementById("madeby").innerHTML = label.madeby.message;
	document.getElementById("version").innerHTML = label.version.message.replace("{{version}}", chrome.runtime.getManifest().version);

}
const copyBtn = document.getElementById("button-addon1");
copyBtn.addEventListener('click', () => {
	navigator.clipboard.writeText(linkBtn.value);
})

const body = document.getElementById("body")

function update(value = "light") {
	switch (value) {
		case "light":
			body.setAttribute("data-bs-theme", "light");
			break;
		case "dark":
			body.setAttribute("data-bs-theme", "dark");
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