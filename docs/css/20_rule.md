# 规范

## 自闭合标签(self-closing)

不要加"/"  
例：`<img>`，`<input>`，`<br>`

## CSS 与 JS 引入

引入 CSS 和 JavaScript 时不需要指明 type

## Boolean 属性

一个元素中 Boolean 属性的存在表示取值 true，不存在则表示取值 false。  
如 radio/checkbox 的`checked`属性，不需要 checked="true"

## css

- 所有声明应该以分号结尾
- 使用组合选择器时，保持每个独立的选择器占用一行
- 不要在颜色值 rgb(), rgba(), hsl(), hsla(), 和 rect() 中增加空格
- 不要在属性取值或者颜色参数前面添加不必要的 0 (比如，使用 .5 替代 0.5 和 -.5px 替代 0.5px)
- 尽可能使用短的十六进制数值，例如使用 #fff 替代 #ffffff
- 不要为 0 指明单位，比如使用 margin: 0; 而不是 margin: 0px;
