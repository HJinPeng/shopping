;
(function($, window) {
    $.extend({
        addCookie: function(key, value, day, path, domain) {
            //1. 处理默认保存路径
            //找到当前路径下的到最后一个/的地址
            var index = window.location.pathname.lastIndexOf("/");
            var currentPath = window.location.pathname.slice(0, index);
            //如果有传入path，则使用path，如果没有传入path，则使用currentPath
            path = path || currentPath;

            //2. 处理默认保存的domain
            domain = domain || document.domain;

            //3. 处理默认的过期时间
            if (!day) {
                document.cookie = key + "=" + value + ";path=" + path + ";domain=" + domain + ";";
            } else {
                var date = new Date();
                date.setDate(date.getDate() + day);
                document.cookie = key + "=" + value + ";expires=" + date.toGMTString() + ";path=" + path + ";domain=" + domain + ";";
            }
        },
        getCookie: function(key) {
            //将获取的字符串以;分割成数组
            var res = document.cookie.split(";");
            for (var i = 0; i < res.length; i++) {
                var temp = res[i].split("=");
                // 将每一个key=value以=分割成数组，temp[0]是key，temp[1]是value
                if (temp[0].trim() === key) {
                    return temp[1]
                }
            }
            // if (i == res.length) {
            //     return "error";
            // }
        },
        deleteCookie: function(key, path) {
            addCookie(key, getCookie(key), -1, path);
        }
    });
})(jQuery, window);