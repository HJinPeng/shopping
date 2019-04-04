$(function() {
    $("body").on("click", ".buy", function() {
        // $.addCookie("car", "123");
        var $obj = $(this).parents(".right");
        var arr = $.getCookie("car") ? JSON.parse($.getCookie("car")) : [];
        var id = $(this).parents(".item").attr("id");
        var img = $obj.siblings(".img").find("a img")[0].src;
        var name = $obj.find("h4").text();
        var price = $obj.find(".price span").text();

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id == id) {
                arr[i].number += 1;
                break;
            }
        }

        if (i == arr.length) {
            var goods = {
                "id": id,
                "img": img,
                "name": name,
                "price": price,
                "number": 1
            }
            arr.push(goods);
        }
        $.addCookie("car", JSON.stringify(arr));
    });
});