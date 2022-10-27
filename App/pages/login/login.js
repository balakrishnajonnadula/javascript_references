

    $("#login-button").on("click", onLogin);


function onLogin() {


    var uName = document.forms.namedItem("login-form").username.value;
    var pwd = document.forms.namedItem("login-form").password.value;
    $(".error").hide()
    if (uName == "") {
        $(document.forms.namedItem("login-form").username).next(".error").show();
        return;
    }
    if (pwd == "") {
        $(document.forms.namedItem("login-form").password).next(".error").show();
        return;
    }

    $.ajax({
        url: "data/login.json",
        dataType: "json",
        success: function (data) {
            if (!data[uName]) {
                $("#message").show();
                return;
            }

            if (data[uName] && data[uName] != pwd) {
                $("#message").show();
                return;
            }

            if (data[uName] && data[uName] == pwd) {
                $("#message").addClass("green").show().text("success");

                $("#screen").load("pages/dashboard/dashboard.html");

                window.sessionStorage.setItem("user", "dashboard");

                return;
            }
        },
        error: function () {

        }

    })


}
