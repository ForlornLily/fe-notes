# HTTP

## 3xx

前端，或者说 AJAX 请求无法捕获 status code 是 3xx 的状态。  
参考[stackoverflow](http://stackoverflow.com/a/15996968)  
当服务器将 302 响应发给浏览器时，浏览器并不是直接进行 AJAX 回调处理，而是先执行 302 重定向：  
从 Response Headers 中读取 Location 信息，然后向 Location 中的 Url 发出请求。  
也就是前端在还没有捕获请求之前就已经被浏览器截断了
