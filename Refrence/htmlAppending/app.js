window.addEventListener("load",onLoad);

function onLoad(){
    
    var box = document.getElementsByClassName("box")[0].style;
    
    box.width = "300px";
    box.height = "300px";
    box.border = "1px solid #e2e2e2";
    box.overflow = "auto";
    
    
    //Adding events to buttons
    
    document.getElementById("button1").addEventListener("click",getText);
    document.getElementById("button2").addEventListener("click",getText);
    document.getElementById("button3").addEventListener("click",getText);
    
}

function getText(){
    
    document.getElementsByClassName("box")[0].innerHTML =  document.getElementsByClassName("box")[0].innerHTML + '<p class="para"><strong>'+this.textContent+'</strong><span onclick="removeText(this)">-</span><span>&nbsp;&nbsp;</span><span onclick="addText(this)">+</span><span class="clear"></span></p>';
   
}

function removeText(me){
    
    me.parentNode.parentNode.removeChild(me.parentNode);

    //me.parentNode.style.display = "none";

}

function addText(me){
    
   me.parentNode.innerHTML = me.parentNode.innerHTML + "<p class='para'>"+me.parentNode.getElementsByTagName("strong")[0].textContent+"<span onclick='removeText(this)'>-</span></p>";
    
}