(function(){
    var ez = function(e){
        return e;
    }
    ez.queryString = function(e){
        // 使用substr去掉问号
        var search = window.location.search.substr(1);
        var hash = window.location.hash;
        if(!e){
            var str = search.split('&');
            var s = {};
            str.map(function(val,i,arr){
                var a = val.split('=');
                if(a[0]){
                    s[a[0]] = a[1];
                }
            });
            return s;
        }else if(typeof e == 'string'){
            var reg = new RegExp('(^|&)' + e +'=([^&]*)(&|$)');
            return search.match(reg)[2];
        }else if(e instanceof Array){
            window[e[0]] = {};
            window[e[1]] = {};
        }else{
            return null;
        }
    }
    if(typeof $ == 'undefined'){
        window.$ = ez;
    }else{
        window._ = ez;
    }
})();