function Grid(){
    
    var cont;
    
    var left;
    
    var right;
    
    var image;
    
    var details;
    
    var title;
    
    var desc;
    
    var edit;
    
    var deletes;
    
    
    //reference content
    
    var _image = "assets/1.jpg";
    
    var _title = "title";
    
    var _desc = "description";
    
    var _edit = "Edit";
    
    var _deletes = "Delete";
    
    var _index;
    
    
    //private methods
    
    createElements();
    
    styles();
    
    appendChilds();
    
    update();
    
    addEvents();
    
    function createElements(){
        
        
        cont = document.createElement("div");
        left = document.createElement("div");
        right = document.createElement("div");
        details = document.createElement("div");
        image = document.createElement("div");
        title = document.createElement("h1");
        desc = document.createElement("p");
        edit = document.createElement("button");
        deletes = document.createElement("button");
        
    }
    
    function styles(){
        
        cont.className = "g-cont";
        left.className = "g-left";
        right.className = "g-right";
        image.className = "g-image";
        details.className = "g-details";
        title.className = "g-title";
        desc.className = "g-desc";
        edit.className = "btn";
        deletes.className = "btn";
    }
    
    function appendChilds(){
        
        right.appendChild(edit);
        right.appendChild(deletes);
        
        left.appendChild(image);
        details.appendChild(title);
        details.appendChild(desc);
        
        left.appendChild(details);
        
        cont.appendChild(left);
        cont.appendChild(right);
        
    }
    
    function update(){
        
        image.style.backgroundImage ="url("+ _image+")";
        title.textContent = _title;
        desc.textContent = _desc;
        edit.textContent = _edit;
        deletes.textContent = _deletes;        
        
    }
    
    function addEvents(){
        
        deletes.addEventListener("click",onDelete);
    }
    
    
    function onDelete(){
        
        
        
        var evt = document.createEvent("Event");
        evt.initEvent("deleted",true,true);
        evt.index = _index;
        this.dispatchEvent(evt);
        
        cont.parentElement.removeChild(cont);
    }
    
    //Public methods
    
    this.render = function(element){
        
        element.appendChild(cont);
        
    }
    
    this.setImage = function(img){
        
        _image = img;
        
        update();
        
    }
    
    this.setTitle = function(title){
        
        _title = title;
        
        update();
    }
    
    
    this.setDesc = function(desc){
        
        _desc = desc;
        
        update();
    }
    
    
    this.setIndex = function(index){
        _index = index;
    }
    
    
    
    
}