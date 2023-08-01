### @jtemplate/parser ![example workflow](https://github.com/jtemplate/parser/actions/workflows/ci.yml/badge.svg)

实现 JavaScript 引用对象的深拷贝功能

### 使用者指南

通过 npm 下载安装代码

```bash
$ npm install --save @jtemplate/parser
```

如果你是 node 环境

```js
var { clone } = require('@jtemplate/parser');

clone({ a: 1 });
```

如果你是 webpack 等环境

```js
import { clone } from '@jtemplate/parser';

clone({ a: 1 });
```

如果你是浏览器环境

```html
<script src="node_modules/@jtemplate/parser/dist/index.aio.js"></script>
<script>
  clone({ a: 1 });
</script>
```

### 贡献者指南

首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试:

```bash
$ npm test
```
