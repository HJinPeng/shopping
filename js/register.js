$(function() {
    $("#reg").click(function() {
        // console.log("1");
        // var username = $(".username").val();
        // //console.log(username);
        // var password = $(".password").val();
        // var password2 = $(".password2").val();
        // var str = {
        //     "username": $(".username").val(),
        //     "password": $(".password").val(),
        //     "password2": $(".password2").val()
        // };

        // var json = {};
        // json["username"] = $(".username").val();
        // json["password"] = $(".password").val();
        // json["password2"] = $(".password2").val();
        $.ajax({
            type: "POST",
            url: "php/register.php",
            data: {
                "username": $("#username").val(),
                "password": $("#password").val(),
                "password2": $("#password2").val()
            },

            success: function(xhr) {

                window.location.href = xhr;
            },
            error: function(xhr) {
                console.log("222");
            }
        });

    });

});