$(window).on("load", onLoad);

function onLoad() {


    loadScreens();


}

function loadScreens() {

    switch (window.sessionStorage.getItem("user") && window.sessionStorage.getItem("user").toLowerCase()) {

        case "dashboard":

            $("#screen").load("pages/dashboard/dashboard.html",function(){
                
                
                 $.getScript("pages/dashboard/dashboard.js", function () {
                    console.log("dashboard script loaded");
                });
                
                
            });

            break;
            
        case "users":

            
             $("#screen").load("pages/dashboard/dashboard.html",function(){
                
                
                 $.getScript("pages/dashboard/dashboard.js", function () {
                    console.log("dashboard script loaded");
                });
                
                
            });
           

            break;

        default:
            $("#screen").load("pages/login/login.html", function () {


                $.getScript("pages/login/login.js", function () {
                    console.log("login script loaded");
                });

            });

            break;

    }

}