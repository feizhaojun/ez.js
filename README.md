# ez.js
A JavaScript library.

# 使用方法

1. 直接引入ez.js
2. 为了保持jquery习惯，可以使用 $.method() 
3. 在引入了jquery的前提下，依旧可以使用 $.method()，如果为了和jquery区别，可以使用 \_ 代替 $ 。

# 提供功能

### 1 \_.queryString() 获取地址栏参数

##### 1.1 \_.queryString('str')
参数是一个字符串，返回地址栏 “str” 的值，如：

http://www.domain.com/?name=ez&id=1
```
\_.queryString('name') // 'ez'
```

##### 1.2 \_.queryString()
参数为空，返回一个对象，以键值对形式包含了所有地址栏参数，如：

http://www.domain.com/?name=ez&id=1
```
\_.queryString() // {'name':'ez','id':'1'}
```
**如果同时使用了?和#（?在前，#在后）：**

http://www.domain.com/?name=ez&id=1#foo=bar&id=2

如果出现了明明冲突，如 id ，会以 ? （search）携带的参数为准。 \_.queryString() 会忽略 # 携带的参数
```
\_.queryString('id') // '1'
\_.queryString() // {'name':'ez','id':'1'}
```
**如果同时使用了?和#（#在前，?在后）：**

http://www.domain.com/#foo=bar&id=2?name=ez&id=1

因为对于地址栏来说，这是一种不规范的写法，我们会将?忽略。
```
\_.queryString('foo') // 'bar'
\_.queryString('id') // '2?name=ez&id=1'
\_.queryString() // {'foo':'bar','id':'2?name=ez&id=1'}
```
##### 1.3 \_.queryString([])
参数是一个空数组，返回一个数组，包含两个对象，第一个是?后面的参数，第二个是#后面的参数，如：

http://www.domain.com/?name=ez&id=1#foo=bar&id=2
```
\_.queryString([]) // [{'name':'ez','id':'1'}, {'foo':'bar','id':'2'}]
```
##### 1.4 \_.queryString(['/'])
参数是一个数组且包含一个字符串的元素，返回以该字符串分割的参数，如：

http://www.domain.com/?static/img/ico#foo/bar/js
```
\_.queryString(['/']) // [['static','img','ico'],['foo','bar','js']]
```
