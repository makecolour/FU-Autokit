const NUM_FIELDS = 5;
const main = async () => {
    const enabled2 = await getFromStorage('FAP_2', '');
    if(enabled2==true)
    {
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
}
}
main();

