const enabled = {};
async function fetchData() {
  let enable = await chrome.storage.sync.get(['FAP_1']);
  Object.assign(enabled, enable);
}

window.addEventListener('load', function() {
  setTimeout(()=>{fetchData().then(() => {
    if (enabled.FAP_1 == true) {
      K18();
    }
  });;}, 0);
});


function K18() {
  var divs = document.querySelectorAll('.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
  console.log(divs);
  setTimeout(() => {
    for (i = 0; i < divs.length; ++i) {
      divs[i].click();
      //console.log("success");
    }
  }, 50);
  
  var divs = document.querySelectorAll('.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
  setTimeout(() => {
    for (i = 0; i < divs.length; ++i) {
      divs[i].click();
      //console.log("success");
    }
  }, 500);
  var divs = document.querySelectorAll('.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
  setTimeout(() => {
    for (i = 0; i < divs.length; ++i) {
      divs[i].click();
      //console.log("success");
    }
  }, 1000);
}