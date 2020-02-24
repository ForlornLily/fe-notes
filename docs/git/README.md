# 概要

本节大部分是[官网教程](https://git-scm.com/book/zh/v2)的笔记;  
推荐阅读

- [git 思维导图](https://www.processon.com/view/link/5c6e2755e4b03334b523ffc3)

## 基础

git 直接记录快照（Snapshots），而非差异比较

不再重新存储该文件，而是只保留一个链接指向之前存储的文件

大部分操作都在本地执行

![](../images/b1b35d23146cf5090b6480efbb008eb5.png)

## SHA-1 hash

Secure Hash Algorithm 1：安全散列算法 1（以后还有 SAH-2，SHA-3）

由 40 个十六进制字符（0-9 和 a-f）组成字符串，基于 Git
中文件的内容或目录结构计算出来

Git 数据库中保存的信息都是以文件内容的哈希值来索引，而不是文件名

创建一个新分支就相当于往一个文件中写入 41 个字节（40 个字符和 1 个换行符）

## 三种状态

已跟踪的文件包含

已提交（committed）、已修改（modified）和已暂存（staged）

- Committed means that the data is safely stored in your local database.

- Modified means that you have changed the file but have not committed it to
  your database yet.

- Staged means that you have marked a modified file in its current version to
  go into your next commit snapshot.

![](../images/93c7eec346188bbabdf255087762327e.png)

### 基本流程

1.  在工作目录中修改文件。

2.  暂存文件，将文件的快照放入暂存区域。

3.  提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。

### 单个文件生命周期

![](../images/b65dc1f4245a9a1230e78bac21f5ee6f.png)

## .gitignore

不需要进入 git 管理的文件，比如 node_modules
