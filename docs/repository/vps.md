# VPS

## 村网通

创建 root 的密码:

```
sudo passwd root
```

切换到 root 身份

```
su root
```

修改密码:

```
passwd
```

```
wget --no-check-certificate -O shadowsocks.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh
chmod +x shadowsocks.sh
./shadowsocks.sh 2>&1 | tee shadowsocks.log
```

- 启动：`/etc/init.d/shadowsocks start`
- 停止：`/etc/init.d/shadowsocks stop`
- 重启：`/etc/init.d/shadowsocks restart`
- 状态：`/etc/init.d/shadowsocks status`
- 编辑（编辑后需重启）: `vi /etc/shadowsocks.json`
- 卸载: `./shadowsocks.sh uninstall`
  ::: tip
  AWS 下默认用户 ec2-user 所在路径为`/home/ec2-user`
  :::

### BBR

```
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```

[参考文章](https://zoomyale.com/2016/vultr_and_ss/)

### GC

#### 修改防火墙

【网络】 –> 【防火墙规则】 –> 【创建防火墙规则】  
IP 地址范围：0.0.0.0/0（设置为全部流量）

#### 获取静态 IP

【网络】–> 【外部 IP 地址】 –> 【保留静态 IP】  
[参考文章](http://godjose.com/2017/06/14/new-article/)

### Ali

#### 修改安全组

实例——更多——网络和安全组——安全组配置——配置规则——添加安全组规则——增加 SS 创建时的 IP  
::: tip
TCP/UDP 都要加上端口号
:::

## putty

### 生成秘钥

用 PuTTYgen

### 添加公钥到服务器

以 Google Cloud Platform 为例

- 复制 PuTTYgen Generate 生成后的公钥，取名 foo
- 进入 控制台 - Compute Engine - 元数据 - SSH 密钥 - 修改 - 添加一项 ，粘贴保存

### 私钥连接

打开 putty.exe

- 从左侧进入 Connection - SSH - Auth, 选择保存的私钥
- Host Name 填写 foo@ip

### 保存设置

Saved Sessions 处给此配置起名，然后点 Save
[参考文章](https://www.vdazhang.com/wenzhang-2025.html)

## V2Ray

[参考地址](https://toutyrater.github.io/prep/install.html)

### 前提

- 服务器时间与客户端时间一致。时区会自动转换不需要变
- 配合 SwitchyOmega 食用

### 安装

#### SwitchyOmega

扩展程序地址: [github](https://github.com/FelisCatus/SwitchyOmega/releases)  
其他略

#### 服务端

下载脚本 `wget https://install.direct/go.sh`  
安装/更新 `sudo bash go.sh`  
启动 `sudo systemctl start v2ray`  
重启 `service v2ray restart`

#### 客户端

windows 下载[地址](https://github.com/v2ray/v2ray-core/releases)

### 配置 SwitchyOmega

1. 新建情景模式，选择代理服务器
2. 代理协议选 SOCKS5，代理服务器为 127.0.0.1，代理端口对应[客户端 JSON](####客户端)的本地端口号

### 配置 V2ray JSON

涉及到的 id 为 UUID，Linux 可以敲命令生成
`cat /proc/sys/kernel/random/uuid`  
客户端的 routing 指定规则，direct 为直连  
其中 hy2.dat 为用户自制，[链接](https://github.com/ToutyRater/V2Ray-SiteDAT/tree/master/geofiles)

#### 服务器

```
{
  "inbounds": [
    {
      "port": 服务器端口号,  //与客户端outbounds一致
      "protocol": "vmess",
      "settings": {
        "clients": [
          {
            "id": UUID,  //与客户端outbounds一致
            "alterId": 64 //与客户端outbounds一致
          }
        ]
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {}
    }
  ]
}

```

#### 客户端

```
{
  "inbounds": [
    {
      "port": 本地端口号,
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": ["http", "tls"]
      },
      "settings": {
        "auth": "noauth"
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "服务器ip",
            "port": 服务器端口,
            "users": [
              {
                "id": UUID,
                "alterId": 64
              }
            ]
          }
        ]
      },
      "tag": "proxy"    //对应routing的outboundTag
    },
    {
      "protocol": "freedom",
      "settings": {},
      "tag": "direct"
    }
  ],
  "routing": {
    "domainStrategy": "IPOnDemand",
    "rules": [
      {
        "type": "field",
        "outboundTag": "direct",
        "domain": ["geosite:cn"]
      },
      {
        "type": "field",
        "outboundTag": "direct",
        "ip": [
          "geoip:cn",
          "geoip:private"
        ]
      },
      {
        "type": "field",
        "outboundTag": "proxy",
        "domain": [
            "ext:h2y.dat:gfw"
        ]
    }
    ]
  }
}

```

## 待折腾

[搭建 ipv6](https://www.polarxiong.com/archives/%E6%90%AD%E5%BB%BAipv6-VPN-%E8%AE%A9ipv4%E4%B8%8Aipv6-%E4%B8%8B%E8%BD%BD%E9%80%9F%E5%BA%A6%E6%8F%90%E5%8D%87%E5%88%B0100M.html)
