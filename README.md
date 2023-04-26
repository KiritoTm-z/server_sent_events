<h1 align="center">
Server-sent Events Demo
</h1>

#### 🌈 介绍

注意到chatGPT的回答是一个字一个字的蹦出来的，了解了一下其实现方式（服务端推送事件）后，使用 Node 作为服务端， TS 作为客户端，写了一个小案例来模拟一下。
只为探究实现原理，没有注重页面美观度。但为了一点点的美观，以 cdn 方式使用了 bootstrap 的一些组件。
如 cdn 出现了一些问题，请自行在 index.html 中做调整。

#### ⚡ 使用说明

推荐使用 pnpm
先将项目克隆至本地

```bash

# 安装依赖
pnpm install


# 运行项目
# 运行 pnpm start 启动 Node 服务端
# 运行 pnpm dev 启动客户端

pnpm start
pnpm dev


```