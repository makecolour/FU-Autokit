const main = async () => {
	const email = await getFromStorage('STUDENT_EMAIL', '');
	email.toLowerCase
	const emailEl = document.querySelector('.wLBAL[data-email="' + email + '"]');
	const emailEl1 = document.querySelector('.wLBAL[data-email="' + email.toLowerCase() + '"]');

	if (emailEl) {
		// click on email
		emailEl.click();
	}
	if (emailEl1) {
		emailEl1.click();
	}
}
main();
