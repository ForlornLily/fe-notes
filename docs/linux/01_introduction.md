# Linux 简介

Linux 分为四部分

- 内核
- GNU 工具
- 图形化界面工具
- 应用软件

![组成](../images/linux_struction.jpg)

## 内核

核心部分。主要功能有

- 系统内存管理：包括物理内存和虚拟内存。虚拟内存是用硬盘上的存储空间来实现
- 软件程序管理
- 硬件设备管理：和硬件设备进行通信。和设备通信都需要安装对应的驱动程序
- 文件系统管理

## GNU 工具

GNU: GNU's Not Unix。除了内核控制硬件设备外，操作系统也需要工具来执行一些功能，比如控制文件和程序  
通常将 Linux 内核和 GNU 工具的结合体统称 Linux

### 核心 GNU 工具

GNU coreutils：

- 处理文件的工具
- 操作文本的工具
- 管理进程的工具

### shell

特殊的交互式工具。提供了启动程序、管理文件系统中的文件以及在 Linux 系统上的进程的途径  
核心是命令行提示符。命令行提示符可以输入文本命令，然后在内核中执行命令  
shell 自带了一些命令，比如复制、移动、重命名文件，显示和终止正在运行的程序等  
把命令放到文件中作为程序执行，就是 shell 脚本

shell 有很多版本，一般默认执行的是标准版 `bash shell`，官方开发  
通常 Linux 也会包含多个版本的 shell，常见的有 ash、korn、tcsh、zsh

## 桌面环境

初期，Linux 只有一个简单的操作系统文本界面，后来随着 `Microsoft Windows` 的普及，Linux 的图形化桌面环境应运而生

### X Windows 系统

要在电脑上显示画面，有两个基本要素：显卡和显示器。Linux 软件需要知道如何和这两个要素进行互通  
X Windows 软件是图形显示的核心，属于底层程序，直接和显卡以及显示器交互，控制着 Linux 程序如何在电脑上显示窗口和图形  
但 X Windows 没有桌面环境供用户操作文件或者开启程序
为此需要一个建立在 X Windows 上的桌面环境

### 常见的桌面环境

- KDE：K Desktop Environment，长得和 Windows 桌面差不多  
  有底部的横条（比如开始菜单），快捷方式（单击就可以运行对应的程序）
- GNOME：the GNU Network Object Model Environemt
- Unity 桌面：Ubuntu 公司为 Ubuntu Linux 专门开发的桌面

## 发行版

完整的 Linux 系统成为发行版  
为了满足不同的需求，会有不同的发行版，一般分为三类

- 完整的核心 Linux 发行版
- 特定用途的发行版
- LiveCD 测试发行版

### 核心 Linux 发行版

最完整，包含了内核、一个或多个桌面环境以及很多常用的 Linux 应用。  
常见的有：

- Red Hat：主要用于 Internet 服务器的商业发行版
- Fedora：从 Red Hat 分离出的家用发行版
- Debian：在 Linux 专家和商用 Linux 产品中流行的发行版

### 特定用途的发行版

基于某个流行的发行版，但只包含某些特定功能  
常见的有：

- CentOS：基于 Red Hat 企业版 Linux 源代码构建的免费发行版
- Ubuntu：用于学校和家庭的免费发行版

### LiveCD

一张 CD ，可以从 CD 直接预览 Linux 系统的样子，而不需要安装到硬盘  
预览因为 CD 的大小限制，不会展示完整的 Linux，只是个样本。  
可以下载后自己刻录到 CD 上，需要的时候直接运行 CD 进行操作（类似听 mp3 的 CD）  
常见的有：

- Ubuntu：为多种语言设计的世界级 Linux 项目  
  一般特定用途的发行版，都会有对应的LiveCD
