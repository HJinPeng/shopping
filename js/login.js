$(function() {
    $("#login").click(function() {
        $.ajax({
            type: "post",
            url: "php/login.php",
            data: {
                "username": $("#username").val(),
                "password": $("#password").val()
            },
            dataType: "text",
            success: function(xhr) {
                if (xhr == "用户不存在") {
                    console.log("用户不存在");
                } else if (xhr == "密码不正确") {
                    console.log("密码不正确");
                } else if (xhr == "数据库连接失败") {
                    console.log("数据库连接失败");
                } else {
                    //添加用户名到cookie
                    $.addCookie("username", $("#username").val());
                    //添加用户说明字段到cookie
                    var page = "" + $("#username").val() + ".top";
                    $.addCookie("page", page);
                    //跳转连接
                    window.location.href = xhr;
                }
            }
        });
    });
});