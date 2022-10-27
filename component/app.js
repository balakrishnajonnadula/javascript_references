window.addEventListener("load",onLoad);

 var obj;

function onLoad(){
    
    
    
    obj = [
        
        {
            image:"assets/1.jpg",
            title:"Ramesh",
            desc:"About ramesh"
            
        },
        {
            image:"assets/2.jpg",
            title:"Suresh",
            desc:"About suresh"
        },
        {
            image:"assets/3.jpg",
            title:"Suresh3",
            desc:"About suresh"
        },
        {
            image:"assets/4.jpg",
            title:"Suresh4",
            desc:"About suresh"
        },
        {
            image:"assets/5.jpg",
            title:"Suresh5",
            desc:"About suresh"
        },
        {
            image:"assets/6.jpg",
            title:"Suresh6",
            desc:"About suresh"
        },
        {
            image:"assets/7.jpg",
            title:"Suresh7",
            desc:"About suresh"
        },
        {
            image:"assets/8.jpg",
            title:"Suresh8",
            desc:"About suresh"
        }
        
        
    ];
    
    document.getElementById("count").textContent = obj.length;
    
    for(var i=0;i<obj.length;i++){
 
    var com = new Grid();    
    com.render(document.body);
    com.setImage(obj[i].image);
    com.setTitle(obj[i].title);
    com.setDesc(obj[i].desc);
    com.setIndex(i);
    
    }
    
    
    
    document.body.addEventListener("deleted",onDeleted);
}


function onDeleted(evt){
    
    delete obj[evt.index];
    
   var copyObj = obj.filter(function(element){
       
       return element !=null;
       
   });
  
    
    document.getElementById("count").textContent = copyObj.length;
    
}