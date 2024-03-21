const NUM_FIELDS = 5;
document.addEventListener('DOMContentLoaded', async () => {
	const enabled2 = await getFromStorage('FAP_2', '');
	const submitBtn = document.querySelector('#ctl00_mainContent_btSendFeedback');

	console.log("");
	for (let i = 0; i < NUM_FIELDS; i++) {
		const checkbox = document.querySelector(`#ctl00_mainContent_reload_ctl0${i}_chkList_0`);

		if (checkbox) {
			checkbox.checked = true;
			console.log("ok");
		}
	}
	if (submitBtn&&enabled2==true) {
		submitBtn.click();
	}
});


