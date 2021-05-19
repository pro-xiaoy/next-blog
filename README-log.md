# Next使用小节

## 快速导航 --- 客户端导航

* a

  浏览器会请求整个页面的所有的请求

* Link

  一个请求将XX.js(html+js+css)打包请求, 对页面进行替换, 通过ajax的方式, 因为省了很多请求和解析, 速度极其快

## 同构代码

类似这种ssr项目里面, 在NODE中运行和浏览器环境都运行

## 静态文件

官方推荐放在public里面但是文件名的hash不改, 导致更新没那么快

## 改用ts

``` js
  yarn global add typescript
  tsc--init
  // 将jsconfig.json合并到tsconfig.json里面

  yarn add--dev typescript @types / react @types / node
  yarn dev

  // 改后缀把.js 改为.tsx
```

## Next.js 三种渲染方式

* 客户端渲染

  类似spa

* 静态页面生成(SSG)

  解决白屏, SEO问题, 无法生成用户相关内容(所有请求结果一样)

* 服务端渲染(SSR)

  解决白屏SEO, 生成用户相关内容

* **Tips** SSR SSG 都属于预渲染 Pre-render

## SSG

静态页面生成, 只会生成一次, **问题来了, 他是怎么只请求一次生成DOM节点?**他是在build阶段发出请求然后根据JSX生成DOM, 秀秀秀❤.

## SSR

请求到来的时候运行getServerSidePropse

# Docker使用

## 启动数据库postgresql

``` bash
mkdir blog-data

docker run - v "$PWD/blog-data": /var/lib / postgresql / data - p 5432: 5432 - e POSTGRES_USER = blog - e POSTGRES_HOST_AUTH_METHOD = trust - d postgres: 12.2
```

  + docker ps       --- 看进程
  + docker ps -a    --- 看所有进程
  + docker rm id    --- 删除镜像

## 验证PG（postgresql）

进入docker 容器

``` js
$ docker exec - it 容器id bash
// id 找不到 docker ps 找对应id
```

有时候会出现容器关闭

``` bash
docker restart <id>
```

链接pg

``` js
psql - U blog
```

使用sql创建数据库

``` js
  //# 正常来说创建三个表分别对应 development  test production
  CREATE DATABASE blog_production ENCODING 'UTF8'
  LC_COLLATE 'en_US.utf8'
  LC_CTYPE 'en_US.utf8';
```

链接数据库

``` bash
\c [数据库名]

select * from [表名];
```

## next安装typeorm

[安装文档](https://typeorm.biunav.com/zh/#%E5%AE%89%E8%A3%85)

## 统一编译方式

next 使用tabel  typeorm使用 node-ts ，调试半天使用babel翻译ts

``` js
npx babel. / src--out - dir dist--extensions ".ts,.tsx"
```

创建生成数据库的migration文件名

``` js
 npx typeorm migration: create - n CreatePost
```

创建/删除数据表: 看package.json里面的配置项

``` bash
      "migration:run": "typeorm migration:run",
      "migration:revert": "typeorm migration:revert",
```

## typeorm生成文件问题

注意看ormconfig.json配置里面的文件， 因为我们使用babel将src里面的包全部打成js, 注意**ormconfig**里面执行bash是ts

## concurrently

`concurrently` 为了同时跑两个webpack命令，而不是开两个进程的方法，强烈适合windows

## 增删改查

增删改查很难吗?

## reflection-data

## session

session和cookie是对应得关系, cookie是存储在客户端上, session是服务器存储得位置, 就像锁和钥匙, 由于你得cookie种下来以后, 你每次得http请求都会看到cookie, so每次都是校验正确

## docker 

``` bash
docker run -v /home/blog/blog-data:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2

docker build . -t fang/node-web-app
```

## liux

版本: centos 7.x

### node

[node安装教学](https://linuxize.com/post/how-to-install-node-js-on-centos-7/)

### 切换用户

su - <username>

### docker build

``` bash
# 创建数据库
docker run -v /home/blog/blog-data:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2

# 创建Node 应用
docker build . -t fang/node-web-app

docker run -p 9527:9527 -d fang/node-web-app

```

### 踩坑

当你部署到服务得时候，你访问得时候会发现  connect ECONNREFUSED, 也不知道为啥反正就是报错; 

解决方法：将两个容器都删除重新配置Host:

``` bash
 docker run --network=host -v /home/blog/blog-data:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2

## 进入Linux之后首先要
  yarn build

  docker build . -t fang/node-web-app
  docker run --network=host -p 9527:9527 -d fang/node-web-app
```
## 网页制作
### logo 
hatchful

### 在linux上面设置了NODE_ENV之后yarn装不到devDependencies内容
yarn install --production false
> 傻逼百度搜了半天都没搜到