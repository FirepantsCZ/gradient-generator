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
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function setRandomColorGrad() {
    reset();
    document.body.style.backgroundImage = "-webkit-linear-gradient(" + getRandomColor() + " , " + getRandomColor() + ")";
}
function setRandomColor() {
    reset();
    var randcol = getRandomColor();
    changeBackground(randcol);
}
function bivis() {
    document.getElementById("bib").style.visibility = "visible";
}
function reset() {
    document.body.style.backgroundImage = "-webkit-linear-gradient(#12c2e9, #c471ed, #f64f59)";
    document.getElementById("bib").style.visibility = "hidden";
}
window.onload = function () {
    const button = document.getElementById("but");
    // const reset = document.getElementById("rst");
    button.addEventListener("click", function () { change(); });
    // reset.addEventListener("click", function () { reset(); });
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