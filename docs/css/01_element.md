# 元素

HTML 中的属性是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符

## 标签语义化

常见标签参考网站：[http://html5doctor.com](http://html5doctor.com/)

- header
- section
- footer
- nav
- article: 独立内容(stand-alone content)
- aside
- main: 只能出现一次
- i: 表示与周围元素不一样的内容，表现为斜体(italic)
- b:与 i 语义差不多，表现为粗体(boldface)
- time: 表示时间
- q: 引用
- em/strong：语义上表示斜体/强调

### ARIA

accessible rich Internet application

针对无障碍阅读

- role 属性

标签内增加，方便设备解析。常见的值有 navigation, banner, form, main, search,
application

写在任意标签上比如`<a href=”#” role=”navigation”></a>`

- 其他属性

通常都是 aria-开头，可以自定义

## SEO

待补充
