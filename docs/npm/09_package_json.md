# package.json

完整内容见官网[package-json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

## name

- 不能包含大写字母
- name 最终会变成某个 URL 的一部分、命令行参数、文件名，所以不能包含 `non-URL-safe characters`，比如空格

## bin

将可执行文件添加到 `PATH`，一般来说当成全局包使用

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": "./path/to/program"
}
```

等价于

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": {
    "my-program": "./path/to/program"
  }
}
```

可执行文件 `./path/to/program` 必须在文件开头加入

```
#!/usr/bin/env node
```

否则不会以 node 环境启动

## author

```json
{
  "author": {
    "name": "Barney Rubble",
    "email": "b@rubble.com",
    "url": "http://barnyrubble.tumblr.com/"
  }
}
```

等价于

```json
{
  "author": "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
}
```

## contributors

是个数组，内容格式和 [author](#author) 一样，通用有两种写法

```json
{
  "contributors": ["Joe <joe@whatever.com> (https://whatever.com)"]
}
```

## engines

指定环境

```json
{
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0",
    "yarn": "^0.13.0"
  }
}
```
