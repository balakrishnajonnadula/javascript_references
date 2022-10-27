$(window).on("load",onLoad);

function onLoad(){
    
   // $("#start").on("touchstart",onStart);
    $("#start").on("touchend",onEnd);
    $("#second").on("touchend",onSecondEnd);
    $("#home").on("touchend",onHomeEnd);
    
    
}

function onEnd(){
    
    $("#screen1").css({transform:"translateX(-100%)"});
    
     $("#screen2").css({transform:"translateX(100%)",transition:"none"});
    setTimeout(function(){
    $("#screen2").css({transform:"translateX(0)",transition:".3s ease-in-out"});
    },1);
    
    
}
function onSecondEnd(){
    
    $("#screen2").css({transform:"translateX(-100%)"});
    $("#screen3").css({transform:"translateX(0)"});
    
}
function onHomeEnd(){
    
    $("#screen3").css({transform:"translateX(100%)"});
    $("#screen1").css({transform:"translateX(0)"});
    
}