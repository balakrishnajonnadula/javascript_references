function Grid(){
    
    
    
    var cont;
    var image;
    var details;
    var name;
    var edu;
    
    var _image;
    var _name;
    var _edu;
    
    
    createElements();
    styles();
    appendChilds();
    update();
    
    function createElements(){
        
        cont = document.createElement("div");
        image = document.createElement("div");
        details = document.createElement("div");
        
        
        name = document.createElement("h1");
        edu = document.createElement("p");
        
    }
    
    function styles(){
        
        cont.className = "cont";
        image.className = "img";
        name.className = "name";
        details.className = "details";
        edu.className = "edu";
    }
    
    
    function appendChilds(){
        cont.appendChild(image);
        details.appendChild(name);
        details.appendChild(edu);        
        cont.appendChild(details);
    }
    function update(){
        
        image.style.backgroundImage = "url(assets/"+_image+")";
        name.textContent = _name;
        edu.textContent = _edu;
    }
    
    
    
    this.render = function(k){
        
        k.appendChild(cont);
    }
    
    this.setData = function(k){
        
        _image = k.image;
        _name = k.name;
        _edu = k.edu;
        update();
    }
    
}