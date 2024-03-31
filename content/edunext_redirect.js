const main = async () => {
    const enabled = await getFromStorage('EDN_1', '');
    console.log(enabled)
    if (enabled == true) {
        document.getElementsByTagName('button')[0].click();
    }
}
window.addEventListener('load', function() {
    setTimeout(()=>{main();}, 0);
  });
  