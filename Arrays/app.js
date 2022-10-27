window.addEventListener("load",onLoad);

function onLoad(){
    
    document.getElementById("submit").addEventListener("click",onSubmit);
    document.getElementById("populate").addEventListener("click",onPopulate);
    
}

var arr = [];

function onSubmit(){
    
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var occupation = document.getElementById("occupation").value;
    
    
    var obj =  {
        
        fName:fName,
        lName:lName,
        occupation:occupation
    }
    
    arr.push(obj);
    
    console.log(arr);
    
}

function onPopulate(){
    
    for(var i=0;i<arr.length;i++){
        
        var box = document.createElement("div");
        box.className = "box";
        
        var title = document.createElement("h1");
        
        title.textContent = arr[i].fName +" "+ arr[i].lName;
        
        var desc = document.createElement("p");
        
        desc.textContent = arr[i].occupation;
        
        box.appendChild(title);
        box.appendChild(desc);
        
        document.getElementById("results").appendChild(box);
        
    }
    
    
}