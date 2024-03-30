function searchStringInArray(str, strArray) {
  for (var j = 0; j < strArray.length; j++) {
    if (strArray[j].match(str)) return j;
  }
  return -1;
}
const bit = document.querySelector("#ctl00_mainContent_lblCurriculum").innerHTML
const main = async () => {
  const list = await chrome.storage.local.get('listCurriculum');
  if (searchStringInArray(bit, list.listCurriculum) == -1) {
    list.listCurriculum.push(bit);
    chrome.storage.local.set({ 'listCurriculum': list.listCurriculum });
    console.log("Updated");
  }
}
main()