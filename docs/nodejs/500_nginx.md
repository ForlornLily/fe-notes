# nginx

## CentOS 下的安装

[参考](https://www.cnblogs.com/hafiz/p/6891458.html?utm_source=itdadao&utm_medium=referral)  
事先准备

- 切换到 root

```
su root
```

- `yum`安装依赖

```
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

```
wget https://nginx.org/download/nginx-1.16.1.tar.gz
```

查看 nginx 在哪: `where is nginx`  
解压

```
tar -zxvf nginx-1.16.1.tar.gz
```

进入压缩包以后，配置+编译

```
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
