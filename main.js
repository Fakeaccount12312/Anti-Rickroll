rickrolls = [
    "www.youtube.com/watch?v=oHg5SJYRHA0",
    "www.youtube.com/watch?v=dQw4w9WgXcQ",
    "www.youtube.com/watch?v=iik25wqIuFo",
    "www.youtube.com/watch?v=clwgJ_T2cdQ",
    "www.youtube.com/watch?v=ub82Xb1C8os",
    "www.youtube.com/watch?v=xfr64zoBTAQ",
    "www.youtube.com/watch?v=IO9XlQrEt2Y",
    "www.youtube.com/watch?v=wzSVOcgKq04",
    "www.youtube.com/watch?v=3HrSN7176XI"
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
