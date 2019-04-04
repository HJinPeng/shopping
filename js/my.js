$(function() {
    var username = $.getCookie("username");
    var page = $.getCookie("page");
    $(".name").text(username);
    $(".address").text(page);
});