# 适配器模式

Adapter pattern：兼容接口，适用于后期弥补代码缺陷

比如 jQuery，`$( ".container" ).css( { opacity: .5 } )`;  
IE8 下是没有 opacity 这个属性的，JS 内容进行了兼容处理。  
通过`filter:alpha(opacity=60)`
