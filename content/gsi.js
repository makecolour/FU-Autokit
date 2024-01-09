const emailEl = document.querySelectorAll(".fFW7wc-ibnC6b-K4efff");
console.log(emailEl);
const main = async () => {
    const email = await getFromStorage('STUDENT_EMAIL', '');
    console.log(email);
    setTimeout(() =>{for (var i = 0; i < emailEl.length; i++) {
        if (emailEl[i].innerHTML == email.toLowerCase()) {
            const child = emailEl[i];
            child.click();
            console.log(child);
            child.parentElement.click();
            child.parentElement.parentElement.click();
            child.parentNode.click();
            const loginBtn = child.parentElement.parentElement;
            loginBtn.click();
            console.log(loginBtn);
        }
    }},500);
    
}
main();
