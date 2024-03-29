const enabled = {};
async function fetchData() {
    let enable = await chrome.storage.sync.get(['FAP_1']);
    Object.assign(enabled, enable);
}
fetchData().then(() => {
    if(enabled.FAP_1 == true){
        K18();
    }
});

function K18(){
    var divs = document.getElementsByClassName("nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb");
    console.log(divs);
  for (i = 0; i < divs.length; ++i) {
    divs[i].click();
    //console.log("success");
  }
setTimeout(() => {
    var divs = document.getElementsByClassName("nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb");
    console.log(divs);
  for (i = 0; i < divs.length; ++i) {
    divs[i].click();
    //console.log("success");
  }
}, 500);
setTimeout(() => {
    var divs = document.getElementsByClassName("nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb");
    console.log(divs);
  for (i = 0; i < divs.length; ++i) {
    divs[i].click();
    //console.log("success");
  }
}, 1000);}