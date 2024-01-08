const NUM_FIELDS = 5;

document.addEventListener('DOMContentLoaded', async () => {
	const submitBtn = document.querySelector('#ctl00_mainContent_btSendFeedback');

	for (let i = 0; i < NUM_FIELDS; i++) {
		const checkbox = document.querySelector(`#ctl00_mainContent_reload_ctl0${i}_chkList_0`);

		if (checkbox) {
			checkbox.checked = true;
		}
	}
	if (submitBtn) {
		submitBtn.click();
	}
});
