$(".left ul li").on("click", onMenuShow);


loadSubScreens();



function loadSubScreens() {



    switch (window.sessionStorage.getItem("user") && window.sessionStorage.getItem("user").toLowerCase()) {

        case "users":

            onMenuShow.call($("[type=users]"));

            break;

    }
}

function onMenuShow() {

    switch ($(this).attr("type")) {


        case "users":

            $("[type=users]").addClass("active");

            window.sessionStorage.setItem("user", "users");

            $(".right").load("pages/users/users.html", function () {

                /*$.getScript(["pages/users/users.js"], function () {
                    console.log("dashboard script loaded");
                });
*/

                $.when(
                    $.getScript("com/Grid.js"),
                    $.Deferred(function (deferred) {
                        $(deferred.resolve);
                    })
                ).done(function () {
                    $.getScript("pages/users/users.js");
                    console.log("users loaded");

                });


            });

            break;

    }


}