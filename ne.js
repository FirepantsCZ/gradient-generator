var iter = 1;
var bgiter = 1;

var timeflag = false;

var image = null;
var lastimage = null;
var lastimage2 = null;

var currimage1grad1 = null;
var currimage1grad2 = null;

var histimage1grad1 = null;
var histimage1grad2 = null;
var histimage2grad1 = null;
var histimage2grad2 = null;
var histimage3grad1 = null;
var histimage3grad2 = null;

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
function scren() {
    html2canvas(document.body, {
        backgroundColor: null,
        scrollX: 0,
        scrollY: -window.scrollY,
        scale: 1
    }).then(function (canvas) {
        // document.body.appendChild(canvas);
        canvas.style.border = "none";
        var image = canvas.toDataURL("image/png");
        window.open(image);
        // window.open(window.location.href = image);
    });
}
function scrennop() {
    html2canvas(document.body, {
        backgroundColor: null,
        scrollX: 0,
        scrollY: -window.scrollY,
        scale: 1
    }).then(function (canvas) {
        // document.body.appendChild(canvas);
        canvas.style.border = "none";
        lastimage2 = lastimage;
        lastimage = image;
        image = canvas.toDataURL("image/png");
        document.getElementById("bimg").src = image;
        // document.getElementById("bimg").style.zIndex = 1;
        // window.open(window.location.href = image);
    });
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function setRandomColorGrad() {
    scrennop();
    setTimeout(function () {
        console.log("afterscren");
        document.getElementById("bimg").style.opacity = "1";
        setTimeout(function () {
            if (bgiter == 1) {
                histimage3grad1 = histimage2grad1;
                histimage3grad2 = histimage2grad2;

                histimage2grad1 = histimage1grad1;
                histimage2grad2 = histimage1grad2;

                histimage1grad1 = currimage1grad1
                histimage1grad2 = currimage1grad2;

                currimage1grad1 = getRandomColor();
                currimage1grad2 = getRandomColor();
                document.body.style.backgroundImage = "-webkit-linear-gradient(" + currimage1grad1 + " , " + currimage1grad2 + ")";
            }
            else if (bgiter == 2) {

            }
            else if (bgiter == 3) {

            }
            document.getElementById("bimg").style.opacity = "0";
            console.log(iter);
            if (iter == 1) {
                document.getElementById("img1").src = image;
                document.getElementById("img1").style.opacity = "1";
                document.getElementById("img2").src = lastimage;
                document.getElementById("img3").src = lastimage2;
                if (lastimage != null) {
                    document.getElementById("img2").style.opacity = "1";
                }
                if (lastimage2 != null) {
                    document.getElementById("img3").style.opacity = "1";
                }
            }
            else if (iter == 2) {

            }
            else if (iter == 3) {

            }
            console.log(iter);
        }, 510);
    }, 510);
}
function setRandomColor() {
    reset();
    var randcol = getRandomColor();
    changeBackground(randcol);
}
function bivis() {
    document.getElementById("bib").style.opacity = "1";
    document.getElementById("bib2").style.opacity = "0";
}
function transvis() {
    document.getElementById("bib").style.opacity = "1";
    document.getElementById("bib2").style.opacity = "1";
}
function reset() {
    document.body.style.backgroundImage = "-webkit-linear-gradient(#12c2e9, #c471ed, #f64f59)";
    document.getElementById("bib").style.opacity = "0";
    document.getElementById("bib2").style.opacity = "0";
}
window.onload = function () {
    const button = document.getElementById("but");
    // const reset = document.getElementById("rst");
    button.addEventListener("click", function () { change(); });
    // reset.addEventListener("click", function () { reset(); });
    /* console.log(getOffset(document.getElementById("bib")).left);
     console.log(getOffset(document.getElementById("bib")).right);
     console.log(getOffset(document.getElementById("bib")).top);
     console.log(getOffset(document.getElementById("bib")).bottom);
     console.log("trans:")
     console.log(getOffset(document.getElementById("bib2")).left);
     console.log(getOffset(document.getElementById("bib2")).right);
     console.log(getOffset(document.getElementById("bib2")).top);
     console.log(getOffset(document.getElementById("bib2")).bottom); */
     setTimeout(function() {
         document.getElementById("headerr").style.opacity = 0;
     }, 3000);
}
function changeBackground(color) {
    document.body.style.background = color;
}
const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}
function change() {
    var sra = prompt("Barva: ");
    var col = isColor(sra);
    if (col == true) {
        reset();
        changeBackground(sra);
    }

    else {
        console.log("To není barva :^( ");
        window.alert("To není barva :^(");
    }
}
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
function setPrevGrad1() {
    document.body.style.backgroundImage = "-webkit-linear-gradient(" + histimage1grad1 + " , " + histimage1grad2 + ")";
    currimage1grad1 = histimage1grad1;
    currimage1grad2 = histimage1grad2;
}
function setPrevGrad2() {
    document.body.style.backgroundImage = "-webkit-linear-gradient(" + histimage2grad1 + " , " + histimage2grad2 + ")";
    currimage1grad1 = histimage2grad1;
    currimage1grad2 = histimage2grad2;
}
function setPrevGrad3() {
    document.body.style.backgroundImage = "-webkit-linear-gradient(" + histimage3grad1 + " , " + histimage3grad2 + ")";
    currimage1grad1 = histimage3grad1;
    currimage1grad2 = histimage3grad2;
}
function overlay(num) {
    if (num == 1 && image != null) {
        overactive(num);
    }
    else if (num == 2 && lastimage != null) {
        overactive(num);
    }
    else if (num == 3 && lastimage2 != null) {
        overactive(num);
    }
    else {
        console.log("what the actual fuck did you do, you weren't supposed to see this")
    }
}
function overlayleave(num) {
    if (image != null)  {
        document.getElementById("overlay" + num).style.transform = "scale(1)";
        document.getElementById("overlay" + num).style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("overlay" + num).style.opacity = 0;
        document.getElementById("overlay" + num).style.zIndex = 1;
        document.getElementById("img" + num).style.zIndex = 2;
        console.log("fuckwad")
    }
}
function checktimeflag() {
    if (timeflag == true) {
        return true;
    }
    else {
        return false;
    }
}
function checktimerep() {
    if (checktimeflag() != true) {
        console.log("the second coming of ass");
    }
    else {
        checktimerep();
    }
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
function overactive(num) {
    document.getElementById("overlay" + num).style.transform = "scale(1.4)";
    document.getElementById("overlay" + num).style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.getElementById("overlay" + num).style.zIndex = 4;
    document.getElementById("overlay" + num).style.opacity = 1;
    document.getElementById("img" + num).style.zIndex = 3;
    document.getElementById("img" + num).style.cursor = "pointer";
    document.getElementById("over1text").style.opacity = 1;
}
function goHome() {
    window.open("https://fee71951.ngrok.io", "_self")
}