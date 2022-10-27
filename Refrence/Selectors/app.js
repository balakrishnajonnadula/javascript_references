//Notifiers
/* 1. alert() 
    2. console.log() 
*/

//javascript selectors || Core document methods



window.addEventListener("load", onLoad);


function onLoad() {


    //Tag selector

    /*document.getElementsByTagName("div")[0].style.background = "red";
    document.getElementsByTagName("div")[0].style.height = "100px";
    document.getElementsByTagName("div")[0].style.width = "100px";*/

    //Class selector

    /*document.getElementsByClassName("box")[0].style.background = "blue";
    document.getElementsByClassName("box")[0].style.height = "100px";
    document.getElementsByClassName("box")[0].style.width = "100px";*/

    //id selector
    
    document.getElementById("box").style.background = "yellow";
    document.getElementById("box").style.height = "100px";
    document.getElementById("box").style.width = "100px";


}