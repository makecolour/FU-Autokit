const k19Btn = document.getElementsByClassName("btn");
const main = async () => {
  const enabled = await getFromStorage('FLM_1', '');
  const k19 = await getFromStorage('K', '');
  if(enabled==true)
  {
    var options = document.getElementById("drSelectEduLevel").options;
    for (var i = 0; i < options.length; i++) {
    if (options[i].value == "fptu") {
      options[i].selected = true;
      break;
      }
    }
    if(k19==false) {
      K18()
    }
    else if(k19==true) {
      K19()
    }
  }}
  main();

  function K18(){
    var divs = document.querySelectorAll('.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
setTimeout(() => {
  for (i = 0; i < divs.length; ++i) {
    divs[i].click();
    //console.log("success");
  }
}, 1500);
  }

  function K19(){
    //console.log(k19Btn);
    k19Btn[0].click();
  }
