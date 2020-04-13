# 命令合集

整理至今遇到的命令  
命令检索推荐[linux-command](https://github.com/jaywcjlove/linux-command)

## 指导

- [man](./02_shell.md#man)
- [info](./02_shell.md#info)
- [help](./02_shell.md#help)
- type：判断是外部还是内建命令
- which：判断命令所在位置

## 通用

- echo：输出指定的字符串或者变量

## 文件

- [cd](./03_file.md#cd)
- [pwd](./03_file.md#pwd)：当前所在目录
- [ls](./03_file.md#ls)
- [touch](./03_file.md#touch)：创建文件，[mkdir](./03_file.md#mkdir)：创建文件夹
- [cp](./03_file.md#cp)
- [ln](./03_file.md#ln)
- [mv](./03_file.md#mv)
- [rm](./03_file.md#rm)：删除文件，[rmdir](./03_file.md#rmdir)：删除文件夹
- [cat](./03_file.md#cat)，[more](./03_file.md#more)，[less](./03_file.md#less)，
  [tail](./03_file.md#tail)，[head](./03_file.md#head)
- [sort](./04_system.md#sort)
- [grep](./04_system.md#grep)：搜索
- [gzip](./04_system.md#gzip)
- [tar](./04_system.md#tar)

## 进程

- [ps](./04_system.md#ps)，[top](./04_system.md#top)
- [kill](./04_system.md#kill)，[killall](./04_system.md#kill)
- [sleep](./05_process.md#sleep)
- [jobs](./05_process.md#jobs)

## 磁盘

- [mount](./04_system.md#挂载), [unmount](./04_system.md#挂载)
- [df](./04_system.md#df)：查看所有的磁盘空间，[du](./04_system.md#du)：查看该目录下使用的磁盘空间
