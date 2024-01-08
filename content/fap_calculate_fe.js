let allSubjectRows = document.querySelectorAll('#ctl00_mainContent_divGrade table tbody tr');

(function calculateGrade() {
    var tarGet = 5;
    let total = 0;
    let allRowFE = allSubjectRows[allSubjectRows.length - 1];
    let percentFE = (+$(allRowFE).find('td:nth-child(2)').text().split(' ')[0]) / 100;

    for (let i = 0; i < allSubjectRows.length; i++) {
        let element = allSubjectRows[i];
        // let allRowFE = allSubjectRows[allSubjectRows.length - 1];
        let item = $(element).find('td:nth-child(2)');
        if ($(element).children('td').length == 4) {
            item = $(element).find('td:nth-child(1)');
        }
        let weight;
        let value;
        if ($(allSubjectRows[i]).children('td').length == 5) {
            value = $(element).find('td:nth-child(4)');
            weight = $(element).find('td:nth-child(3)');
        } else {
            value = $(element).find('td:nth-child(3)');
            weight = $(element).find('td:nth-child(2)');
        }
        //gặp những cái phần tử như này thì không get điểm
        if ($(item).text().includes("FE") ||
            $(item).text().includes("Final") ||
            $(item).text().includes("Total") ||
            +$(value).text() == 0) {
            continue;
        }
        // bôi xanh những giá trị đã get về
        $(item).css({ "color": "green", "font-weight": "bold" });
        $(allRowFE).css({ "color": "green", "font-weight": "bold" });
        $(value).css({ "color": "green", "font-weight": "bold" });
        $(weight).css({ "color": "green", "font-weight": "bold" });

        var percent = ($(weight).text().split(' ')[0]) / 100;
        console.log(item.text() + ": " + "WEIGHT: " + $(weight).text() + " (" + percent + ") VALUE: " + $(value).text());
        total += +$(value).text() * percent;
    }
    var diemtrungbinh = (tarGet - (total)) / percentFE;
    console.log("-------------");
    if(diemtrungbinh < 4)
    {
        diemtrungbinh = 4;
    }
    $('#ctl00_mainContent_divGrade table caption').append(` - <span class="label label-info"> FE CẦN ĐẠT: ${diemtrungbinh.toFixed(2)} ĐIỂM</span>`);
    console.log('% FE: ' + percentFE);
    console.log('Diem pass: ' + diemtrungbinh);
})();

