const main = async () => {
    const enabled = await getFromStorage('EDN_1', '');
    if(enabled==true)
    {
document.getElementsByTagName('button')[0].click();
    }
}
main();
