const main = async () => {
	const email = await getFromStorage('STUDENT_EMAIL', '');
	const emailEl = document.querySelector('.wLBAL[data-email="' + email + '"]');
	const emailEl1 = document.querySelector('.wLBAL[data-email="' + email.toLowerCase() + '"]');

	if (emailEl) {
		// click on email
		emailEl.click();
	}
	setTimeout(() => {
		if (emailEl1) {
			emailEl1.click();
		}
	}, 1000)

}
main();
