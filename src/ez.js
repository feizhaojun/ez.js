!function(){
  var ez = function(e){
    return e
  }
  ez.queryString = function(e){
    // 使用substr去掉问号
    var search = window.location.search.substr(1)
    var hash = window.location.hash.substr(1)
    if(typeof e == 'string'){
      var reg = new RegExp('(^|&)' + e +'=([^&]*)(&|$)')
      return search.match(reg) ? search.match(reg)[2] : (hash.match(reg) ? hash.match(reg) : null)
    }else if(!e || e instanceof Array){
      var s = [{},{}]
      search.split('&').map(function(val,i,arr){
        var a = val.split('=')
        if(a[0]){
          s[0][a[0]] = a[1]
        }
      })
      hash.split('&').map(function(val,i,arr){
        var a = val.split('=')
        if(a[0]){
          s[1][a[0]] = a[1]
        }
      })
      if(!e){
        // 这里是否需要整合 # 后面的参数 ？
        return s[0]
      }else if(e.length){
        return [search.split(e[0]),hash.split(e[0])]
      }else{
        return s
      }
    }else{
      return null
    }
  }
  ez.time = function (t) {
    t = new Date(t)
    y = t.getFullYear()
    m = t.getMonth() + 1 > 9 ? t.getMonth() + 1 : '0' + (t.getMonth() + 1)
    d = t.getDate() > 9 ? t.getDate() : '0' + t.getDate()
    h = t.getHours() > 9 ? t.getHours() : '0' + t.getHours()
    i = t.getMinutes() > 9 ? t.getMinutes() : '0' + t.getMinutes()
    s = t.getSeconds() > 9 ? t.getSeconds() : '0' + t.getSeconds()
    return [y, m, d].join('-') + ' ' + [h, i, s].join(':')
  }
  ez.getCookie = function (name) {
    var arr
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (arr = document.cookie.match(reg)) {
      return unescape(arr[2])
    } else {
      return null
    }
  }

  if(typeof $ == 'undefined'){
    window.$ = ez
  }else{
    $.extend({
      queryString:ez.queryString
    })
    window._ = ez
  }
}()