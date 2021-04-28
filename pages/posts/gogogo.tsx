import { getPost } from 'lib/posts'
import { NextPage } from 'next'

type Context = {
  params: {
    title: String;
  }
}

const pageTitle: NextPage<{ posts: Posts }> = (props) => {
  const { posts } = props
  return (
    <div>
      <h3>标题: {posts.title}</h3>
      <h4>时间: {posts.date}</h4>
      <article>
        {posts.content}
      </article>
    </div>
  )
}
export default pageTitle

export async function getStaticPaths() {
  return {
    paths: [
      { params: { title: 'first' } },
      { params: { title: 'second' } }

    ],
    fallback: false,
  }
}

export const getStaticProps = async (context: Context) => {
  const title = context.params.title
  const posts = await getPost(title)
  return {
    props: {
      posts: posts,
    }
  }
}