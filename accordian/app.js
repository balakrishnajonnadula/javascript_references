$(window).on("load",onLoad);

function onLoad(){
    
    $(".accordian").find("h1").on("click",showContent);
    
}

function showContent(){

   
     $(".accordian h1.active").removeClass("active").next(".content").slideUp();
    
    $(this).addClass("active").next().slideDown();
    
}