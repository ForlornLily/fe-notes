# tips

## 指定 clone 深度

设置 `depth` 为 1: 只会克隆最近一次提交，并且只 clone 默认的 `HEAD` 分支

```bash
git clone --depth 1 url
```

如果需要其他远程分支，可以手动 `fetch`

```bash
git remote set-branches origin 远程分支名
$ git fetch --depth 1 origin 远程分支名
$ git checkout 远程分支名
```

## 删除远程项目

```bash
git push origin --delete 远程分支名
```
