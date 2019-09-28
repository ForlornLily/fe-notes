# 缓存 redis

## 场景

比如登录:  
cookie+session 的做法
session 的目的就是为了解决 cookie 暴露隐私，本质上就是在服务器定义一个对象，和 cookie 存在关系  
cookie 要避免暴露用户信息，可以用一些加密算法保存 userId  
服务端定义一个对象  
session[userId] = value 值

session 目前就是一个 js 变量。如果用户量很大，会十分消耗服务器的内存  
另一方面，后台都是多个进程（比如同时启动 3 个 NodeJS），无法做到像浏览器一样，只有一个环境，后台没法全局变量共享

## 介绍

解决 session 的问题，可以使用 redis  
redis 是一个数据库，数据直接存在内存中（不是硬盘），所以读写比较快。  
缺点就是使用内存，成本更高  
session 的访问十分频繁，硬盘会比较慢，所以直接存内存更合适。  
mysql 是硬盘
