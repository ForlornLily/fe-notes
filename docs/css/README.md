# 概要

本节大部分是[《精通 CSS：高级 Web 标准解决方案（第 3 版）》](http://www.ituring.com.cn/book/1910)的笔记  
更推荐 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) 查询

## progressive enhancement

渐进增强。

### DRY

don't repeat yourself

## 浏览器引擎

|           | 浏览器内核(web browser engine)/排版引擎(layout engine) | JavaScript engine                                                                            |
| --------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| IE        | Trident                                                |                                                                                              |
| IE11/Edge | EdgeHTML                                               | [Chakra](https://github.com/Microsoft/ChakraCore)                                            |
| Firefox   | Gecko                                                  | [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey)       |
| Safari    | WebKit                                                 | [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore)（也被称为 Nitro） |
| Opera     | Blink(15+后。以前用 Presto)                            |                                                                                              |
| Chrome    | Blink                                                  | V8                                                                                           |

国产浏览器/手机浏览器都基于 Webkit
KHTML 引擎，苹果在他基础上改成 WebKit，谷歌在 WebKit 基础上改成 Blink  
对应的 css 前缀

- -webkit- WebKit based browser
- -moz- (Firefox)
- -o- (Old, pre-WebKit, versions of Opera)
- -ms- (Internet Explorer and Microsoft Edge)
