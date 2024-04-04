const main = async () => {
    const enabled1 = await getFromStorage('EDN_2', '');
    if (enabled1 == true) {

        setInterval(function () {
            for (let i = 1; i <= 100; i++) {
                const selector1 = `.MuiTableRow-root:nth-child(${i}) > .MuiTableCell-root:nth-child(3) .css-ykqdxu:nth-child(9)`;
                const element1 = document.querySelector(selector1);
                if (element1) {
                    element1.click();
                }

                const selector2 = `.MuiTableRow-root:nth-child(${i}) > .MuiTableCell-root:nth-child(4) .css-ykqdxu:nth-child(9)`;
                const element2 = document.querySelector(selector2);
                if (element2) {
                    element2.click();
                }

                const selector3 = `.MuiTableRow-root:nth-child(${i}) > .MuiTableCell-root:nth-child(5) .css-ykqdxu:nth-child(9)`;
                const element3 = document.querySelector(selector3);
                if (element3) {
                    element3.click();
                }
            }

            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.MuiTableCell-root:nth-child(${i}) .css-ykqdxu:nth-child(9)`).click();
            }
        }, 500);
    }
}
window.onload = main();