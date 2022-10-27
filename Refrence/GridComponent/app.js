window.addEventListener("load", onLoad);

function onLoad() {


    var arr = ["Hyderabad", "Secundrabad", "Hitech city"];


    for (var i = 0; i < arr.length; i++) {
        var com = new Grid();

        com.render(document.getElementById("content"));
        com.setTitle(arr[i]);

    }
    
    document.getElementById("content").addEventListener("selected",onSelected);
}

function onSelected(evt){
    
    document.getElementById("selected-data").textContent = evt.title;
}