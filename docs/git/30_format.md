# 规范

参考

- [Angular DEVELOPERS](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)
- [50/72 Formatting](https://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting)
- [优雅的提交你的 Git Commit Message](https://juejin.im/post/5afc5242f265da0b7f44bee4)
- [Commit message 和 Change log 编写指南](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

## commit 信息

```
<type>(<scope>): <subject>
空行
<body>
空行
<footer>
```

## type

`type` 的类型有

- feat: 新功能（feature）
- fix: BUG 修复
- docs: 只有文档修改
- style: 不影响代码的改动，比如格式化、注释、分号等等
- refactor: 不属于新功能或者 bug 修复，重构
- perf: A code change that improves performance
- test: Adding missing or correcting existing tests
- chore: 构建/辅助工具的改动，比如打包

## scope

`scope` 是可选的，代表代码影响的位置，比如 `location` ，影响多个的地方可以用 `*`

## subject

概要，不超过 50 字  
以动词开头，不要大写，比如 `change`  
结尾不要有结束符号 `.`

## body

具体内容，每一行不超过 72 个字

## footer

备注，通常是 issue 的链接
