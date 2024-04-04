function searchStringInArray(str, strArray) {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].match(str)) return j;
  }
  return -1;
}

function getBit() {
  const bit = document.querySelector("#ctl00_mainContent_lblCurriculum").innerHTML;
  const bitArr = bit.split("_");
  if(bitArr[2].includes("A")) {
    return `${bitArr[0]}_${bitArr[1]}_K${Number.parseInt(bitArr[2]) - 1}D_K${bitArr[2]}`
  }
  else{
    return `${bitArr[0]}_${bitArr[1]}_K${bitArr[2]}`
  }
}



const main = async () => {
  const list = await chrome.storage.local.get('listCurriculum');
  const bit = getBit();
  console.log(bit);
  if (searchStringInArray(bit, list.listCurriculum) == -1) {
    list.listCurriculum.push(bit);
    chrome.storage.local.set({ 'listCurriculum': list.listCurriculum });
    console.log("Updated");
  }
}

window.onload = main;