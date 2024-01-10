setInterval(() => {
        for (let i = 1; i <= 100; i++) {
            for (let j = 3; j <= 5; j++) {
                const selector = `.MuiTableRow-root:nth-child(${i}) > .MuiTableCell-root:nth-child(${j}) .css-ykqdxu:nth-child(9)`;
                document.querySelector(selector)?.click();
            }
        }

        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.MuiTableCell-root:nth-child(${i}) .css-ykqdxu:nth-child(9)`)?.click();
        }
    }, 500);
