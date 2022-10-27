window.addEventListener("load",onLoad);

function onLoad(){
    
    
    document.getElementsByClassName("box")[0].style.width = "200px";
    document.getElementsByClassName("box")[0].style.height = "200px";
    document.getElementsByClassName("box")[0].style.border = "1px solid #e2e2e2";
    document.getElementsByClassName("box")[0].style.textAlign = "center";
    document.getElementsByClassName("box")[0].style.lineHeight = "200px";
    document.getElementsByClassName("box")[0].style.transition = "0.5s ease-in-out";
    
    
/*    document.getElementById("button1").addEventListener("click",button1Click);
    document.getElementById("button2").addEventListener("click",button2Click);*/
    
     document.getElementById("button1").addEventListener("click",getText);
     document.getElementById("button2").addEventListener("click",getText);
     document.getElementById("button3").addEventListener("click",getText);
    
}


/*function button1Click(){
    
    document.getElementsByClassName("box")[0].textContent = "Hyderabad";
    
}

function button2Click(){
    
    document.getElementsByClassName("box")[0].textContent = "Secundrabad";
    
}*/


function getText(){
    
    document.getElementsByClassName("box")[0].textContent = this.textContent;
    document.getElementsByClassName("box")[0].style.background = this.getAttribute("color");
    document.getElementsByClassName("box")[0].style.color = "#fff";
  
}