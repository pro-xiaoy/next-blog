import "reflect-metadata";
import { createConnection } from "typeorm";
import { log } from "util";
import { Post } from './entity/Post'
createConnection().then(async connection => {
    // const posts = await connection.manager.find(Post)
    const p = new Post()
    p.title='Post 1'
    p.content='我的第一篇文章'
    await connection.manager.save(p)
    console.log('p+++', p)
    // console.log('Post+++', Post)
    // const posts = await connection.manager.find(Post);
    console.log('connection+++', connection);
    connection.close()

}).catch(error => console.log(error));
