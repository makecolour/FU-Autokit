window.onload = () => {
    const table = document.getElementById("ctl00_mainContent_gvSubjects");
    const rows = table.querySelectorAll("tr");
    let subjects = [];
    let subjectsName = [];
    for (let i = 0; i < rows.length; i++) {
        let firstCell = rows[i].cells[0];
        let secondCell = rows[i].cells[1];
        if (firstCell) {
            subjects.push(firstCell.textContent);
        }
        if (secondCell) {
            subjectsName.push(secondCell.textContent);
        }
    }
    subjects.shift();
    subjectsName.shift();
    chrome.storage.local.set({ 'subjects': subjects });
    chrome.storage.local.set({ 'subjectsName': subjectsName });
}

