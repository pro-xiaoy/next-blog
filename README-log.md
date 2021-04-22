# Next使用小节
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

## SSG
静态页面生成,只会生成一次,**问题来了,他是怎么只请求一次生成DOM节点?**他是在build阶段发出请求然后根据JSX生成DOM,秀秀秀❤.


## SSR
请求到来的时候运行getServerSidePropse

# Docker使用
## 启动数据库postgresql
```js
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```
  * docker ps       --- 看进程
  * docker ps -a    --- 看所有进程

## 验证PG（postgresql）
进入docker 容器
```js
$ docker exec -it 容器id bash 
// id 找不到 docker ps 找对应id
```
链接pg
```js
psql -U blog
```
使用sql创建数据库
