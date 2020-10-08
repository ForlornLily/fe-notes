# package-lock

## npm-shrinkwrap 和 package-lock

推荐使用 package-lock  
区别

- npm-shrinkwrap 会跟随包发布一起发布；package-lock 不会
- lock 是安装时自己生成的，shrinkwrap 需要手动执行
- lock 在 npm 5.x 后出现，低版本需要用 shrinkwrap

参考

- [shrinkwrap.json](https://docs.npmjs.com/files/shrinkwrap.json)

## npm ci 和 npm install

区别

- 使用 npm ci 必须保证有 `npm-shrinkwrap` 或者 `package-lock` 存在
- 如果 lock 文件和 package.json 文件不匹配。npm ci 会报错，而不像 install 一样升级版本
- 如果已经安装了依赖，npm ci 会先删除 node_modules
- npm ci 不会更新 lock 文件

参考

- [ci](https://docs.npmjs.com/cli/ci.html)
