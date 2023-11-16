(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{498:function(t,a,s){t.exports=s.p+"assets/img/ec4fb3e732d2c723cb22fb7bcd0147fc.ec4fb3e7.png"},767:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("p",[t._v("后端开发内容见"),a("a",{attrs:{href:"https://forlornlily.github.io/server-notes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("server-notes"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://nqdeng.github.io/7-days-nodejs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("七天学会 NodeJS"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.ituring.com.cn/book/1993",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Node.js 实战（第 2 版）》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5e0006c251882512795675f9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 入门指南和实践"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.ituring.com.cn/book/1290",target:"_blank",rel:"noopener noreferrer"}},[t._v("《深入浅出 Node.js》"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("见"),a("a",{attrs:{href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"windows-安装-个人偏好"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-安装-个人偏好"}},[t._v("#")]),t._v(" windows 安装(个人偏好)")]),t._v(" "),a("p",[t._v("npx 启动路径不能带空格，Program Files 要全部替换掉，暂时改成 project\\node")]),t._v(" "),a("p",[t._v("查看全局安装路径：")]),t._v(" "),a("p",[a("code",[t._v("npm config ls")])]),t._v(" "),a("p",[t._v("修改全局安装路径，还要修改环境变量")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" prefix "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("project"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v('node_global"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" cache "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("project"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[t._v("\\\\")]),t._v('node_cache"')]),t._v("\n")])])]),a("p",[t._v("新建名字为 NODE_PATH")]),t._v(" "),a("p",[t._v("设置值为"),a("code",[t._v("D:\\\\project\\\\node \\\\node_global\\\\node_modules")])]),t._v(" "),a("p",[t._v("在 path 内修改"),a("code",[t._v("AppData\\\\Roaming\\\\npm")])]),t._v(" "),a("p",[t._v("为"),a("code",[t._v("D:\\\\project\\\\node\\\\node_global")])]),t._v(" "),a("p",[t._v("如果遇到 permission not permitted，修改 temp 文件路径")]),t._v(" "),a("p",[a("code",[t._v("npm config set tmp")])]),t._v(" "),a("h2",{attrs:{id:"centos-下安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-下安装"}},[t._v("#")]),t._v(" CentOS 下安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#下载xz")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://nodejs.org/dist/v12.13.1/node-v12.13.1-linux-x64.tar.xz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#解压")]),t._v("\nxz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" node-v12.13.1-linux-x64.tar.xz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-xvf")]),t._v("  node-v12.13.1-linux-x64.tar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#进入解压目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" node-v10.9.0-linux-x64/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#执行node命令 查看版本")]),t._v("\n./bin/node "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#建立软连接，方便全局使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在这之前用`pwd`查看node文件夹的完整目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#拿到完整目录后ln建立软连接。假设完整路径是/root/node/bin/node")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" /root/node/bin/node /usr/local/bin/node\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#建立npm软连接。目录同node")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" /root/node/bin/npm /usr/local/bin/npm\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#检查是否关联。如果软连接成功，node -v会输出对应的nodejs版本。同样npm -v也是")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n")])])]),a("p",[t._v("重命名\n"),a("code",[t._v("mv oldname newname")])]),t._v(" "),a("h3",{attrs:{id:"删除软连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除软连接"}},[t._v("#")]),t._v(" 删除软连接")]),t._v(" "),a("p",[a("code",[t._v("ln")]),t._v("命令如果在上述步骤关联失败或者重新关联的时候提示方式已存在："),a("code",[t._v("failed to create symbolic link '/usr/local/bin/node': File exists")]),a("br"),t._v("\n可以通过删除文件重新建立来解决")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除关联的文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rf")]),t._v(" /usr/local/bin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新建关联的文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /usr/local/bin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#建立软连接")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" /root/node/bin/node /usr/local/bin/node\n")])])]),a("h3",{attrs:{id:"ubuntu-下-nvm-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-下-nvm-安装"}},[t._v("#")]),t._v(" Ubuntu 下 nvm 安装")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("nvm")]),t._v(" 进行安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 nvm")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.4/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.bashrc\n")])])]),a("p",[t._v("执行命令查看是否安装成功")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nvm "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n")])])]),a("p",[t._v("安装 nodejs")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" v12.8.3\n")])])]),a("h2",{attrs:{id:"用处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用处"}},[t._v("#")]),t._v(" 用处")]),t._v(" "),a("p",[t._v("JS 是脚本语言，脚本语言都需要一个解析器才能运行。对于写在 HTML 页面里的 JS，浏览器充当了解析器的角色。而对于需要独立运行的 JS，NodeJS 就是一个解析器。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(498),alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("libuv：作为跨平台的基础组件")])])])}),[],!1,null,null,null);a.default=n.exports}}]);