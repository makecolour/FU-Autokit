const settingForm = document.querySelector('form');
const rollNum = document.querySelector('#rollnum');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
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
				output.innerHTML = `Cút mẹ mày đi`;
			}
			else if(selected == "K18")
			{
				
			}
			else{
				output.innerHTML = `Chưa chọn`;
			}
        });

settingForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const roll = e.target.rollNum;
	const email = e.target.email.value;
	const password = e.target.password.value;
	
	// const autoLogin = e.target.autoLogin.checked;

	setToStorage('STUDENT_ROLL', roll);
	setToStorage('STUDENT_EMAIL', email);
	setToStorage('STUDENT_PASS', password);
	// setToStorage('AUTO_LOGIN', autoLogin);

	alert('Configured');

	// exit
	window.close();
});

// when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
	const roll = await getFromStorage('STUDENT_ROLL', '');
	const email = await getFromStorage('STUDENT_EMAIL', '');
	const password = await getFromStorage('STUDENT_PASS', '');
	emailInput.value = email;
	rollNum.value = roll;
	passwordInput.value = password;

	// const autoLogin = await getFromStorage('AUTO_LOGIN', false);
	// autoLoginCheckbox.checked = autoLogin;
});

function showStuff(id, text, btn) {
    document.getElementById(id).style.display = 'block';
    // hide the lorem ipsum text
    document.getElementById(text).style.display = 'none';
    // hide the link
    btn.style.display = 'none';
};


