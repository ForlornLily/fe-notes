# 富文本编辑器

## quill

需求：富文本编辑器内可以上传图片；
实现思路：

- 上传图片用的`vant`，不使用`quill`提供的 API
- 获取光标位置后，调用`quill`的 insertEmbed 插入`<img>`标签  
  问题：移动端的 IOS，输入法点击"完成"的时候，`quill`提供的`selection-change`事件获取不到的光标位置，只有手动切换光标位置才准确；  
  解决方案：改用`editor-change`  
  两者区别：`selection-change`在文本内容的时候，IOS 下不会触发；安卓端可以，相当于光标位置移动  
  而`editor-change`触发条件是文本内容改变或者光标位置改变  
  以下代码都基于`Vue`

```Vue
<template>
  <div>
    <div ref="editor" class="rich-editor">
      <div v-html="initialContent"></div>
    </div>
    <!-- vant上传 -->
    <van-uploader class="upload" :after-read="handleUpload" :before-read="beforeRead">
      <van-button icon="photo" class="upload-button"></van-button>
    </van-uploader>
  </div>
</template>
<script>
import { showToast, showLoading } from "@/utils/index.js";
import { Toast } from "vant";
//定义全局变量记录光标位置，`editor-change`会被频繁触发，个人认为不需要用vue做响应式变化
var globalRange = 0;
export default {
  props: {
    placeholder: {
      type: String,
      default: "请输入内容"
    }
  },
  data() {
    return {
      _content: this.content,
      quill: null,
      initialContent: "",
      range: 0
    };
  },
  mounted() {
    //  初始化quill
    const that = this;
    this.quill = new Quill(this.$refs.editor, {
      theme: "snow",
      modules: {
        toolbar: false,
        syntax: false
      },
      placeholder: this.placeholder
    });
    //旧方案，IOS不适用
    //  监听富文本变化，更新父组件数据
    /* this.quill.on("text-change", () => {
      let html = this.$refs.editor.children[0].innerHTML;
      if (html === "<p><br></p>") html = "";
      this._content = html;
      this.$emit("edit", html);
    });
    this.quill.on("selection-change", function(range, oldRange, source) {
      if (range) {
        if(range.index) {
          globalRange = range.index;
          console.log("selection-change: " + globalRange )
        }
      } else {
        //失焦的时候触发
        that.$emit("blur");
      }
    }); */
    that.quill.on("editor-change", function(eventName, ...args) {
      if (eventName === "text-change") {
        let html = that.$refs.editor.children[0].innerHTML;
        if (html === "<p><br></p>") html = "";
        that._content = html;
        that.$emit("edit", html);
      } else if (eventName === "selection-change") {
        if(args && args[0]) {
          globalRange = args[0].index || 0;
          // console.log("globalRange: "+ globalRange);
        } else {
          that.$emit("blur");
        }
      }
    });
  },
  methods: {
    uploadToServer(url) {
      var range = this.quill.getSelection();
      if (range && range.index > 0) {
        //  在当前光标位置插入图片
        this.quill.insertEmbed(range.index, "image", url);
        //  将光标移动到图片后面
        this.quill.setSelection(range.index + 1);
      } else {
        this.quill.insertEmbed(globalRange, "image", url);
        //  将光标移动到图片后面
        this.quill.setSelection(globalRange + 1);
      }
    },
    beforeRead(file) {
      const fileType = file.type;
      if (!/^image\/(jpeg|png|jpg|bmp)$/.test(fileType)) {
        showToast("只能上传png、jpg、bmp格式");
        return false;
      }
      return true;
    },
    handleUpload(file) {
      //上传图片逻辑，略
      //上传返回后插入
      this.uploadToServer(url);
    },
    setContent(content) {
      //手动修改值
      this.$refs.editor.children[0].innerHTML = content;
    }
  }
};
</script>
```

## 文字样式

`div`标签会忽略富文本的前后空格，可以用`pre`标签代替；  
另外由于浏览器会有默认的 pre 样式，要保证一致需要设置样式。  
以 Vue 为例

```html
<pre class="detail-more" v-html="content"></pre>
<style>
  .detail-more {
    /* 继承字体 */
    font-family: inherit;
    /* 字体换行 */
    word-break: break-all;
    white-space: pre-wrap;
  }
</style>
```
