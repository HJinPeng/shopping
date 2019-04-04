$(function() {
    var car = $.getCookie("car");
    var sum = 0;
    if (car) {
        var arr = JSON.parse(car);
        // console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            var $html = $("" + "<div class='row item' id ='" + arr[i].id + "'>" +
                "<div class='col-xs-3'>" + "<img src='" + arr[i].img + "' alt='' width='100%'>" + "</div>" +
                "<div class='col-xs-2 price'>" + arr[i].price + "</div>" +
                "<div class='col-xs-3 num'>" + "<button class='sub'>&nbsp;-&nbsp;</button><span>" + arr[i].number + "</span> <button class='add'>&nbsp;+&nbsp;</button></div>" +
                "<div class='col-xs-2 little_price'>￥<span>" + (arr[i].price * arr[i].number) + "</span></div>" +
                "<div class='col-xs-2 delete'><button>删除</button></div></div>");
            $(".car .container .goods").append($html);
            sum += arr[i].price * arr[i].number;
        }

        $(".all_price span").text(sum);
    } else {
        console.log("暂无购物信息");
        // html += "<p>暂无购物信息</p>"
    }

    $("body").on("click", ".add", function() {
        var obj = $(this).siblings("span").text();
        var price = $(this).parents(".num").siblings(".price").text();
        //console.log(price);
        //将js字符串中的数值加1
        obj = parseInt(obj) + 1;
        $(this).siblings("span").text(obj);

        var little_price = obj * parseInt(price);
        //console.log(little_price);
        $(this).parents(".num").siblings(".little_price").find("span").text(little_price);

        sum += parseInt(price);
        $(".all_price span").text(sum);

        for (var j = 0; j < arr.length; j++) {
            //attr("id") 双引号
            if ($(this).parents(".item").attr("id") == arr[j].id) {
                arr[j].number++;
                break;
            }
        }
        $.addCookie("car", JSON.stringify(arr));

    });

    $("body").on("click", ".sub", function() {
        var obj = $(this).siblings("span").text();
        var price = $(this).parents(".num").siblings(".price").text();
        //console.log(price);
        //将js字符串中的数值加1
        obj = parseInt(obj) - 1;
        if (obj <= 0) {
            sum -= parseInt(price);
            $(".all_price span").text(sum);
            delGoods($(this).parents(".item").attr("id"));
            $(this).parents(".item").remove();
        } else {

            $(this).siblings("span").text(obj);

            var little_price = obj * parseInt(price);
            //console.log(little_price);
            $(this).parents(".num").siblings(".little_price").find("span").text(little_price);

            sum -= parseInt(price);
            $(".all_price span").text(sum);

            for (var j = 0; j < arr.length; j++) {
                //attr("id") 双引号
                if ($(this).parents(".item").attr("id") == arr[j].id) {
                    arr[j].number--;
                    break;
                }
            }
            $.addCookie("car", JSON.stringify(arr));
        }
    });


    $("body").on("click", ".delete button", function() {
        var id = $(this).parents(".item").attr("id");
        var num = $(this).parents(".delete").siblings(".little_price").find("span").text();
        // console.log(num);
        delGoods(id);
        $(this).parents(".item").remove();
        sum -= parseInt(num);
        $(".all_price span").text(sum);
    });


    //删除cookie
    function delGoods(id) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == id) {
                //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目
                //注释：该方法会改变原始数组
                arr.splice(i, 1);
                break;
            }
        }
        $.addCookie("car", JSON.stringify(arr));
    }
});