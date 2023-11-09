# JSON

JSON 的属性必须是加双引号（单引号也不行）  
值可以是

- 简单类型：number、string、boolean、null
- 普通对象：key 是简单类型
- 数组

## JSON.stringify(内容, 过滤, 缩进)

对象转字符串

过滤可以是个数组，可以是个函数。

```js
var childArr = [
  {
    name: "Emma",
    year: 12,
  },
  {
    name: "Norma",
    year: 12,
  },
  {
    name: "Ray",
    year: 12,
  },
];
var result = JSON.stringify(childArr, ["name"]); // '[{"name":"Emma"},{"name":"Norma"},{"name":"Ray"}]'
```

缩进可以提高可读性  
只缩进不过滤

```js
JSON.stringify(childArr, undefined, 2);
```

## JSON.parse

JSON 字符串转对象  
[序列化限制](./012_complex_data.md#序列化对象)  
可以传入第二个参数

```js
const test = JSON.stringify([
  {
    name: "Emma",
    year: 12,
  },
  {
    name: "Norma",
    year: 12,
  },
  {
    name: "Ray",
    year: 12,
  },
]);
JSON.parse(test, (key, value) => {
  if (key === "name") {
    return `${value}_extra`;
  }
  return value;
});
```

```json
[
  {
    "name": "Emma_extra",
    "year": 12
  },
  {
    "name": "Norma_extra",
    "year": 12
  },
  {
    "name": "Ray_extra",
    "year": 12
  }
]
```
