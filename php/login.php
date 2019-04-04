<?php
    $username = $_POST["username"];
    $password = $_POST["password"];

    $server = "localhost";
    $db_user = "root";
    $db_password = "";
    $db = "phone";
    $link = mysqli_connect($server,$db_user,$db_password,$db);
    if($link){
        $sql = "select * from user where username = '{$username}'";
        //$sql = "select * from user where username = 'zs'";
        $query = mysqli_query($link,$sql);
        $res = mysqli_fetch_assoc($query);
        if($res){
            if($res["password"] == $password){
                echo "http://localhost:8081/phone/index.html";
            }else{
                echo "密码不正确";
            }
        }else{
            echo "用户不存在";
        }
    }else{
        echo "数据库连接失败";
    }
?>