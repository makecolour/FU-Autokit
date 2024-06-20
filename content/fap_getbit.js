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

  
  // This function is triggered when a `<th>` is clicked
  const onThClick = (th, idx) => {
    const table = th.closest('table');
    // Select only rows within the <tbody> to sort
    const tbody = table.querySelector('tbody');
    Array.from(tbody.querySelectorAll('tr'))
      .sort(comparer(idx, this.asc = !this.asc))
      .forEach(tr => tbody.appendChild(tr));
  };
  
  // Attach click event listeners to all `<th>` elements within <thead> to ensure sorting is applied correctly
  document.querySelectorAll('.table thead th').forEach(th => th.addEventListener('click', () => onThClick(th, th.cellIndex)));

  // Attach click event listeners to all `<th>` elements
  document.querySelectorAll('.table th').forEach(th => th.addEventListener('click', () => onThClick(th, th.cellIndex)));
}