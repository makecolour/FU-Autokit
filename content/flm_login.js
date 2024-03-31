const k19Btn = document.getElementsByClassName("btn");
const main = async () => {
  const enabled = await getFromStorage('FLM_1', '');
  const k19 = await getFromStorage('K', '');
  if (enabled == true) {
    var select = document.getElementById("drSelectEduLevel")
    var options = select.options;
    for (var opt, j = 0; opt = options[j]; j++) {
      if (opt.value == "fptu") {
        //console.log("ok");
        select.selectedIndex = j;
        localStorage.setItem("SelectedEduLevel", opt.value);
        break;
      }
    }
    if (k19 == false) {
      K18()
    }
    else if (k19 == true) {
      K19()
    }
  }
}
window.addEventListener('load', function() {
  setTimeout(()=>{main();}, 0);
});


function K18() {
  var divs = document.querySelectorAll('.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
  setTimeout(() => {
    for (i = 0; i < divs.length; ++i) {
      divs[i].click();
      //console.log("success");
    }
  }, 500);
}

function K19() {
  //console.log(k19Btn);
  k19Btn[0].click();
}
