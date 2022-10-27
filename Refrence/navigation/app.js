$(window).on("load",onLoad);

function onLoad(){
    
    $(".nav li").on("mouseenter",onHover);
    $(".nav li").on("mouseleave",onOut);
    $(".nav").on("mouseleave",onNavOut);
    
}

function onHover(){
    
var width = $(this).outerWidth();
var left = $(this).position().left;
    $(this).css({color:"#fff"});
    $(".fill").stop().animate({left:left,width:width});
    
}
function onOut(){
    
    $(this).css({color:"#333"});
    
    
}
function onNavOut(){
    
    $(".fill").stop().animate({left:0,width:0});
    
    
}