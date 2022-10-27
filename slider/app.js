$(window).on("load",onLoad);
function onLoad(){
    
    
    var arr = ["assets/1.jpg","assets/2.jpg","assets/3.jpg","assets/4.jpg","assets/5.jpg",]
    
    
    var slider = new Slider();
    slider.render($("body"));
    slider.setData(arr)
    
    
}