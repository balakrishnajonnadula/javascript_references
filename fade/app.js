$(window).on("load", onLoad);


var arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];


var selected;

function onLoad() {

   
    $(".close").on("click", closePopup);
    $(".left i").on("click",moveLeft);
    $(".right i").on("click",moveRight);

    generateImages();
}


function closePopup() {
    $(".popup").fadeOut();
}

function generateImages() {

    $.each(arr, function (key, value) {
        
        var cont = $("<div></div>");
       
        cont.addClass("cont");
        var image = $("<img></img>");
        image.addClass("image");
        image.attr("index",key);
        image.attr("src","assets/" + value);
        cont.append(image);
        $(image).on("click",showImage);
        $("body").append(cont);
    })

}

function showImage(){
    selected = $(this).attr("index");
    $("#popup-image").attr("src",this.src);
    $(".popup").fadeIn();
    arrowControls();
}

function moveLeft(){
    var left = arr[selected - 1];
    console.log(left);
    $("#popup-image").attr("src","assets/"+left);
    selected = Number(selected) - 1;
    arrowControls();
}

function moveRight(){
 
    var right = arr[Number(selected) + 1];
    $("#popup-image").attr("src","assets/"+right);
    selected = Number(selected) + 1;
     
    arrowControls();
}
function arrowControls(){
    if(selected == 3){
        $(".right i").hide();
    }else{
        $(".right i").show();
    }
    
    if(selected == 0){
        $(".left i").hide();
    }else{
        $(".left i").show();
    }
}