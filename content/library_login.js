var check = false;

var divs = document.querySelectorAll('.active');

for (i = 0; i < divs.length; ++i) {
    if (divs[i].innerHTML == "Login") {
        check = true;
        break;
    }
};

if (check == true) {
    window.location.replace("https://library.fpt.edu.vn/Auth/Login");
}

