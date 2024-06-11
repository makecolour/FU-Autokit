var enabled;
const main = async () => {
    enabled = await getFromStorage('OJT_1', '');
}
window.onload = main().then(() => {
    const submitBtn = document.querySelector("#navbarSupportedContent > form > a");
    if(enabled && submitBtn) {
        submitBtn.click();
    }
});