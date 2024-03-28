const linkBtn = document.getElementById("link");
document.addEventListener('DOMContentLoaded', async () => {
    const link = await getFromStorage('finalUrl', '')
    const theme = await getFromStorage('THEME', '')
    update(theme);
    linkBtn.value = link;
})

const copyBtn = document.getElementById("button-addon1");
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(linkBtn.value);
})

let version = chrome.runtime.getManifest().version;
document.getElementById('ver').textContent = version;

const body = document.getElementById("body")

function update(value="light"){
	switch(value)
	{
		case "light":
			body.setAttribute("data-bs-theme","light");
			break;
		case "dark":
			body.setAttribute("data-bs-theme","dark");
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