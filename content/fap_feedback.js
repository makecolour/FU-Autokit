let feedbackExecuted = false;
const submitBtn = document.querySelector('#ctl00_mainContent_btSendFeedback');
const main = async () => {
    const enabled2 = await getFromStorage('FAP_2', '');

    if(enabled2 === true && !feedbackExecuted) {
        feedback(NUM_FIELDS);
        feedbackExecuted = true;
    }
}

const NUM_FIELDS = 5;

function feedback(NUM_FIELDS){
    for (let i = 0; i < NUM_FIELDS; i++) {
        const checkbox = document.querySelector(`#ctl00_mainContent_reload_ctl0${i}_chkList_0`);
        if (checkbox) {
            checkbox.checked = true;
            console.log("ok");
        }
    }
	const textArea = document.querySelector('#ctl00_mainContent_txtComment');
	if (textArea) {
		textArea.value = 'I appreciate the effort my teacher has put into this course.';
	}
	
}

main(); 