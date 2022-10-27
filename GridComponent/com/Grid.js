function Grid(){
    
    
    var cont;
    
    var title;
    
    var _title;
    
    
    
    createElements();
    styles();
    appendChilds();
    update();
    addEvents();
    
    
    
    function createElements(){
        
        cont = document.createElement("div");
        title = document.createElement("h1");
        
    }
    
    function styles(){
        
        cont.className = "grid-cont";
        title.className = "grid-title";
    }
    
    function appendChilds(){
        
        cont.appendChild(title);
    }
    
    function update(){
        
        title.textContent = _title;
    }
    
    function addEvents(){
        
        cont.addEventListener("click",onCont);
    }
    
    function onCont(){
        
        var evt = document.createEvent("Event");
        evt.initEvent("selected",true,true);
        evt.title = _title;
        this.dispatchEvent(evt);
        
    }
    
    // public methods
    
    this.render = function(element){
        
        element.appendChild(cont);
        
    }
    
    this.setTitle = function(title){
        
        _title = title;
        update();
    }
    
}