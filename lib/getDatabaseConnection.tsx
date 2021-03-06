import { getConnectionManager, createConnection } from "typeorm"
import "reflect-metadata";
import { Post } from "src/entity/Post";
import { User } from "src/entity/User";
import { Comment } from 'src/entity/Comment'
import config from 'ormconfig.json'


const create = async () => {
  console.log('123123+++', process.env.NODE_ENV)
  // @ts-ignore
  return createConnection({
    ...config,
    database: process.env.NODE_ENV === 'production' ? 'blog_production' : 'blog_development',
    entities: [Post, User, Comment]
  })
}

// 启动项目链接数据库有问题
const promise = (async function () {
  const manager = getConnectionManager()
  const current = manager.has('default') && manager.get('default')
  if (current) { await current.close() }
  return create()
})()

export const getDatabaseConnection = async () => {
  return promise
}