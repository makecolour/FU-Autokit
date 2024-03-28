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
    if(secondCell){
        subjectsName.push(secondCell.textContent);
    }
}
subjects.shift();
subjectsName.shift();
setToStorage('subjects', subjects);
setToStorage('subjectsName', subjectsName);