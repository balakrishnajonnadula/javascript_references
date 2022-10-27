window.addEventListener("load", onLoad);

function onLoad() {



    var box = document.createElement("div");
    box.className = "box";

    document.body.appendChild(box);


    var btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = "Change";
    btn.addEventListener("click", changeColor);
    document.body.appendChild(btn);


}

var i = 0;

function changeColor() {

    var box = document.getElementsByClassName("box")[0];

    if (i == 0) {
        box.style.background = "blue";

        i++;
    } else if (i == 1) {
        box.style.background = "red";
        box.style.left = "calc(100% - 150px)";

        i++;
    } else {

        box.style.background = "green";

        i = 0;

    }

}