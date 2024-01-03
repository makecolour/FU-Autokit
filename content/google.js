const STUDENT_EMAIL = 'QuyenNTHE180534@fpt.edu.vn';
const emailEl = document.querySelector('.wLBAL[data-email="' + STUDENT_EMAIL + '"]');
const emailEl1 = document.querySelector('.wLBAL[data-email="' + STUDENT_EMAIL.toLowerCase + '"]');
const emailEl2 = document.querySelector('.wLBAL[data-email="' + STUDENT_EMAIL.toUpperCase + '"]');

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


