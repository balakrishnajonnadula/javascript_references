function Grid(){
    
    
    var cont;
    
    var image;
    
    var name;
    
    var edit;
    
    var deletes;
    
    var _image;
    var _name;
    
    
    createElements();
    styles();
    appendChilds();
    addEvents();
    update();
    
    
    function createElements(){
        
        cont = $("<div></div>");
        image = $("<img/>");
        name = $("<h1></h1>");
        edit = $("<button></button>");
        deletes = $("<button></button>")
        
        
    }
    
    function styles(){
        
        cont.addClass("cont");
        image.addClass("image");
        name.addClass("name");
        edit.addClass("edit");
        deletes.addClass("deletes");
        
    }
    
    function appendChilds(){
        
        cont.append(image);
        cont.append(name);
        cont.append(edit);
        cont.append(deletes);
    }
    
    function addEvents(){
        
        edit.on("cilck",onEdit);
        deletes.on("cilck",deletes);
    }
    
    function onEdit(){
        
    }
    function onDeletes(){
        
    }
    
    function update(){
        
        image.attr("src",_image);
        name.text(_name);
        edit.text("Edit");
        deletes.text("Delete");
        
    }
    
    this.render = function(k){
        
        k.append(cont);
    }
    this.setData = function(k){
        _image = "assets/users/"+k.image;
        _name = k.name;
        update();
    }
    
}