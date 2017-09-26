# ez.js
A JavaScript library.

# 使用方法

1. 直接引入ez.js
2. 为了保持jquery习惯，使用 $.method() 
3. 如果 $ 被占用，如在 ez.js 之前引入了jquery，可以使用 \_ 代替，如 \_.method()

# 提供功能

\_.queryString() 获取地址栏参数

\_.queryString('str') 参数是一个字符串，返回地址栏 “str” 的值

\_.queryString() 参数为空，返回一个对象，以键值对形式包含了所有地址栏参数，如：

http://www.domain.com/?name=ez&id=1

\_.queryString('name') // 'ez'

\_.queryString() // {'name':'ez','id':'1'}

