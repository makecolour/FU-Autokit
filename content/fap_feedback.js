var feedbackExecuted = false;
const label = {};

const submitBtn = document.querySelector('#ctl00_mainContent_btSendFeedback');
const returnBtn = document.querySelector("#ctl00_lblNavigation > a:nth-child(2)");
const main = async () => {
    if(feedbackExecuted) return;
    const enabled2 = await getFromStorage('FAP_2', '');
    const lang = await getFromStorage('LANG', '');
    if (enabled2 == true) {
        try {
            feedbackExecuted = true;
            const response = await fetch(chrome.runtime.getURL(lang));
            const messages = await response.json();
            await Object.assign(label, messages);
            await feedback(NUM_FIELDS);
            
            // Ensure this line executes after all the above operations
            await submitBtn.click();
            await returnBtn.click();
        } catch (error) {
            console.error('Failed to fetch and process:', error);
        }
    }
}

const NUM_FIELDS = 5;

function feedback(NUM_FIELDS) {
    for (let i = 0; i < NUM_FIELDS; i++) {
        const checkbox = document.querySelector(`#ctl00_mainContent_reload_ctl0${i}_chkList_0`);
        if (checkbox) {
            checkbox.checked = true;
        }
    }
    const textArea = document.querySelector('#ctl00_mainContent_txtComment');
    if (textArea) {
        textArea.value = label.doFeedBack.message;
    }

}

window.onload = main().then(async()  => {
    
});