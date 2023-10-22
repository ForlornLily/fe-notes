# ESlint

## enum is defined but never used

因为 ESLint 只认识 JS，配置 `no-unused-vars` 会把 enum 认错，此处应该交给 typescript-eslint 处理

```json
{
  "extends": [
    "plugin:@typescript-eslint/recommended" // https://typescript-eslint.io/rules/no-unused-vars/
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```
