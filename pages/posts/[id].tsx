
import { getPosts } from 'lib/posts'
import {GetServerSideProps, NextPage} from 'next';
import { getDatabaseConnection } from '../../lib/getDatabaseConnection'

import Link from 'next/link'
import { Post } from 'src/entity/Post';

type Props = {
  post: Post
}

const postsIndex: NextPage<Props> = (props) => {
  const { post } = props
  return (
    <div style={{ padding: '20px 40px' }}>
      <p>标题: {post.title}</p>
      <div>内容:</div>
      <div>
        {post.content}
      </div>
    </div>
  )
}


export const getServerSideProps = async (context) => {
  const id = context.params.id
  const connection = await getDatabaseConnection()
  const post = await connection.manager.findOne(Post, id)
  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  }
}

export default postsIndex
