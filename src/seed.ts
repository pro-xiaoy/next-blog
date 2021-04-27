import Posts from "pages/api/v1/posts";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { log } from "util";
import { Post } from './entity/Post'
createConnection().then(async connection => {
    const postList = await connection.manager.find(Post)
    if (postList.length === 0) {
        await connection.manager.save([1,2,3,4,5,6,7,8,9,10,11].map(item => {
            return new Post({title: `第${item}篇`, content: `这是我的第${item}篇文章内容`})
        }))

        // await connection.manager.save(new Post({ title: `第1篇`, content: `这是我的第1篇文章内容` }))
        console.log('保存成功++++')
    }
    console.log('postList+++', postList)
    connection.close()

}).catch(error => console.log('error+++', error));
