window.addEventListener("load",onLoad);

function onLoad(){
    
    
    
   /* for(var i=0;i<10;i++){
        document.body.innerHTML += "<div class='box'></div>";
    }
     */
    
    for(var i=1;i<=10;i++){
        
        
        
    var box = document.createElement("div");   
        
        if(i%2 == 0){
            
            box.className = "box even"; 
            
        }else{
            
            box.className = "box odd";
        }
       
        box.textContent = i;
       
    document.body.appendChild(box);
    }
    
    
    /*for(var i=0;i<10;i++){
        
        
    }*/
    
    /*
    var i = 0;
    
    while(i<10){
        
         document.body.innerHTML += "<div class='box'></div>";
        
        
        i++;
    }*/
    /*
    var i=0;
    
    do{
        document.body.innerHTML += "<div class='box'></div>";
        
        
        i++;
        
        
    }while(i<10)*/
}

//Loops

//for loop
//while loop
//do while loop

//conditions

//if

// equal ==
// equal with type ===
// not equeal !=
// not equeal with type !==
// less than < - <=
// grater than > - >=
