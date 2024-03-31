const main = async () => {
  const enabled = await getFromStorage('EDN_1', '');
  const k19 = await getFromStorage('K', '');
  if (enabled == true) {

    if (k19 == false) {
      K18()
    }
    //console.log(enabled);
    else {
      K19()
    }
  }
}
window.addEventListener('load', function() {
  setTimeout(()=>{main();}, 0);
});


function K19() {
  setTimeout(() => {
    const divs = document.getElementsByClassName('btn-outline-light');

    if (divs.length > 0) {
      for (i = 0; i < divs.length; i++) {
        divs[i].click();
        //console.log("success");
      }
    }
  }, 0);
}

function K18() {
  setTimeout(() => {
    const divs = document.getElementsByClassName('nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');

    if (divs.length > 0) {
      for (i = 0; i < divs.length; i++) {
        divs[i].click();
        //console.log("success");
      }
    }
  }, 0);

  // setTimeout(() => {
  //   const divs = document.getElementsByClassName('nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
  //   if (divs.length > 0) {
  //     for (i = 0; i < divs.length; i++) {
  //       divs[i].click();
  //       //console.log("success");
  //     }
  //   }
  // }, 500);

  // setTimeout(() => {
  //   const divs = document.getElementsByClassName('nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
  //   if (divs.length > 0) {
  //     for (i = 0; i < divs.length; i++) {
  //       divs[i].click();
  //       //console.log("success");
  //     }
  //   }
  // }, 1000);

  // setTimeout(() => {
  //   const divs = document.getElementsByClassName('nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
  //   if (divs.length > 0) {
  //     for (i = 0; i < divs.length; i++) {
  //       divs[i].click();
  //       //console.log("success");
  //     }
  //   }
  // }, 1500);

  // setTimeout(() => {
  //   const divs = document.getElementsByClassName('nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
  //   if (divs.length > 0) {
  //     for (i = 0; i < divs.length; i++) {
  //       divs[i].click();
  //       //console.log("success");
  //     }
  //   }
  // }, 3000);
}