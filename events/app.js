window.addEventListener("load",onLoad);

function onLoad(){
    
    document.getElementsByClassName("box")[0].style.width = "100px";
    document.getElementsByClassName("box")[0].style.height = "100px";
    document.getElementsByClassName("box")[0].style.background = "blue";
    
    
    document.getElementById("button").addEventListener("click",buttonClick);
    
    
   /* document.getElementsByClassName("box")[0].style.width = "100px";
    document.getElementsByClassName("box")[0].style.height = "100px";
    document.getElementsByClassName("box")[0].style.background = "blue";
    
    
    document.getElementsByClassName("box")[0].addEventListener("mouseover",boxOver);
    document.getElementsByClassName("box")[0].addEventListener("mouseout",boxOut);
    document.getElementsByClassName("box")[0].addEventListener("click",boxClick);*/
    
    
}

/*

function boxOver(){
    
    document.getElementsByClassName("box")[0].style.background = "red";
}

function boxOut(){
    
    document.getElementsByClassName("box")[0].style.background = "blue";
}

function boxClick(){
    
    document.getElementsByClassName("box")[0].style.background = "green";
   
}

*/


function buttonClick(){
    
   document.getElementsByClassName("box")[0].style.background = "red";
    
}