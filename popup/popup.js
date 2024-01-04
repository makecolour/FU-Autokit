const settingForm = document.querySelector('form');
const emailInput = document.querySelector('#email');
// const autoLoginCheckbox = document.querySelector('#auto-login');

        const btn = document.querySelector('#btn');        
        const radioButtons = document.querySelectorAll('input[name="gen"]');
        btn.addEventListener("click", () => {
            let selected;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selected = radioButton.value;
                    break;
                }
            }
            // show the output:
			if (selected == "K19")
			{
				output.innerHTML = selected ? `Cút mẹ mày đi` : `Chưa chọn khóa`;
			}
			else
			{
				
			}
        });

settingForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = e.target.email.value;
	// const autoLogin = e.target.autoLogin.checked;

	setToStorage('STUDENT_EMAIL', email);
	// setToStorage('AUTO_LOGIN', autoLogin);

	alert('Configured');

	// exit
	window.close();
});

// when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
	const email = await getFromStorage('STUDENT_EMAIL', '');
	emailInput.value = email;

	// const autoLogin = await getFromStorage('AUTO_LOGIN', false);
	// autoLoginCheckbox.checked = autoLogin;
});


