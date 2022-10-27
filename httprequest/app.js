window.addEventListener("load", onLoad);

function onLoad() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            var arr = JSON.parse(this.responseText);


            for (var i = 0; i < arr.length; i++) {

                var grid = new Grid();
                grid.render(document.body);
                grid.setData(arr[i]);
            }

        }

    }

    xhr.open("GET", "data/data.json", true);
    xhr.send();



}