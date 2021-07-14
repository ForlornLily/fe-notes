# 使用 ES modules

参考文档 [esm](https://nodejs.org/api/esm.html)  
需要 node 版本 12 以上。  
在 `package.json` 中指定 type

```json
{
  "type": "module"
}
```

## 区别

见 [Differences between ES modules and CommonJS](https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs)

- `require` 不能使用  
  用 [module.createRequire](https://nodejs.org/api/module.html#module_module_createrequire_filename) 代替

```js
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
```

- `__filename` 或者 `__dirname` 不能使用
  - 用 `fs` 和 [import.meta.url`](https://nodejs.org/api/esm.html#esm_import_meta_url) 代替

```js
import { readFileSync } from 'fs'
const buffer = readFileSync(new URL('./data.proto', import.meta.url))
```

- json 文件直接引用还处于实验状态（v16）
