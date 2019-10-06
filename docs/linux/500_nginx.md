# nginx

- 一般用来放静态资源直接返回，负载均衡（让集群的负载量达到比较高的状态，主要在运维方面）

- 反向代理

## 反向代理

localhost 端口是 8080，访问 nginx，如果访问的是接口 api，代理到 nodejs（比如端口是 3000）

对客户端不可见

相对的正向代理，客户端能控制的代理，比如本机安装 VPN 访问公司内网

![](../images/8f7fa971c178f87dc0f259a86c1d3766.png)

## CentOS 下的安装

[参考](https://www.cnblogs.com/hafiz/p/6891458.html?utm_source=itdadao&utm_medium=referral)  
事先准备

- 切换到 root

```shell
su root
```

- `yum`安装依赖

```shell
# 编译
yum install gcc-c++
# 正则
yum install -y pcre pcre-devel
# gzip
yum install -y zlib zlib-devel
# https
yum install -y openssl openssl-devel
```

下载包

```shell
wget https://nginx.org/download/nginx-1.16.1.tar.gz
```

查看 nginx 在哪: `where is nginx`  
解压

```shell
tar -zxvf nginx-1.16.1.tar.gz
```

进入压缩包以后，配置+编译

```shell
# 创建配置涉及的文件夹(`mkdir`)： /var/temp、/var/temp/nginx、/var/run/nginx/
mkdir /var/temp
# 配置
./configure \
--prefix=/usr/local/nginx \
--pid-path=/var/run/nginx/nginx.pid \
--lock-path=/var/lock/nginx.lock \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-http_gzip_static_module \
--http-client-body-temp-path=/var/temp/nginx/client \
--http-proxy-temp-path=/var/temp/nginx/proxy \
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
--http-scgi-temp-path=/var/temp/nginx/scgi \
--with-http_ssl_module

# 编译
make && make install
# 重新编译
make
# 进入nginx文件夹后启动
cd /usr/local/nginx/sbin && ./nginx

# 启动时指定配置文件
./nginx -c /usr/local/nginx/conf/nginx.conf
# 编辑config文件
vim /usr/local/nginx/conf/nginx.conf
```

### vim

常用命令
快捷键`Insert`开始输入  
`esc`退出输入  
`:wq`保存并退出
`ln -s 绝对路径 快捷方式的绝对路径`: 创建链接

## 常用命令

进入目录后启动:  
linux: `./nginx`  
windows: `start nginx`  
退出：`nginx -s quit`  
重新加载配置文件: `nginx -s reload`

## 配置文件 nginx.conf

- worker_processes 启动实例的个数

- server

```nginx
listen 端口号
location 代理
#如果访问的url地址是/api/下的内容，代理端口到localhost:3000
#proxy_set_header: 将客户端的请求头转发给服务端
location /api/ {
    proxy_pass   http://localhost:3000;
    proxy_set_header Host $host;
}
#如果访问的url地址是根/的内容，代理端口到localhost:8080，比如静态资源
location / {
    proxy_pass   http://localhost:8080;
}
```
