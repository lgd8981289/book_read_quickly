# template

## 开发者指南

本项目使用 lerna 来管理多个插件

安装 lerna

```bash
$ npm install -g lerna@4
```

lerna 常用命令

```bash
$ lerna init # 初始化
$ lerna create @templatejs/parser # 创建一个package
$ lerna add @types/node --scope=@templatejs/node # 给package安装依赖
$ lerna list # 列出所有的包
$ lerna bootstrap # 安装全部依赖
$ lerna link # 建立全部软连接
$ lerna changed # 列出下次发版lerna publish 要更新的包
$ lerna publish # 会打tag，上传git,上传npm
```

发布步骤，修改 changelog

```bash
$ yarn test
$ yarn build
$ lerna publish
```
