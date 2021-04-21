## 快速导航 --- 客户端导航
* a
  浏览器会请求整个页面的所有的请求
* Link
  一个请求将XX.js(html+js+css)打包请求,对页面进行替换, 通过ajax的方式, 因为省了很多请求和解析,速度极其快

## 同构代码
类似这种ssr项目里面,在NODE中运行和浏览器环境都运行

## 静态文件
官方推荐放在public里面但是文件名的hash不改,导致更新没那么快

## 改用ts
```js
  yarn global add typescript
  tsc --init
  // 将jsconfig.json合并到tsconfig.json里面

  yarn add --dev typescript @types/react @types/node 
  yarn dev

  // 改后缀把.js 改为.tsx
```

## Next.js 三种渲染方式
* 客户端渲染
  类似spa
* 静态页面生成(SSG)
  解决白屏,SEO问题, 无法生成用户相关内容(所有请求结果一样)
* 服务端渲染(SSR)
  解决白屏SEO, 生成用户相关内容

* **Tips** SSR SSG 都属于预渲染 Pre-render