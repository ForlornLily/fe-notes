# Git

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

## 更新远程仓库

比如远程分支已被删除，但本地还能看到远程分支存在

```bash
git remote update origin --prune
```

## 授权

### Permission denied (publickey)

Ubuntu 连接 GitLab 出现权限问题，需要添加公钥

1. Ubuntu 内生成公钥

```bash
ssh-keygen -t rsa -C "邮箱"
```

2. 按提示一路 Enter，最终会把公钥放在某个地方

```
Your public key has been saved in xxx/.ssh/id_rsa.pub
```

3. 将生成的公钥(id_rsa.pub)粘贴到 GitLab → 账户 → SSH Keys

## 合并多个 commit

- 当前分支合并

```bash
# rebase 到要合并的开头分支
git rebase -i hash值
# 进入编辑模式，修改 commit 信息，把要合并的信息都改成 `squash `
# 保存后退出，会进入 commit message 内，把多余的 message 删除即可
```

误操作了可以用 `git rebase --abort` 撤销

- 合并别的分支

```bash
git merge --squash another-branch
```

## 拉取远程分支

```bash
git checkout -b locale-name remotes/origin/branch-name
```

## 还原没有 commit 的文件

```bash
git checkout -- 文件名
```

## 删除 tag

```bash
# 本地
git tag -d v3.0.2
# 删除远程分支
git push origin --delete v3.0.2
# 删除远程 tag
git push origin :refs/tags/1.0.4
```

## 找回删除分支

查看所有的引用变动的日志

```bash
git reflog
```

找到最后删除前的变动 id

```bash
git checkout 最后变动的 id
```
