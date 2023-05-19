# SSH

## github 与 windows

不通过 agent。Agent 形式参考 [Adding a new SSH key to your GitHub account](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

```bash
ssh-keygen -t rsa -C "email address"
```

将生成的文件对应的 pub 粘贴到 github 的 SSH 中。  
测试是否成功

```bash
ssh -T git@github.com
```
