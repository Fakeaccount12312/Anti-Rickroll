rickrolls = [
    "oHg5SJYRHA0",
    "dQw4w9WgXcQ",
    "iik25wqIuFo",
    "clwgJ_T2cdQ",
    "ub82Xb1C8os",
    "xfr64zoBTAQ",
    "IO9XlQrEt2Y",
    "wzSVOcgKq04",
    "3HrSN7176XI"
    ];

function main() {
    //document.body.style.border = "5px solid red";
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (rickrolls.some(v => links[i].href.includes(v))) {
            links[i].innerHTML = links[i].innerHTML +  " (Rickroll)";
        }
    }
}

setTimeout(main, 1000);
