    const logLink= document.getElementsByClassName("c-ph-log-in")
    var url = window.location.href;
    const main = async () => {
        const enabled = await getFromStorage('CRS_1', '');
        if(enabled==true)
        {
    if(logLink){
        if(url.includes("programs/fptu"))
        {
            //console.log("fbt");
        }
        else if(url.includes("?authMode=login"))
        {
            btn2= document.getElementsByClassName("css-gl9hfb")
            setTimeout(() => {
                btn2[0].click();
            },1500)
        }
        else if(url.includes("ssoCallback?"))
        {
            window.location.replace("https://www.coursera.org/");
        }
        else
        {
            //console.log(logLink);
            setTimeout(() => {logLink[0].firstChild.click();

                setTimeout(() => {
                    btn2= document.getElementsByClassName("css-gl9hfb")
                    btn2[0].click();
                },1500)

            },1500)
            
        }
    }
        }}
        main();
