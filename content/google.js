const main = async () =>{
	const email = await getFromStorage('STUDENT_EMAIL', '');
	const emailEl = document.querySelector('.wLBAL[data-email="' + email + '"]');
	const emailEl1 = document.querySelector('.wLBAL[data-email="' + email.toLowerCase + '"]');
	const emailEl2 = document.querySelector('.wLBAL[data-email="' + email.toUpperCase + '"]');

	if (emailEl) {
		// click on email
		emailEl.click();
	}
	if (emailEl1){
		emailEl1.click();
	}
	if (emailEl2){
		emailEl2.click();
	}

}
main();
