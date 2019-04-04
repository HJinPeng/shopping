<?php


    $server = "localhost";
    $db_user = "root";
    $db_password = "";
    $db = "phone";

    $username = $_POST["username"];
    // echo $username;
    // echo "1";
    $password = $_POST["password"];
    $password2 = $_POST["password"];
    //$image = $_POST["image"];


    // $username = "dg2";
    // $password = "123456";
    // $password2 = "123456";
    if($password != $password2){
        echo "两次密码不一致";
        return "error";
    }

    $search_name = "select username from user where username = '{$username}'";
    
    
    $link = mysqli_connect($server,$db_user,$db_password,$db);


    if($link){
        $sql_name = mysqli_query($link,$search_name);
        $arr_name = mysqli_fetch_assoc($sql_name);
        //print_r ($arr_name);
        if($arr_name){
            echo "用户名已存在";
            return ;
        }else{
           // 
        //print_r ($arr_name);
    // if($username == $arr_name["username"]){
            $sql_in_user = "insert into user (username,password,image) values ('{$username}',{$password},'imgs/image2.jpg')";
            $in_user = mysqli_query($link,$sql_in_user);
            echo "http://localhost:8081/phone/login.html";
            return ;
        // }else{
        //     return "error";
        // }
       
        }
        
    }else{
        echo "error";
    }
?>