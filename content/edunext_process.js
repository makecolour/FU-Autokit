const main = async () => {
  const enabled = await getFromStorage('EDN_1', '');
  if(enabled==true)
  {
      //console.log(enabled);
      if(enabled.EDN_1)
  setTimeout(() => {
    const divs = document.getElementsByClassName('nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
    
    if(divs.length > 0)
    {
      for (i = 0; i < divs.length; i++) {
        divs[i].click();
        //console.log("success");
      }
    }
  }, 0);
  
  setTimeout(() => {
    const divs = document.getElementsByClassName('nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
    if(divs.length > 0)
    {
      for (i = 0; i < divs.length; i++) {
        divs[i].click();
        //console.log("success");
      }
    }
  }, 500);
  
  setTimeout(() => {
    const divs = document.getElementsByClassName('nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
    if(divs.length > 0)
    {
      for (i = 0; i < divs.length; i++) {
        divs[i].click();
        //console.log("success");
      }
    }
  }, 1000);
  
  setTimeout(() => {
    const divs = document.getElementsByClassName('nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb');
    if(divs.length > 0)
    {
      for (i = 0; i < divs.length; i++) {
        divs[i].click();
        //console.log("success");
      }
    }
  }, 1500);
  
  setTimeout(() => {
    const divs = document.getElementsByClassName('nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb'); 
    if(divs.length > 0)
    {
      for (i = 0; i < divs.length; i++) {
        divs[i].click();
        //console.log("success");
      }
    }
  }, 3000);

  }
}
main();

