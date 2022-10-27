window.addEventListener("load",onLoad);

var firstInput,secondInput,output;

function onLoad(){
    
    
    
    var box = document.createElement("div");
    box.className = "box";
    
    document.body.appendChild(box);
    
    
    firstInput = document.createElement("input");
    firstInput.className = "input";
    
    box.appendChild(firstInput);
    
    
    
    secondInput = document.createElement("input");
    secondInput.className = "input";
    
    box.appendChild(secondInput);
    
    
    
    output = document.createElement("output");
    output.className = "input output";
    
    box.appendChild(output);
    
    
    
    
    var addition = document.createElement("button");
    addition.className = "button clear";
    addition.textContent = "+"
    box.appendChild(addition);
    addition.addEventListener("click",doOperation);
    
    
    
    
    var subtraction = document.createElement("button");
    subtraction.className = "button";
    subtraction.textContent = "-"
    box.appendChild(subtraction);
    subtraction.addEventListener("click",doOperation);
    
    
    
    
    
    var multiplication = document.createElement("button");
    multiplication.className = "button";
    multiplication.textContent = "*"
    box.appendChild(multiplication);
    multiplication.addEventListener("click",doOperation);
    
    
    
    var division = document.createElement("button");
    division.className = "button";
    division.textContent = "/"
    box.appendChild(division);
    division.addEventListener("click",doOperation);
    
    
    
    var modularDivision = document.createElement("button");
    modularDivision.className = "button";
    modularDivision.textContent = "%"
    box.appendChild(modularDivision);
    modularDivision.addEventListener("click",doOperation);
    
    
}


function doOperation(){

    var first = Number(firstInput.value);
    var second = Number(secondInput.value);
    output.value=eval(first+this.textContent+second);
    
}