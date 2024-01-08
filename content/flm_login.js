var options = document.getElementById("drSelectEduLevel").options;
for (var i = 0; i < options.length; i++) {
  if (options[i].value == "fptu") {
    options[i].selected = true;
    break;
  }
}

var divs = document.querySelectorAll('.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
setTimeout(() => {
  for (i = 0; i < divs.length; ++i) {
    divs[i].click();
    console.log("success");
  }
}, 1500);

