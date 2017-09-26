(function(){
    var ez = function(e){
        return e;
    }
    ez.queryString = function(e){
        // 使用substr去掉问号
        var search = window.location.search.substr(1);
        var hash = window.location.hash.substr(1);
        if(typeof e == 'string'){
            var reg = new RegExp('(^|&)' + e +'=([^&]*)(&|$)');
            return search.match(reg) ? search.match(reg)[2] : (hash.match(reg) ? hash.match(reg) : null);
        }else if(!e || e instanceof Array){
            var s = [{},{}];
            search.split('&').map(function(val,i,arr){
                var a = val.split('=');
                if(a[0]){
                    s[0][a[0]] = a[1];
                }
            });
            hash.split('&').map(function(val,i,arr){
                var a = val.split('=');
                if(a[0]){
                    s[1][a[0]] = a[1];
                }
            });
            if(!e){
                return s[0];
            }else if(e.length){
                return [search.split(e[0]),hash.split(e[0])];
            }else{
                return s;
            }
        }else{
            return null;
        }
    }
    if(typeof $ == 'undefined'){
        window.$ = ez;
    }else{
        $.extend({
            queryString:ez.queryString
        });
        window._ = ez;
    }
})();