# nginx

nginx 把 http 请求转发到另一个或者一些服务器

对于浏览器来说，访问的就是同源服务器上的一个 url。而 nginx 通过检测 url 前缀，把 http 请求转发到后面真实的物理服务器。并通过 rewrite 命令把前缀再去掉。这样真实的服务器就可以正确处理请求，并且并不知道这个请求是来自代理服务器的

Brower =\> host =\> nginx =\> 目标地址

服务器数据 =\> nginx =\> Brower
