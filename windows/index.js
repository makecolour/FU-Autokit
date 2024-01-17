const linkBtn = document.getElementById("link");
document.addEventListener('DOMContentLoaded', async () => {
    const link = await getFromStorage('finalUrl', '')
    const theme = await getFromStorage('THEME', '')
    update(theme);
    linkBtn.value = link;
})

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