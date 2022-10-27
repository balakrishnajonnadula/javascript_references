function Slider(){
    
    var cont;
    var wrapper;
    var leftArrow;
    var rightArrow;
    
    var _data;
    
    var _index = 0;
    
    
    createElements();
    styles();
    appendChilds();
    update();
    //addEvents();
    
    function createElements(){
        
    cont = $("<div></div>");
        
        cont.on("mouseenter",onEnter);
        cont.on("mouseleave",onLeave);
    wrapper = $("<div></div>");
        
    leftArrow = $("<div></div>");
    rightArrow = $("<div></div>")
        
    }
    
    function styles(){
        
        cont.addClass("cont");
        wrapper.addClass("wrapper");
        leftArrow.addClass("left-arrow ion-chevron-left");
        rightArrow.addClass("right-arrow ion-chevron-right");
    }
    
    function appendChilds(){
        
        cont.append(wrapper);
        cont.append(leftArrow);
        cont.append(rightArrow);
        
    }
    
    function update(){
        
        
        $.each(_data,function(key,value){
            
            var image = $("<div></div>");
            image.addClass("image");
            image.attr("index",key);
            if(key != 0){
                image.css({left:"100%"})
            }
            image.css({backgroundImage:"url("+value+")"});
            wrapper.append(image);
            
        })
        
        
        
    }
    
    function addEvents(){

        leftArrow.on("click",moveLeft);
        rightArrow.on("click",moveRight);
        
    }
    function removeEvents(){

        leftArrow.off("click",moveLeft);
        rightArrow.off("click",moveRight);
        
    }
    
    function moveLeft(){
        
        
           if(_index == 0){
            
            _index = _data.length-1;
            
            
            $("[index="+_index+"]").css({left:"-100%"}).stop().animate({left:0});
                 $("[index=0]").stop().animate({left:"100%"});
               return;
        }
        
        
             $("[index="+_index+"]").stop().animate({left:"100%"});
        
        _index--;
        
        $("[index="+_index+"]").css({left:"-100%"}).stop().animate({left:0});
   
     
        
    }
    
    function moveRight(){
        
             $("[index="+_index+"]").animate({left:"-100%"});
        
        _index++;
        
        $("[index="+_index+"]").css({left:"100%"}).stop().animate({left:0});
   
        if(_index == _data.length){
            
            _index = 0;
            
            $("[index=0]").css({left:"100%"}).stop().animate({left:0});
        }
        
    }
    
    function onEnter(){
        
        clearInterval(timer);
        addEvents()
    }
    function onLeave(){
        timer = setInterval(function(){
        
        moveRight();
        
    },2000)
        
        removeEvents()
    }
    
    var timer = setInterval(function(){
        
        moveRight();
        
    },2000)
    
    this.render = function(k){
        
        k.append(cont);
        
    }
    
    this.setData = function(k){
        
        _data = k;
        
        update();
        
    }
    
}