import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "src/entity/Post";
import { getDatabaseConnection } from "lib/getDatabaseConnection";
import { withSession } from 'lib/withSession'

const Posts = withSession(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { title, content } = req.body
    const post = new Post()
    post.title = title;
    post.content = content;
    const user = req.session.get('currentUser');
    post.author = user;
    const connection = await getDatabaseConnection()
    await connection.manager.save(post);
    res.json(post);
  }
}
)
export default Posts