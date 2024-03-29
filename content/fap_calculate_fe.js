

let allSubjectRows = document.querySelectorAll('#ctl00_mainContent_divGrade table tbody tr');

function calculateGrade(tarGet = 5) {
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
        if ($(item).text().toLowerCase().includes("fe") ||
            $(item).text().toLowerCase().includes("final") ||
            $(item).text().toLowerCase().includes("total") ||
            +$(value).text() == 0) {
            continue;
        }
       
        // bôi xanh những giá trị đã get về
        $(item).css({ "color": "green", "font-weight": "bold" });
        $(allRowFE).css({ "color": "green", "font-weight": "bold" });
        $(value).css({ "color": "green", "font-weight": "bold" });
        $(weight).css({ "color": "green", "font-weight": "bold" });

        var percent = ($(weight).text().split(' ')[0]) / 100;
        //console.log(item.text() + ": " + "WEIGHT: " + $(weight).text() + " (" + percent + ") VALUE: " + $(value).text());
        total += +$(value).text() * percent;
    }
    var diemtrungbinh = (tarGet - (total)) / percentFE;
    //console.log("-------------");
    if(diemtrungbinh < 4)
    {
        diemtrungbinh = 4;
    }

    if(document.getElementById('fe') != null)
    {
        document.getElementById('fe').textContent = ` FE CẦN ĐẠT: ${diemtrungbinh.toFixed(2)} ĐIỂM`;
    }
    else{
        $('#ctl00_mainContent_divGrade table caption').append(` - <span class="label label-info" id ="fe"> FE CẦN ĐẠT: ${diemtrungbinh.toFixed(2)} ĐIỂM</span>`);
    }
        //console.log('% FE: ' + percentFE);
       // console.log('Diem pass: ' + diemtrungbinh);
}

function getGrade(){
    var input = document.createElement("input");
    input.type = "number";
    input.id = "grade";
    input.placeholder = "Điểm trung bình muốn đạt";
    var button = document.createElement("button");
    button.innerHTML = "Submit";
    button.id = "Tính FE";
    $('#ctl00_mainContent_divGrade').append(input);
    $('#ctl00_mainContent_divGrade').append(button);
    button.addEventListener("click", function(e){
        e.preventDefault();
        if (input.value < 1) {
            input.value = 1;
        } else if (input.value > 10) {
            input.value = 10;
        }
        calculateGrade(input.value);
    });
}

const main = async () => {
    const enabled4 = await getFromStorage('FAP_4', '');
    if(enabled4==true)
    {
        //console.log(enabled4);
        calculateGrade();
        getGrade();
    }
}
    main();

