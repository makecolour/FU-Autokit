const data = {};
const enabled = {};
function checkPg(now) {
    if (now == "https://flm.fpt.edu.vn/gui/role/student/ListCurriculum") {
        return 0;
    }
    else if (now == "https://flm.fpt.edu.vn/gui/role/student/SyllabusManagement") {
        return 1;
    }
    else {
        return 2;
    }
}

function autocomplete(inp, arr) {
    // const parent = inp.parentElement;
    // parent.style.display = "flex";
    // parent.style.flexDirection = "column";
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


var id = ["txtSubCode", "txtKeyword"];

async function fetchData() {
    let enable = await chrome.storage.sync.get(['FLM_3']);
    Object.assign(enabled, enable);
    let all = await chrome.storage.local.get(['subjects', 'subjectsName', 'listCurriculum', 'listCurriculumName']);
    Object.assign(data, all);
}
fetchData().then(() => {
    if(enabled.FLM_3 == true){
        if (checkPg(window.location.href) == 0) {
            const category = document.getElementById("ddlSeachOn");
            const fill = document.getElementById("txtKeyword");
            autocomplete(fill, data.listCurriculum);
            //console.log(category);
            category.addEventListener('change', function () {
                fill.setAttribute("autocomplete", "off");
                if (category.value == 'Code') {
                    //console.log(listCurriculum);
                    autocomplete(fill, data.listCurriculum);
                    //console.log("Code");
                }
                else if (category.value == 'Name') {
                    //console.log(listCurriculumName);
                    autocomplete(fill, data.listCurriculumName);
                    //console.log("Name");
                }
                else {
                    //console.error("changer");
                }
            });
        }
        else if (checkPg(window.location.href) == 1) {
            const category = document.getElementById("ddlSeachOn");
            const fill = document.getElementById("txtSubCode");
            autocomplete(fill, data.subjects);
            //console.log(category);
            category.addEventListener('change', function () {
                fill.setAttribute("autocomplete", "off");
                if (category.value == "Code") {
                    autocomplete(fill, data.subjects);
                    //console.log("Code");
                }
                else if (category.value == "Name") {
                    autocomplete(fill, data.subjectsName);
                   // console.log("Name");
                }
                else {
                    //console.error("changer");
                }
            });
        
        }
        else if (checkPg(window.location.href) == 2) {
            if (document.getElementById("txtSubCode")) {
                const fill = document.getElementById("txtSubCode");
                fill.setAttribute("autocomplete", "off");
                autocomplete(fill, data.subjects);
            }
            else if (document.getElementById("txtKeyword")) {
                const fill = document.getElementById("txtKeyword");
                fill.setAttribute("autocomplete", "off");
                autocomplete(fill, data.subjects);
            }
            else {
                //console.error("fill");
            }
        }
        else {
            //console.error("checcc");
           // console.error(checkPg);
        }
    }
    else{
        console.error("Disabled");
    }
});

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/



