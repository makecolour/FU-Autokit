window.onload = () => {
    const table = document.getElementById("ctl00_mainContent_gvSubjects");
    const rows = table.querySelectorAll("tr");
    var subjects = [];
    var subjectsName = [];
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

    sorting()
}
function sorting() {
    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
    const comparer = (idx, asc) => (a, b) => ((v1, v2) => {
        // Remove commas for numeric comparison
        const pattern = /,/g;
        v1 = v1.replace(pattern, '');
        v2 = v2.replace(pattern, '');
        return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
    })(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

    // Object to store the sorting direction for each column
    const sortDirection = {};

    // This function is triggered when a `<th>` is clicked
    const onThClick = (th, idx) => {
        const table = th.closest('table');
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr:nth-child(n+2)'));

        // Toggle the sorting direction for the current column
        if (sortDirection[idx] === undefined) {
            sortDirection[idx] = true; // Default to ascending on first click
        } else {
            sortDirection[idx] = !sortDirection[idx];
        }

        rows.sort(comparer(idx, sortDirection[idx]))
            .forEach(tr => tbody.appendChild(tr));
    };

    // Attach click event listeners to all `<th>` elements in the table header
    document.querySelectorAll('#ctl00_mainContent_gvSubjects th').forEach((th, index) => th.addEventListener('click', () => onThClick(th, index)));
}