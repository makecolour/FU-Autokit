function searchStringInArray(str, strArray) {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].toUpperCase().match(str.toUpperCase())) return j;
  }
  return -1;
}

function getBit() {
  const bit = document.querySelector("#ctl00_mainContent_lblCurriculum").innerHTML;
  const bitArr = bit.split("_");
  if(bit.toUpperCase().includes("TRS")||bit.toUpperCase().includes("LUK"))
  {
    return -1;
  }
  else if(bitArr[2].includes("A")) {
    return `${bitArr[0]}_${bitArr[1]}_K${Number.parseInt(bitArr[2]) - 1}D_K${bitArr[2]}`
  }
  else{
    return `${bitArr[0]}_${bitArr[1]}_K${bitArr[2]}`
  }
}

const main = async () => {
  const list = await chrome.storage.local.get('listCurriculum');
  const bit = getBit();
  if(bit==-1)
  {
    console.log("TRSer/LUKer");
    return
  }
  else if (searchStringInArray(bit, list.listCurriculum) == -1) {
    list.listCurriculum.push(bit);
    chrome.storage.local.set({ 'listCurriculum': list.listCurriculum });
    console.log("Updated");
  }
  sorting();
}

window.onload = main;

function sorting() {
  const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
  const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
      v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
      )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

  // Enhanced function to toggle sorting direction and sort rows
  const onThClick = (th, idx) => {
    const table = th.closest('table');
    const tbody = table.querySelector('tbody');
    // Toggle sorting direction stored in a data attribute on the table
    const isAscending = table.getAttribute('data-sort-asc') === 'true';
    table.setAttribute('data-sort-asc', !isAscending);

    Array.from(tbody.querySelectorAll('tr'))
      .sort(comparer(idx, isAscending))
      .forEach(tr => tbody.appendChild(tr));
  };

  // Attach click event listeners to all `<th>` elements within <thead>
  document.querySelectorAll('.table thead th').forEach(th => th.addEventListener('click', () => onThClick(th, th.cellIndex)));
}