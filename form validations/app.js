$(window).on("load",onLoad);

function onLoad(){
    
    
    $("#submit").on("click",onSubmit);
    
    
}

function onSubmit(){
    
   var fName = $("#fname").val();
    var lName = $("#lname").val();
    var email = $("#email").val();
    var pass = $("#password").val();
    
    $(".error").fadeOut();
    
    if(fName == ""){
        
        $("#fname").next(".error").fadeIn();
        return;
    }
    
   
    
    if(email == ""){
        
        $("#email").next(".error").fadeIn();
        return;
    }
    
    if(email.indexOf("@") == -1){
        
        $("#email").next(".error").fadeIn().text("Please include @ in the email address");
        return;
    }
    
    if(email.split("@")[1] == ""){
        
        $("#email").next(".error").fadeIn().text("Please enter domain name after @");
        return;
    }
    
    if(pass == ""){
        
        $("#password").next(".error").fadeIn();
        return;
    }
    
    
}