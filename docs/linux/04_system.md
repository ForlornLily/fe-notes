# 系统管理

分为

- 程序
- 磁盘
- 文件

## 程序

当程序运行在系统上时，称之为进程（process），通过 `ps` 命令了解程序信息

### ps

只展示当前控制台下属于当前用户的进程

- PID（process ID）：进程 ID
- TTY：运行在哪个终端
- TIME：进程已用 CPU 的时间

```bash
# 当前只运行了 bash shell和一个 ps 命令本身

[root@xxx ~]# ps
  PID TTY          TIME CMD
27342 pts/0    00:00:00 bash
27519 pts/0    00:00:00 ps
```

`ps` 由于历史原因，有两个版本，并且参数各不相同。后来合为一个，会导致命令比较繁多
GNU ps 命令支持 3 种不同类型的命令行参数

- Unix 风格：`-选项`，例：`ps -ef`
- BSD 风格：`选项`，例：`ps ef`
- GNU 风格的长参数：`--选项`，例：`ps --forest`

### Unix 风格进程信息

- `ps -l`

```bash
[root@xxx ~]# ps -l
F S   UID   PID  PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
4 S     0 27615 27613  0  80   0 - 28864 do_wai pts/1    00:00:00 bash
0 R     0 27736 27615  0  80   0 - 38314 -      pts/1    00:00:00 ps
```

- UID：启动这些进程的用户。
- PID：进程的进程 ID。
- PPID：父进程的进程号（如果该进程是由另一个进程启动的）。
- C：进程生命周期中的 CPU 利用率。
- STIME：进程启动时的系统时间。
- TTY：进程启动时的终端设备。
- TIME：运行进程需要的累计 CPU 时间。
- CMD：启动的程序名称。
- F：内核分配给进程的系统标记。
- S：进程的状态
  （O 代表正在运行；S 代表在休眠；R 代表可运行，正等待运行；Z 代表僵化，僵化状态是指进程完成了，但父进程没有响应；T 代表停止）。
- PRI：进程的优先级（越大的数字代表越低的优先级）。
- NI：谦让度值用来参与决定优先级。
- ADDR：进程的内存地址。
- SZ：假如进程被换出，所需交换空间的大致大小。
- WCHAN：进程休眠的内核函数的地

### BSD 风格进程信息

- `ps l`

```bash
[root@xxx ~]# ps l
F   UID   PID  PPID PRI  NI    VSZ   RSS WCHAN  STAT TTY        TIME COMMAND
4     0  1044     1  20   0 110116  1612 wait_w Ss+  tty1       0:00 /sbin/agett
4     0  1046     1  20   0 110116  1648 wait_w Ss+  ttyS0      0:00 /sbin/agett
4     0 27615 27613  20   0 115456  3572 wait_w Ss+  pts/1      0:00 -bash
4     0 27791 27785  20   0 115456  3536 do_wai Ss   pts/0      0:00 -bash
0     0 27813 27791  20   0 153256  3816 -      R+   pts/0      0:00 ps l
```

大部分的输出列跟使用 Unix 风格参数时的输出是一样，一小部分不同：

- VSZ：进程在内存中的大小，以千字节（KB）为单位。
- RSS：进程在未换出时占用的物理内存。
- STAT：代表当前进程状态的双字符状态  
  STAT可以展示更加详细的进程状态码，以上述的`R+` 为例 - 第一个字母代表 Unix 风格进程的 `S`，表明是休眠、运行还是停止等（R 代表可运行）  
  -第二个参数进一步说明进程的状态-<：该进程运行在高优先级上。-N：该进程运行在低优先级上。-L：该进程有页面锁定在内存中。-s：该进程是控制进程。-l：该进程是多线程的。-+：该进程运行在前台

### GNU 长参数

一般是一个完整的单词

```bash
[root@iZ6we3xdsu4f2apd174to3Z ~]# ps --help

Usage:
 ps [options]

 Try 'ps --help <simple|list|output|threads|misc|all>'
  or 'ps --help <s|l|o|t|m|a>'
 for additional help text.

For more details see ps(1).
```

## 实时监测

ps 只能显示当前时间点的信息，如果想要观察频繁换进换出内存的程序趋势，需要借助 `top`

### top

top 会每个 2 秒左右刷新内容

```bash
[root@xxx ~]# top
top - 16:40:57 up 52 days,  3:32,  3 users,  load average: 0.00, 0.01, 0.00
Tasks:  79 total,   2 running,  45 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.3 us,  0.3 sy,  0.0 ni, 99.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem :   491536 total,    22888 free,   305880 used,   162768 buff/cache
KiB Swap:        0 total,        0 free,        0 used.   175492 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND
 1103 root      20   0  549032 215080   3412 S  0.3 43.8 138:26.57 fail2ban-se+
    1 root      20   0   43488   4108   2856 S  0.0  0.8   1:02.96 systemd
    2 root      20   0       0      0      0 S  0.0  0.0   0:00.09 kthreadd
# 省略后续内容
```

- 第一行表示当前时间，系统的运行时间，登录用户以及系统的平均负载  
  平均负载`load average: 0.00, 0.01, 0.00`：值的顺序分别是最近 1 分钟的、最近 5 分钟的和最近 15 分钟的平均负载。  
  值越大说明系统的负载越高（通常，如果系统的负载值超过了2，就说明系统比较繁忙了）
- 第二行显示了进程概要信息—— top 命令的输出中将进程叫作任务（task）：有多少进程处在运行、休眠、停止或是僵化状态
- 第三行根据进程的属主（用户还是系统）和进程的状态（运行、空闲还是等待）将 CPU 利用率分成几类输出
- 第四、五行说明了系统内存的状态。

  - 第四行说的是系统的物理内存：总共有多少内存，当前用了多少，还有多少空闲。
  - 第五行说的是同样的信息，不过是针对系统交换空间（如果分配了的话）的状态而言的

- 后面的显示了进程的的详细列表，和 ps 命令含义类似
  - PID：进程的 ID。
  - USER：进程属主的名字。
  - PR：进程的优先级。
  - NI：进程的谦让度值。
  - VIRT：进程占用的虚拟内存总量。
  - RES：进程占用的物理内存总量。
  - SHR：进程和其他进程共享的内存总量。
  - S：进程的状态
    （D 代表可中断的休眠状态，R 代表在运行状态，S 代表休眠状态，T 代表跟踪状态或停止状态，Z 代表僵化状态）。
  - %CPU：进程使用的 CPU 时间比例。
  - %MEM：进程使用的内存占可用内存的比例。
  - TIME+：自进程启动到目前为止的 CPU 时间总量。
  - COMMAND：进程所对应的命令行名称，也就是启动的程序名

## 结束进程

进程之间通过信号通信  
信号类型：

- 1 HUP 挂起
- 2 INT 中断
- 3 QUIT 结束运行
- 9 KILL 无条件终止
- 11 SEGV 段错误
- 15 TERM 尽可能终止
- 17 STOP 无条件停止运行，但不终止
- 18 TSTP 停止或暂停，但继续在后台运行
- 19 CONT 在 STOP 或 TSTP 之后恢复执行

### kill

需要是 `root` 或者进程所属用户才能执行命令

- `kill PID`：实际上是给 PID 发送一个 TERM 信号。
  TERM 信号表示可以的话禁止，会存在有些进程忽略这个信号，不终止的情况
  用 `-s` 选项强行终止
  `kill` 执行之后不会有输出，如果要看进程是否终止，可以用 `top` 或者 `ps` 命令
- `killall 进程名`：可以用通配符，比如 `killall http*`，会结束所有以 http 开头的进程  
  :::warning  
  root用户终止的时候慎用通配符，可能会杀掉系统关键进程  
  :::

## 磁盘

### 挂载

Linux 文件系统将所有的磁盘都并入一个虚拟目录下。在使用新的存储媒体之前，需要把它放到虚拟目录下。这项工作称为挂载（mounting）

- `mount`命令会输出当前系统上挂载的设备列表。简单理解就是显示可插拔的 U 盘
- `unmount`，即卸载。U 盘拔出之前需要先安全弹出，没弹出之前直接拔出可能会损坏

### df

查看磁盘剩余空间

```bash
[root@xxx ~]# df
Filesystem     1K-blocks    Used Available Use% Mounted on
devtmpfs          233292       0    233292   0% /dev
tmpfs             245768       0    245768   0% /dev/shm
```

各自意思

- 设备的设备文件位置；
- 能容纳多少个 1024 字节大小的块；
- 已用了多少个 1024 字节大小的块；
- 还有多少个 1024 字节大小的块可用；
- 已用空间所占的比例；
- 设备挂载到了哪个挂载点上

### du

查看特定目录下的磁盘使用情况，不传参默认是当前目录

- `-c`：显示所有已列出文件总的大小。
  比如 node/bin 下的

```bash
[root@xxx bin]# du -c node/bin
44544   .
44544   total

```

- `-h`：和 `-c` 功能一致，不显示 `total`，另外大小做了转换，即用 K 替代千字节，用 M 替代兆字节，用 G 替代吉字节。

```bash
[root@iZ6we3xdsu4f2apd174to3Z ~]# du -h node/bin
44M     node/bin
```

- `-s`：显示每个输出参数的总计。

## 操作

### sort

- `sort 文件名`：对文件内容进行字符串排序

```bash
[root@xxx ~]# cat hello.txt
1111
222
3
4
55
10
[root@xxx ~]# sort hello.txt
10
1111
222
3
4
55
```

- `-n`：进行数字排序

```bash
[root@iZ6we3xdsu4f2apd174to3Z ~]# sort -n hello.txt

3
4
10
55
222
1111
```

### grep

根据词搜索所在行，可以用正则

```bash
[root@xxx ~]# grep 5 hello.txt
55
```

- `-v`：显示不匹配的内容
- `-n`：显示匹配内容所在的行
- `-e`：可以匹配多个值

```bash
# 匹配 1 或者 2
[root@xxx ~]# grep hello.txt -e 1 -e 2 -n
1:1111
2:222
6:10
```

## 压缩

| 工具  | 文件扩展名 | 描述                                                |
| ----- | ---------- | --------------------------------------------------- |
| bzip2 | .bz2       | 采用 Burrows-Wheeler 块排序文本压缩算法和霍夫曼编码 |
| gzip  | .gz        | GNU 压缩工具，用 Lempel-Ziv 编码                    |
| zip   | .zip       | Windows 上 PKZIP 工具的 Unix 实现                   |

### gzip

gzip 是一个软件，包含了三个工具

- gzip 压缩

```bash
[root@xxx ~]# gzip hello.txt
# hello.txt 变为  hello.txt.gz
```

- gunzip 解压
- zcat 查看压缩包内的内容

## 归档

### tar

把内容归档为 `*.tar`后缀的文件  
`.tgz` 后缀表示用 gzip 压缩过后的 tar 文件  
tar 的功能比较多 `tar function [options] object1 object2`  
| function | 长参数 | 描述 |
| -------- | ------------- | -------------------------------------------------------------- |
| `-c` | --create | 创建一个新的 tar 归档文件 |
| `-A` | --concatenate | 将一个已有 tar 归档文件追加到另一个已有 tar 归档文件 |
| `-d` | --diff | 检查归档文件和文件系统的不同之处 |
| | --delete | 从已有 tar 归档文件中删除 |
| `-r` | --append | 追加文件到已有 tar 归档文件末尾 |
| `-t` | --list | 列出已有 tar 归档文件的内容 |
| `-u` | --update | 将比 tar 归档文件中已有的同名文件新的文件追加到该 tar 归档文件中 |
| `-x` | --extract | 从已有 tar 归档文件中提取文件 |

| options | 描述                                |
| ------- | ----------------------------------- |
| -C      | dir 切换到指定目录                  |
| -f      | file 输出结果到文件或设备 file      |
| -j      | 将输出重定向给 bzip2 命令来压缩内容 |
| -p      | 保留所有文件权限                    |
| -v      | 在处理文件时显示文件                |
| -z      | 将输出重定向给 gzip 命令来压缩内容  |

`function` 和 `options` 可以连用，比如`tar -zxvf filename.tgz`
