const gen = document.getElementById("KKK");
const fap1 = document.getElementById("fapLogin");
const fap2 = document.getElementById("fapFeedback");
const fap3 = document.getElementById("fapGPA");
const fap4 = document.getElementById("fapFE");
const fap5 = document.getElementById("fapNoti");
const edn1 = document.getElementById("ednLogin");
const edn2 = document.getElementById("ednGrade");
const cms1 = document.getElementById("cmsLogin");
// const cms2 = document.getElementById("cmsTool");
const crs1 = document.getElementById("crsLogin");
const crs2 = document.getElementById("crsGetLink");
const crs3 = document.getElementById("crsGrade");
const flm1 = document.getElementById("flmLogin");
const flm2 = document.getElementById("flmViet");
const flm3 = document.getElementById("flmFill");
const dng1 = document.getElementById("dngFill");
const ocd1 = document.getElementById("ocdLogin");
const lbr1 = document.getElementById("lbrFill");


gen.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('K', state);
})

fap1.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('FAP_1', state);
})
fap2.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('FAP_2', state);
})
fap3.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('FAP_3', state);
})
fap4.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('FAP_4', state);
})
fap5.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('FAP_5', state);
})

edn1.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('EDN_1', state);
})
edn2.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('EDN_2', state);
})

cms1.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('CMS_1', state);
})

// cms2.addEventListener('change', function () {
//     var state = this.checked;
//     setToStorage('CMS_2', state);
// })

crs1.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('CRS_1', state);
})
crs2.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('CRS_2', state);
})
crs3.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('CRS_3', state);
})

flm1.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('FLM_1', state);
})
flm2.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('FLM_2', state);
})
flm3.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('FLM_3', state);
})

dng1.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('DNG_1', state);
})

ocd1.addEventListener('change', function () {
    var state = this.checked;
    setToStorage('OCD_1', state);
})

lbr1.addEventListener('change', function (e) {
    var state = this.checked;
    if(state == true)
    {
        document.getElementById("lbr").style.display = "block";
    }
    else{
        document.getElementById("lbr").style.display = "none";
    }
    setToStorage('LBR_1', state);
})



