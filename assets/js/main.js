function openclose() {
    if (document.getElementById("Sidenav").style.width == "250px" || document.getElementById("main").style.marginLeft == "250px") {
        document.getElementById("Sidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";

    }
    else {
        document.getElementById("Sidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
}


var x = document.getElementsByClassName("childimg");

for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("click", myFunction);
}

function myFunction(event) {
    var clickedElement = event.target;
    document.getElementById("mainimg").src=clickedElement.src;
}